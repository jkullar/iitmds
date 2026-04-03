import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { setGlobalDispatcher, ProxyAgent } from 'undici';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const TRANSCRIPTS_DIR = path.join(ROOT, 'transcripts');
const NOTES_DIR = path.join(ROOT, 'notes');

// ── Proxy + Auth (same as extract-curriculum.ts) ────────────────────────────
const proxyUrl = process.env['GLOBAL_AGENT_HTTP_PROXY'];
if (proxyUrl) setGlobalDispatcher(new ProxyAgent(proxyUrl));

const sessionTokenFile = process.env['CLAUDE_SESSION_INGRESS_TOKEN_FILE'];
const sessionToken = sessionTokenFile && fs.existsSync(sessionTokenFile)
  ? fs.readFileSync(sessionTokenFile, 'utf8').trim()
  : undefined;

const client = process.env['ANTHROPIC_API_KEY']
  ? new Anthropic()
  : new Anthropic({ authToken: sessionToken });

// ── Synthesis Plan ───────────────────────────────────────────────────────────

interface SynthesisTarget {
  output: string;           // filename in notes/
  title: string;            // document title
  sources: string[];        // transcript file globs (week/filename)
  crossRefs: string[];      // existing note files to reference
  focusHint: string;        // brief hint to guide topic focus
}

