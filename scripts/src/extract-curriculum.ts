import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { setGlobalDispatcher, ProxyAgent } from 'undici';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const TRANSCRIPTS_DIR = path.join(ROOT, 'transcripts');
const OUTPUT_FILE = path.join(TRANSCRIPTS_DIR, 'curriculum.json');
const PROGRESS_FILE = path.join(TRANSCRIPTS_DIR, '.curriculum-progress.json');

// Proxy: Claude Code sandboxes route outbound HTTPS through an authenticated
// internal proxy (GLOBAL_AGENT_HTTP_PROXY). Node's native fetch ignores this,
// but undici (built into Node 18+) supports setGlobalDispatcher which patches
// the global fetch used by the Anthropic SDK.
const proxyUrl = process.env['GLOBAL_AGENT_HTTP_PROXY'];
if (proxyUrl) {
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

// Auth: prefer ANTHROPIC_API_KEY, fall back to Claude Code session ingress token
const sessionTokenFile = process.env['CLAUDE_SESSION_INGRESS_TOKEN_FILE'];
const sessionToken = sessionTokenFile && fs.existsSync(sessionTokenFile)
  ? fs.readFileSync(sessionTokenFile, 'utf8').trim()
  : undefined;

const client = process.env['ANTHROPIC_API_KEY']
  ? new Anthropic()
  : new Anthropic({ authToken: sessionToken });

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TimestampedConcept {
  name: string;
  timestamp: string;
}

interface ExampleEntry {
  summary: string;
  timestamp: string;
}

interface ProblemEntry {
  concept: string;
  summary: string;
  timestamp: string;
}

interface LectureExtraction {
  type: 'lecture' | 'refresher' | 'special';
  code: string;
  file: string;
  video_url: string;
  week: string;
  concepts: TimestampedConcept[];
  examples_count: number;
  examples: ExampleEntry[];
}

interface TutorialExtraction {
  type: 'tutorial';
  code: string;
  file: string;
  video_url: string;
  week: string;
  problems: ProblemEntry[];
  problems_count: number;
}

type FileExtraction = LectureExtraction | TutorialExtraction;

interface Progress {
  extractions: Record<string, FileExtraction>;
}

interface RawCurriculumConcept {
  name: string;
  introduced_in_code: string;
  practiced_in_codes: string[];
}

interface RawCurriculumWeek {
  week: string;
  label: string;
  theme: string;
  concepts: RawCurriculumConcept[];
}

interface RawCurriculum {
  weeks: RawCurriculumWeek[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function timestampToSeconds(ts: string): number {
  const parts = ts.split(':').map(Number);
  if (parts.length === 2) {
    return (parts[0] ?? 0) * 60 + (parts[1] ?? 0);
  }
  return 0;
}

function buildDeepLink(videoUrl: string, timestamp: string): string {
  const secs = timestampToSeconds(timestamp);
  // YouTube URLs already contain ?v=... so append &t=
  return `${videoUrl}&t=${secs}`;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getFileType(code: string): 'lecture' | 'tutorial' | 'refresher' | 'special' {
  if (code.startsWith('MDS2_')) return 'special';
  if (code.startsWith('Refresher_T')) return 'refresher';
  if (/_L\d/.test(code)) return 'lecture';
  if (/_T\d/.test(code)) return 'tutorial';
  return 'lecture';
}

function parseMarkdownHeader(content: string): { code: string; video_url: string } {
  const codeMatch = content.match(/^#\s+([^:\n]+):/m);
  const urlMatch = content.match(/\*\*YouTube URL:\*\*\s+(https:\/\/[^\s\n]+)/);
  return {
    code: codeMatch?.[1]?.trim() ?? '',
    video_url: urlMatch?.[1]?.trim() ?? '',
  };
}

function extractJsonFromText(text: string): unknown {
  // Try to find a JSON object in the response
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON object found in response');
  return JSON.parse(match[0]);
}

function loadProgress(): Progress {
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')) as Progress;
    } catch {
      return { extractions: {} };
    }
  }
  return { extractions: {} };
}

function saveProgress(progress: Progress): void {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf8');
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

const WEEK_ORDER = [
  'week1', 'week2', 'week3', 'week4', 'week5', 'week6',
  'week7', 'week8', 'week9', 'week10', 'week11', 'refresher', 'special',
];

function getAllTranscriptFiles(): Array<{ file: string; relPath: string; week: string }> {
  const files: Array<{ file: string; relPath: string; week: string }> = [];
  for (const week of WEEK_ORDER) {
    const dir = path.join(TRANSCRIPTS_DIR, week);
    if (!fs.existsSync(dir)) continue;
    const weekFiles = fs.readdirSync(dir)
      .filter(f => f.endsWith('.md') && f !== 'README.md')
      .sort()
      .map(f => ({
        file: path.join(dir, f),
        relPath: `${week}/${f}`,
        week,
      }));
    files.push(...weekFiles);
  }
  return files;
}

// ---------------------------------------------------------------------------
// Pass 1 — Per-file extraction
// ---------------------------------------------------------------------------

async function extractFromLecture(
  content: string,
): Promise<Pick<LectureExtraction, 'concepts' | 'examples_count' | 'examples'>> {
  const stream = client.messages.stream({
    model: 'claude-opus-4-6',
    max_tokens: 2048,
    system: 'You are analyzing lecture transcripts from a linear algebra and multivariable calculus university course. You extract mathematical concepts that are formally introduced.',
    messages: [{
      role: 'user',
      content: `Analyze this lecture transcript. Extract mathematical concepts.

RULES:
- Extract ONLY concepts that are formally DEFINED or INTRODUCED for the first time in this lecture
- Use the EARLIEST timestamp [MM:SS] where each concept first appears in the text
- Concept names: concise, 1-4 words (e.g. "Eigenvalue", "Row echelon form", "Dot product")
- Also extract any distinct worked EXAMPLES (actual computations shown, not just mentions)
- Skip: re-explanations of previous concepts, administrative talk, motivational examples without new math

TRANSCRIPT:
${content}

Return ONLY valid JSON, no explanation:
{
  "concepts": [{"name": "...", "timestamp": "MM:SS"}],
  "examples_count": 0,
  "examples": [{"summary": "1-line description of what is computed", "timestamp": "MM:SS"}]
}`,
    }],
  });

  const message = await stream.finalMessage();
  const textBlock = message.content.find(b => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') throw new Error('No text block in response');
  return extractJsonFromText(textBlock.text) as Pick<LectureExtraction, 'concepts' | 'examples_count' | 'examples'>;
}

async function extractFromTutorial(
  content: string,
): Promise<Pick<TutorialExtraction, 'problems' | 'problems_count'>> {
  const stream = client.messages.stream({
    model: 'claude-opus-4-6',
    max_tokens: 2048,
    system: 'You are analyzing tutorial transcripts from a linear algebra and multivariable calculus university course. You identify distinct problems that are solved step by step.',
    messages: [{
      role: 'user',
      content: `Analyze this tutorial transcript. Extract each distinct problem that is solved.

RULES:
- Each distinct problem/example = one entry, even if the same concept appears multiple times
- "concept": the mathematical topic being practiced (e.g. "Gaussian elimination", "Eigenvalues", "Matrix multiplication")
- "summary": a 1-line description of what is actually computed (e.g. "Find eigenvalues of a 3×3 matrix", "Solve 3-variable linear system")
- "timestamp": when the problem STATEMENT first appears [MM:SS]
- If multiple problems of the same type appear, still list each separately

TRANSCRIPT:
${content}

Return ONLY valid JSON, no explanation:
{
  "problems": [{"concept": "...", "summary": "...", "timestamp": "MM:SS"}],
  "problems_count": 0
}`,
    }],
  });

  const message = await stream.finalMessage();
  const textBlock = message.content.find(b => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') throw new Error('No text block in response');
  const result = extractJsonFromText(textBlock.text) as Pick<TutorialExtraction, 'problems' | 'problems_count'>;
  // Ensure problems_count matches actual list length
  result.problems_count = result.problems?.length ?? 0;
  return result;
}

// ---------------------------------------------------------------------------
// Pass 2 — Build curriculum from all extractions
// ---------------------------------------------------------------------------

async function buildCurriculum(extractions: Record<string, FileExtraction>): Promise<RawCurriculum> {
  const lectureLines = Object.values(extractions)
    .filter(e => e.type !== 'tutorial')
    .map(e => {
      const l = e as LectureExtraction;
      const conceptNames = l.concepts.map(c => c.name).join(', ') || '(none extracted)';
      return `${l.code} [${l.week}]: concepts=[${conceptNames}]  examples=${l.examples_count}`;
    })
    .join('\n');

  const tutorialLines = Object.values(extractions)
    .filter(e => e.type === 'tutorial')
    .map(e => {
      const t = e as TutorialExtraction;
      const problemSummaries = t.problems.map(p => `${p.concept}: ${p.summary}`).join(' | ') || '(none)';
      return `${t.code} [${t.week}]: problems=[${problemSummaries}]`;
    })
    .join('\n');

  const stream = client.messages.stream({
    model: 'claude-opus-4-6',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `You are a curriculum designer. Given data extracted from a linear algebra and multivariable calculus course (weeks 1–11 plus refresher and special videos), produce a structured weekly curriculum.

LECTURES (introduce concepts):
${lectureLines}

TUTORIALS (practice problems):
${tutorialLines}

Tasks:
1. Normalize concept names: remove duplicates, standardize capitalization and terminology
2. For each concept, identify which lecture code introduces it (introduced_in_code) and which tutorial codes practice it (practiced_in_codes)
3. Assign every concept to its correct week
4. Give each week a short theme title (2–6 words)
5. Refresher concepts should be marked as prerequisites; include them in the "refresher" week
6. Special (MDS2) videos go in the "special" week

Return ONLY valid JSON, no explanation:
{
  "weeks": [
    {
      "week": "week1",
      "label": "Week 1",
      "theme": "Vectors and Matrices",
      "concepts": [
        {
          "name": "canonical concept name",
          "introduced_in_code": "W1_L1",
          "practiced_in_codes": ["W1_T1", "W1_T2"]
        }
      ]
    }
  ]
}`,
    }],
  });

  const message = await stream.finalMessage();
  const textBlock = message.content.find(b => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') throw new Error('No text block in response');
  return extractJsonFromText(textBlock.text) as RawCurriculum;
}

// ---------------------------------------------------------------------------
// Final enrichment — attach timestamps and deep links
// ---------------------------------------------------------------------------

function enrichCurriculum(
  rawCurriculum: RawCurriculum,
  extractions: Record<string, FileExtraction>,
) {
  const extractionByCode = new Map<string, FileExtraction>();
  for (const e of Object.values(extractions)) {
    extractionByCode.set(e.code, e);
  }

  let totalConcepts = 0;
  let totalProblems = 0;

  const weeks = rawCurriculum.weeks.map(week => {
    const concepts = week.concepts.map(concept => {
      const lectureExt = extractionByCode.get(concept.introduced_in_code) as LectureExtraction | undefined;

      // Find the timestamp for this specific concept in the lecture
      const matchedConcept = lectureExt?.concepts.find(
        c => c.name.toLowerCase().includes(concept.name.toLowerCase()) ||
             concept.name.toLowerCase().includes(c.name.toLowerCase()),
      ) ?? lectureExt?.concepts[0];

      const introduced_in = lectureExt
        ? {
            type: lectureExt.type,
            code: lectureExt.code,
            file: lectureExt.file,
            video_url: lectureExt.video_url,
            timestamp: matchedConcept?.timestamp ?? '00:00',
            deep_link: buildDeepLink(
              lectureExt.video_url,
              matchedConcept?.timestamp ?? '00:00',
            ),
            examples_count: lectureExt.examples_count,
          }
        : null;

      const practiced_in = concept.practiced_in_codes
        .map(code => {
          const tut = extractionByCode.get(code) as TutorialExtraction | undefined;
          if (!tut || tut.type !== 'tutorial') return null;
          totalProblems += tut.problems_count;
          return {
            type: 'tutorial' as const,
            code: tut.code,
            file: tut.file,
            video_url: tut.video_url,
            problems: tut.problems.map(p => ({
              summary: p.summary,
              concept: p.concept,
              timestamp: p.timestamp,
              deep_link: buildDeepLink(tut.video_url, p.timestamp),
            })),
            problems_count: tut.problems_count,
          };
        })
        .filter((t): t is NonNullable<typeof t> => t !== null);

      totalConcepts++;
      return {
        name: concept.name,
        introduced_in,
        practiced_in,
        is_prerequisite: week.week === 'refresher',
      };
    });

    return { ...week, concepts };
  });

  return {
    generated_at: new Date().toISOString(),
    total_concepts: totalConcepts,
    total_problems: totalProblems,
    weeks,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Curriculum Extraction Pipeline ===\n');

  const allFiles = getAllTranscriptFiles();
  console.log(`Found ${allFiles.length} transcript files\n`);

  const progress = loadProgress();
  const alreadyDone = Object.keys(progress.extractions).length;
  console.log(`Progress file: ${alreadyDone} files already extracted\n`);

  // ── Pass 1: Per-file extraction ──────────────────────────────────────────
  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < allFiles.length; i++) {
    const { file, relPath, week } = allFiles[i];

    // Skip if already extracted
    if (progress.extractions[relPath]) {
      skipped++;
      continue;
    }

    const content = fs.readFileSync(file, 'utf8');

    // Skip unavailable transcripts
    if (content.includes('## Transcript Unavailable')) {
      process.stdout.write(`[${i + 1}/${allFiles.length}] SKIP (unavailable) ${relPath}\n`);
      skipped++;
      continue;
    }

    const { code, video_url } = parseMarkdownHeader(content);
    if (!code) {
      process.stdout.write(`[${i + 1}/${allFiles.length}] SKIP (no code) ${relPath}\n`);
      skipped++;
      continue;
    }

    const fileType = getFileType(code);
    process.stdout.write(`[${i + 1}/${allFiles.length}] ${code} (${fileType}) ... `);

    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        let extraction: FileExtraction;

        if (fileType === 'tutorial') {
          const result = await extractFromTutorial(content);
          extraction = { type: 'tutorial', code, file: relPath, video_url, week, ...result };
        } else {
          const result = await extractFromLecture(content);
          extraction = {
            type: fileType as 'lecture' | 'refresher' | 'special',
            code, file: relPath, video_url, week, ...result,
          };
        }

        progress.extractions[relPath] = extraction;
        saveProgress(progress);
        processed++;
        success = true;

        const summary =
          fileType === 'tutorial'
            ? `${(extraction as TutorialExtraction).problems_count} problems`
            : `${(extraction as LectureExtraction).concepts.length} concepts, ${(extraction as LectureExtraction).examples_count} examples`;
        console.log(`OK (${summary})`);
        break;
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (attempt < 3) {
          process.stdout.write(`  [retry ${attempt}/2] ${msg.slice(0, 60)}\n`);
          await delay(2000 * attempt);
        } else {
          console.log(`FAILED: ${msg.slice(0, 80)}`);
          failed++;
        }
      }
    }

    // Respect rate limits
    if (success && i < allFiles.length - 1) {
      await delay(400);
    }
  }

  console.log(`\nPass 1 complete — processed: ${processed}, skipped: ${skipped}, failed: ${failed}`);
  console.log(`Total extractions in progress file: ${Object.keys(progress.extractions).length}\n`);

  // ── Pass 2: Build curriculum ─────────────────────────────────────────────
  console.log('Pass 2: Building curriculum from all extractions...');
  const rawCurriculum = await buildCurriculum(progress.extractions);

  // ── Enrich with timestamps + deep links ──────────────────────────────────
  console.log('Enriching with timestamps and deep links...');
  const curriculum = enrichCurriculum(rawCurriculum, progress.extractions);

  // ── Write output ─────────────────────────────────────────────────────────
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(curriculum, null, 2), 'utf8');

  console.log('\n=== DONE ===');
  console.log(`Total concepts:  ${curriculum.total_concepts}`);
  console.log(`Total problems:  ${curriculum.total_problems}`);
  console.log(`Output:          ${OUTPUT_FILE}`);
  console.log(`Progress file:   ${PROGRESS_FILE}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