const PLAN: SynthesisTarget[] = [
  // ── Refresher Week: Single-Variable Calculus Prerequisites ────────────────
  {
    output: '0 - CALCULUS PREREQUISITES.md',
    title: 'SINGLE-VARIABLE CALCULUS PREREQUISITES',
    sources: [
      'refresher/Refresher_T1_Refresher_week_-_tutorial_1.md',
      'refresher/Refresher_T2_Refresher_week_-_tutorial_2.md',
      'refresher/Refresher_T3_Refresher_week_-_tutorial_3.md',
      'refresher/Refresher_T4_Refresher_week_-_tutorial_4.md',
      'refresher/Refresher_T5_Refresher_week_-_tutorial_5.md',
      'refresher/Refresher_T6_Refresher_week_-_tutorial_6.md',
    ],
    crossRefs: [],
    focusHint: 'Left-hand and right-hand limits, existence of limits, limit laws, continuity at a point, types of discontinuity, floor function, piecewise functions. These are single-variable calculus prerequisites needed before the course begins.',
  },

  // ── Special Week: Multivariable Limits and Paths ──────────────────────────
  {
    output: '17 - MULTIVARIABLE LIMITS AND PATHS.md',
    title: 'MULTIVARIABLE LIMITS AND PATH TESTS',
    sources: [
      'special/MDS2_1_Mathematics_for_Data_Science_II_-_Video_1.md',
      'special/MDS2_2_Mathematics_for_Data_Science_II_-_Video_2.md',
      'special/MDS2_3_Mathematics_for_Data_Science_II_-_Video_3.md',
      'special/MDS2_4_Mathematics_for_Data_Science_II_-_Video_4.md',
    ],
    crossRefs: ['13 - MULTIVARIABLE FUNCTIONS', '14 - PARTIAL AND DIRECTIONAL DERIVATIVES'],
    focusHint: 'Partial derivatives from first principles (definition via limit), multivariable limits via path approach, path test for non-existence of limits, continuity at a point for multivariable functions, directional derivatives for three-variable functions, gradient dot product theorem.',
  },

  // ── W5-W8: Advanced Linear Algebra ────────────────────────────────────────
  {
    output: '8 - LINEAR MAPS.md',
    title: 'LINEAR MAPS AND NULL SPACE',
    sources: [
      'week5/W5_L1_The_null_space_of_a_matrix_-_finding_nullity_and_a_basis_-_part_1.md',
      'week5/W5_L2_The_null_space_of_a_matrix_-_finding_nullity_and_a_basis_-_part_2.md',
      'week5/W5_L3_What_is_a_linear_mapping_-_part_1.md',
      'week5/W5_L4_What_is_a_linear_mapping_-_part_2.md',
      'week5/W5_L5_What_is_a_linear_transformation.md',
    ],
    crossRefs: ['2 - SOLVING SYSTEMS', '5 - VECTORS AND SPACES', '7 - BASIS AND RANK'],
    focusHint: 'Null space definition, finding null space via row reduction, nullity, rank-nullity theorem, definition of linear mappings/transformations, preservation of addition and scalar multiplication.',
  },
  {
    output: '9 - TRANSFORMATIONS.md',
    title: 'LINEAR TRANSFORMATIONS AND MATRICES',
    sources: [
      'week6/W6_L1_Linear_transformations,_ordered_bases_&_matrices.md',
      'week6/W6_L2_Image_&_kernel_of_linear_transformations.md',
      'week6/W6_L3_Examples_of_finding_bases_for_the_kernel_&_image_of_a_linear_transformation.md',
    ],
    crossRefs: ['1 - MATRICES', '7 - BASIS AND RANK', '8 - LINEAR MAPS'],
    focusHint: 'Ordered bases, matrix representation of a linear transformation, kernel and image of a transformation, finding bases for kernel and image, injectivity/surjectivity connections.',
  },
  {
    output: '10 - MATRIX RELATIONS.md',
    title: 'MATRIX EQUIVALENCE, SIMILARITY AND AFFINE MAPS',
    sources: [
      'week7/W7_L1_Equivalence_&_similarity_of_matrices.md',
      'week7/W7_L2_Affine_subspaces_&_affine_mappings.md',
    ],
    crossRefs: ['1 - MATRICES', '9 - TRANSFORMATIONS', '5 - VECTORS AND SPACES'],
    focusHint: 'Matrix equivalence, equivalence relations, matrix similarity, change of basis, affine subspaces, affine mappings, solution sets as affine subspaces.',
  },
  {
    output: '11 - INNER PRODUCTS.md',
    title: 'INNER PRODUCTS AND NORMS',
    sources: [
      'week7/W7_L3_Lengths_&_angles.md',
      'week7/W7_L4_Inner_products_&_norms_on_a_vector_space.md',
    ],
    crossRefs: ['5 - VECTORS AND SPACES', '6 - INDEPENDENCE'],
    focusHint: 'Lengths and angles in ℝⁿ, dot product, abstract inner products, norms, Cauchy-Schwarz inequality, inner product spaces.',
  },
  {
    output: '12 - ORTHOGONALITY.md',
    title: 'ORTHOGONALITY AND THE GRAM-SCHMIDT PROCESS',
    sources: [
      'week8/W8_L1_Orthogonality_&_linear_independence.md',
      'week8/W8_L2_What_is_an_orthonormal_basis.md',
      'week8/W8_L3_Projections_using_inner_products.md',
      'week8/W8_L4_The_gram-schmidt_process.md',
      'week8/W8_L5_Orthogonal_transformations_&_rotations.md',
    ],
    crossRefs: ['6 - INDEPENDENCE', '7 - BASIS AND RANK', '11 - INNER PRODUCTS'],
    focusHint: 'Orthogonal sets, orthogonal basis, orthonormal basis, projections onto subspaces, Gram-Schmidt orthogonalisation, orthogonal matrices and rotations.',
  },

  // ── W9-W11: Multivariable Calculus ────────────────────────────────────────
  {
    output: '13 - MULTIVARIABLE FUNCTIONS.md',
    title: 'MULTIVARIABLE FUNCTIONS',
    sources: [
      'week9/W9_L1_Multivariable_functions_-_visualization.md',
      'week9/W9_L4_Limits_for_scalar-valued_multivariable_functions.md',
      'week9/W9_L5_Continuity_for_multivariable_functions.md',
    ],
    crossRefs: ['5 - VECTORS AND SPACES'],
    focusHint: 'Scalar-valued and vector-valued multivariable functions, domain and range, level curves and level surfaces, visualisation, limits and continuity for multivariable functions.',
  },
  {
    output: '14 - PARTIAL AND DIRECTIONAL DERIVATIVES.md',
    title: 'PARTIAL DERIVATIVES AND THE GRADIENT',
    sources: [
      'week9/W9_L2_Partial_derivatives.md',
      'week9/W9_L3_Directional_derivatives.md',
      'week9/W9_L6_Directional_derivatives_in_terms_of_the_gradient.md',
    ],
    crossRefs: ['13 - MULTIVARIABLE FUNCTIONS', '11 - INNER PRODUCTS'],
    focusHint: 'Partial derivatives, computation rules, directional derivatives, gradient vector, gradient as direction of steepest ascent, relationship between directional derivative and gradient.',
  },
  {
    output: '15 - TANGENTS AND CRITICAL POINTS.md',
    title: 'TANGENT PLANES AND CRITICAL POINTS',
    sources: [
      'week10/W10_L1_The_direction_of_steepest_ascent-descent.md',
      'week10/W10_L2_Tangents_for_scalar-valued_multivariable_functions.md',
      'week10/W10_L3_Finding_the_tangent_hyper(plane).md',
      'week10/W10_L4_Critical_points_for_multivariable_functions.md',
    ],
    crossRefs: ['14 - PARTIAL AND DIRECTIONAL DERIVATIVES', '13 - MULTIVARIABLE FUNCTIONS'],
    focusHint: 'Steepest ascent/descent direction, tangent lines in multivariable setting, tangent planes and hyperplanes, linear approximation, critical points, finding and classifying critical points.',
  },
  {
    output: '16 - HESSIAN AND DIFFERENTIABILITY.md',
    title: 'THE HESSIAN MATRIX AND DIFFERENTIABILITY',
    sources: [
      'week11/W11_L1_Higher_order_partial_derivatives_and_the_hessian_matrix.md',
      'week11/W11_L2_The_hessian_matrix_&_local_extrema_for_f(x,y).md',
      'week11/W11_L3_The_hessian_matrix_&_local_extrema_for_f(x,y,z).md',
      'week11/W11_L4_Differentiability_for_multivariable_functions.md',
      'week11/W11_L5_Review_of_maths_-_2.md',
    ],
    crossRefs: ['15 - TANGENTS AND CRITICAL POINTS', '14 - PARTIAL AND DIRECTIONAL DERIVATIVES', '1 - MATRICES'],
    focusHint: 'Higher-order partial derivatives, symmetry of mixed partials (Clairaut), Hessian matrix definition, Hessian test for local minima/maxima/saddle points for f(x,y) and f(x,y,z), leading principal minors, differentiability of multivariable functions.',
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function readTranscript(relPath: string): string {
  const full = path.join(TRANSCRIPTS_DIR, relPath);
  if (!fs.existsSync(full)) {
    console.warn(`  WARNING: transcript not found: ${relPath}`);
    return '';
  }
  return fs.readFileSync(full, 'utf8');
}

function readExistingNoteTOC(noteFile: string): string {
  const full = path.join(NOTES_DIR, `${noteFile}.md`);
  if (!fs.existsSync(full)) return `[[${noteFile}]] (not yet written)`;
  const content = fs.readFileSync(full, 'utf8');
  // Extract section headings only
  const headings = content
    .split('\n')
    .filter(l => l.startsWith('#'))
    .join('\n');
  return `[[${noteFile}]]\n${headings}`;
}

function delay(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

// ── Core Prompt ──────────────────────────────────────────────────────────────

function buildPrompt(target: SynthesisTarget, transcripts: string, crossRefContext: string): string {
  return `You are writing professional mathematics study notes for a university linear algebra and multivariable calculus course. These notes are used by students alongside lecture videos.

## Your Task

Produce a complete, self-contained notes file titled **${target.title}**.

Focus areas for this file: ${target.focusHint}

---

## Source Transcripts

The following are lecture video transcripts (timestamped). Extract, synthesise and expand their mathematical content — do NOT simply copy the transcript. The transcripts are informal speech; the notes must be precise and well-structured.

${transcripts}

---

## Existing Notes Files (for cross-referencing)

These files already exist. Use [[filename without .md]] syntax to link to them:

${crossRefContext}

---

## STRICT FORMAT REQUIREMENTS

### Mathematics (CRITICAL — follow exactly)

1. **Display matrices** — always use bmatrix, never ASCII art or plain text:
$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$$

2. **Augmented matrices**:
$$\\left[\\begin{array}{cc|c} a & b & e \\\\ c & d & f \\end{array}\\right]$$

3. **Systems of equations**:
$$\\begin{cases} a_{11}x_1 + a_{12}x_2 = b_1 \\\\ a_{21}x_1 + a_{22}x_2 = b_2 \\end{cases}$$

4. **Inline math**: wrap in single $...$  e.g. $Ax = 0$, $T: \\mathbb{R}^n \\to \\mathbb{R}^m$, $\\det(A)$

5. **Display equations**: wrap in $$...$$  e.g. $$Ax = \\lambda x$$

6. **NEVER** write matrices as \`[[1,2],[3,4]]\`, \`(1 2; 3 4)\`, or any plain-text table substitute.

7. **Sets and spaces**: $\\mathbb{R}^n$, $\\mathbb{R}^{m \\times n}$, $\\ker(T)$, $\\text{im}(T)$, $\\text{null}(A)$

### Document Structure

- Start with \`# ${target.title}\` (H1 title)
- Opening paragraph: what this file covers and why it matters
- Major sections with \`## N. Section Title\`
- Subsections with \`### Subsection Title\`
- **Bold** every key term on its first definition
- Worked examples clearly labelled: **Example:** ... **Solution:** ...
- \`> **Clarification:**\` blockquotes for common confusions
- Summary table at end of each major section (where appropriate)
- Full summary table at end of file

### Content Quality

- **Define everything**: never use a term without defining it first
- **Theory + example**: every theorem or definition needs at least one worked example with full computation shown
- **Fix errors**: if a transcript contains a mistake, correct it silently
- **Add what is missing**: if a concept is mentioned but not explained, provide the explanation
- **Proofs**: include proof sketches where the proof is illuminating; omit routine ones
- **Clarification sections**: add where the transcripts reveal common confusions
- **Forward references**: use "Deeper treatment in [[filename]]" rather than repeating content
- **No week references**: do not say "in week 5 we learned..." — this is topic-based, not week-based

Produce the complete markdown file now. Be comprehensive — aim for the same depth as the existing notes (files 1–7 averaged ~350 lines each).`;
}

// ── Main Synthesis Loop ──────────────────────────────────────────────────────

async function synthesiseFile(target: SynthesisTarget, index: number, total: number): Promise<void> {
  const outputPath = path.join(NOTES_DIR, target.output);

  if (fs.existsSync(outputPath)) {
    console.log(`[${index}/${total}] SKIP (exists): ${target.output}`);
    return;
  }

  console.log(`\n[${index}/${total}] Synthesising: ${target.output}`);
  console.log(`  Sources: ${target.sources.length} transcripts`);

  // Read all source transcripts
  const transcriptBlocks = target.sources
    .map((src, i) => {
      const content = readTranscript(src);
      if (!content) return '';
      const name = path.basename(src, '.md').replace(/_/g, ' ');
      return `### Source ${i + 1}: ${name}\n\n${content}`;
    })
    .filter(Boolean)
    .join('\n\n---\n\n');

  if (!transcriptBlocks) {
    console.log(`  ERROR: no transcript content found, skipping.`);
    return;
  }

  // Read cross-reference TOCs
  const crossRefContext = target.crossRefs
    .map(ref => readExistingNoteTOC(ref))
    .join('\n\n---\n\n');

  const prompt = buildPrompt(target, transcriptBlocks, crossRefContext);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      process.stdout.write(`  Calling Claude Opus 4.6 (attempt ${attempt})... `);

      const stream = client.messages.stream({
        model: 'claude-opus-4-6',
        max_tokens: 8192,
        messages: [{ role: 'user', content: prompt }],
      });

      // Stream to stdout for progress feedback + collect full text
      let fullText = '';
      let tokenCount = 0;

      stream.on('text', (delta) => {
        fullText += delta;
      });

      const message = await stream.finalMessage();
      const textBlock = message.content.find(b => b.type === 'text');
      if (!textBlock || textBlock.type !== 'text') throw new Error('No text block in response');

      fullText = textBlock.text;
      tokenCount = message.usage.output_tokens;

      // Write output
      fs.writeFileSync(outputPath, fullText, 'utf8');
      const lines = fullText.split('\n').length;
      console.log(`OK (${lines} lines, ${tokenCount} output tokens)`);
      return;

    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (attempt < 3) {
        console.log(`\n  [retry ${attempt}/2] ${msg.slice(0, 80)}`);
        await delay(3000 * attempt);
      } else {
        console.log(`\n  FAILED: ${msg.slice(0, 100)}`);
      }
    }
  }
}

async function main() {
  console.log('=== Notes Synthesis Pipeline ===\n');
  console.log(`Output dir:  ${NOTES_DIR}`);
  console.log(`Plan:        ${PLAN.length} files\n`);

  const targetArg = process.argv[2]; // optional: run single file by index (1-based)
  const targets = targetArg
    ? [PLAN[parseInt(targetArg) - 1]].filter(Boolean)
    : PLAN;

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    if (!target) continue;
    const globalIndex = PLAN.indexOf(target) + 1;
    await synthesiseFile(target, globalIndex, PLAN.length);
    if (i < targets.length - 1) await delay(1000);
  }

  console.log('\n=== DONE ===');
  console.log(`Notes directory: ${NOTES_DIR}`);
  const noteFiles = fs.readdirSync(NOTES_DIR).filter(f => f.endsWith('.md') && f !== 'README.md' && f !== 'WORKFLOW_SUMMARY.md');
  console.log(`Note files:  ${noteFiles.length}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
