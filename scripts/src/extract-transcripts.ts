import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const OUTPUT_DIR = path.join(ROOT, 'transcripts');

interface VideoEntry {
  code: string;
  title: string;
  url: string;
  week: string;
}

const VIDEOS: VideoEntry[] = [
  // Week 1 - Lectures
  { code: 'W1_L1', title: 'Vectors', url: 'https://www.youtube.com/watch?v=1So2VV9Tm_A', week: 'week1' },
  { code: 'W1_L2', title: 'Matrices', url: 'https://www.youtube.com/watch?v=rnIDlZnrCc0', week: 'week1' },
  { code: 'W1_L3', title: 'Systems of linear equations', url: 'https://www.youtube.com/watch?v=WzR4NKeLHMY', week: 'week1' },
  { code: 'W1_L4', title: 'Determinants - part 1', url: 'https://www.youtube.com/watch?v=A3fxp49I4U8', week: 'week1' },
  { code: 'W1_L5', title: 'Determinants - part 2', url: 'https://www.youtube.com/watch?v=wejxX0YYYg4', week: 'week1' },
  // Week 1 - Tutorials
  { code: 'W1_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=rMK4GaWpoXU', week: 'week1' },
  { code: 'W1_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=TL2rliCK_Vg', week: 'week1' },
  { code: 'W1_T3', title: 'Tutorial 3', url: 'https://www.youtube.com/watch?v=oB1ws3Vk49E', week: 'week1' },
  { code: 'W1_T4', title: 'Tutorial 4', url: 'https://www.youtube.com/watch?v=Zenj3dOF9Hc', week: 'week1' },
  { code: 'W1_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=OOAEXJsgUBM', week: 'week1' },

  // Week 2 - Lectures
  { code: 'W2_L1', title: 'Determinants - part 3', url: 'https://www.youtube.com/watch?v=uO3mocPU9Q4', week: 'week2' },
  { code: 'W2_L2', title: "Cramer's rule", url: 'https://www.youtube.com/watch?v=sOFHgNXXRFM', week: 'week2' },
  { code: 'W2_L3', title: 'Solutions to a system of linear equations with an invertible coefficient matrix', url: 'https://www.youtube.com/watch?v=0txe9Mu5OdM', week: 'week2' },
  { code: 'W2_L4', title: 'The echelon form', url: 'https://www.youtube.com/watch?v=6N8owlkf9AQ', week: 'week2' },
  { code: 'W2_L5', title: 'Row reduction', url: 'https://www.youtube.com/watch?v=ECRhKDTUxM8', week: 'week2' },
  { code: 'W2_L6', title: 'The gaussian elimination method', url: 'https://www.youtube.com/watch?v=gdk1_aEe7j4', week: 'week2' },

  // Week 3 - Lectures
  { code: 'W3_L1', title: 'Introduction to vector spaces', url: 'https://www.youtube.com/watch?v=dAttVL9a5Go', week: 'week3' },
  { code: 'W3_L2', title: 'Some properties of vector spaces', url: 'https://www.youtube.com/watch?v=yUISwV4LE20', week: 'week3' },
  { code: 'W3_L3', title: 'Linear dependence', url: 'https://www.youtube.com/watch?v=1Krnnc6wKyk', week: 'week3' },
  { code: 'W3_L4', title: 'Linear independence - part 1', url: 'https://www.youtube.com/watch?v=Uf5nqIJv1Fk', week: 'week3' },
  { code: 'W3_L5', title: 'Linear independence - part 2', url: 'https://www.youtube.com/watch?v=9Adm4c2alAY', week: 'week3' },

  // Week 4 - Lectures
  { code: 'W4_L1', title: 'What is a basis for a vector space?', url: 'https://www.youtube.com/watch?v=lhAQIaFOPxA', week: 'week4' },
  { code: 'W4_L2', title: 'Finding bases for vector spaces', url: 'https://www.youtube.com/watch?v=SxPhClO9zSU', week: 'week4' },
  { code: 'W4_L3', title: 'What is the rank/dimension for a vector space', url: 'https://www.youtube.com/watch?v=oATXqim4F5Q', week: 'week4' },
  { code: 'W4_L4', title: 'Rank and dimension using gaussian elimination', url: 'https://www.youtube.com/watch?v=0yEKEavVQJE', week: 'week4' },
  // Week 4 - Tutorials
  { code: 'W4_T6', title: 'Tutorial 6', url: 'https://www.youtube.com/watch?v=5wdSQzZDZME', week: 'week4' },
  { code: 'W4_T7', title: 'Tutorial 7', url: 'https://www.youtube.com/watch?v=deoLXUT9E60', week: 'week4' },
  { code: 'W4_T8', title: 'Tutorial 8', url: 'https://www.youtube.com/watch?v=kbeuYmC7dp4', week: 'week4' },

  // Week 5 - Lectures
  { code: 'W5_L1', title: 'The null space of a matrix - finding nullity and a basis - part 1', url: 'https://www.youtube.com/watch?v=3_U6oMJeklc', week: 'week5' },
  { code: 'W5_L2', title: 'The null space of a matrix - finding nullity and a basis - part 2', url: 'https://www.youtube.com/watch?v=sDKAGDJlSAE', week: 'week5' },
  { code: 'W5_L3', title: 'What is a linear mapping - part 1', url: 'https://www.youtube.com/watch?v=MvCkhmYhTkw', week: 'week5' },
  { code: 'W5_L4', title: 'What is a linear mapping - part 2', url: 'https://www.youtube.com/watch?v=aRNE_GrR0Yk', week: 'week5' },
  { code: 'W5_L5', title: 'What is a linear transformation', url: 'https://www.youtube.com/watch?v=6jA-RRGbmOw', week: 'week5' },
  // Week 5 - Tutorials
  { code: 'W5_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=k5GlgJkdRBU', week: 'week5' },
  { code: 'W5_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=R5S2bPGErWs', week: 'week5' },
  { code: 'W5_T3', title: 'Tutorial 3', url: 'https://www.youtube.com/watch?v=3xjDfMoGlCM', week: 'week5' },
  { code: 'W5_T4', title: 'Tutorial 4', url: 'https://www.youtube.com/watch?v=VyoyjXx1UFg', week: 'week5' },
  { code: 'W5_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=_O0yZXIWWv0', week: 'week5' },
  { code: 'W5_T6', title: 'Tutorial 6', url: 'https://www.youtube.com/watch?v=ZCUivTd2yu0', week: 'week5' },
  { code: 'W5_T7', title: 'Tutorial 7', url: 'https://www.youtube.com/watch?v=zixmz3zRpJE', week: 'week5' },
  { code: 'W5_T8', title: 'Tutorial 8', url: 'https://www.youtube.com/watch?v=cPJJ_8BY1VY', week: 'week5' },

  // Week 6 - Lectures
  { code: 'W6_L1', title: 'Linear transformations, ordered bases & matrices', url: 'https://www.youtube.com/watch?v=lVX2mih3mcQ', week: 'week6' },
  { code: 'W6_L2', title: 'Image & kernel of linear transformations', url: 'https://www.youtube.com/watch?v=e4BXKGcntiQ', week: 'week6' },
  { code: 'W6_L3', title: 'Examples of finding bases for the kernel & image of a linear transformation', url: 'https://www.youtube.com/watch?v=5slY2FjErkc', week: 'week6' },
  // Week 6 - Tutorials
  { code: 'W6_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=aKziQ7vYvcs', week: 'week6' },
  { code: 'W6_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=WxAil6kpPCQ', week: 'week6' },
  { code: 'W6_T4', title: 'Tutorial 4', url: 'https://www.youtube.com/watch?v=MbHIGidPL-w', week: 'week6' },
  { code: 'W6_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=jlB2kQ-ardc', week: 'week6' },
  { code: 'W6_T6', title: 'Tutorial 6', url: 'https://www.youtube.com/watch?v=t6PA2E_G0do', week: 'week6' },
  { code: 'W6_T7', title: 'Tutorial 7', url: 'https://www.youtube.com/watch?v=D3jQmnIzbUM', week: 'week6' },
  { code: 'W6_T8', title: 'Tutorial 8', url: 'https://www.youtube.com/watch?v=vTrRpFbt4ZU', week: 'week6' },
  { code: 'W6_T9', title: 'Tutorial 9', url: 'https://www.youtube.com/watch?v=QE0Wq0AWiIE', week: 'week6' },

  // Week 7 - Lectures
  { code: 'W7_L1', title: 'Equivalence & similarity of matrices', url: 'https://www.youtube.com/watch?v=ORWbVJ54hW8', week: 'week7' },
  { code: 'W7_L2', title: 'Affine subspaces & affine mappings', url: 'https://www.youtube.com/watch?v=RUJInY6skG0', week: 'week7' },
  { code: 'W7_L3', title: 'Lengths & angles', url: 'https://www.youtube.com/watch?v=TtQ6AQUlwl0', week: 'week7' },
  { code: 'W7_L4', title: 'Inner products & norms on a vector space', url: 'https://www.youtube.com/watch?v=HH2Md3dBlq4', week: 'week7' },
  // Week 7 - Tutorials
  { code: 'W7_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=_Hj2FqJ5xZM', week: 'week7' },
  { code: 'W7_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=jl12b0JYLbk', week: 'week7' },
  { code: 'W7_T3', title: 'Tutorial 3', url: 'https://www.youtube.com/watch?v=fnrOwu-Veoc', week: 'week7' },
  { code: 'W7_T4', title: 'Tutorial 4', url: 'https://www.youtube.com/watch?v=FNZ0LJEE-7E', week: 'week7' },
  { code: 'W7_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=pX5LCYHDJKY', week: 'week7' },
  { code: 'W7_T6', title: 'Tutorial 6', url: 'https://www.youtube.com/watch?v=jS2rZVsBqjg', week: 'week7' },
  { code: 'W7_T7', title: 'Tutorial 7', url: 'https://www.youtube.com/watch?v=5VDV90OpB5Y', week: 'week7' },

  // Week 8 - Lectures
  { code: 'W8_L1', title: 'Orthogonality & linear independence', url: 'https://www.youtube.com/watch?v=G9bYPb-qSfw', week: 'week8' },
  { code: 'W8_L2', title: 'What is an orthonormal basis?', url: 'https://www.youtube.com/watch?v=T646BdbrRm0', week: 'week8' },
  { code: 'W8_L3', title: 'Projections using inner products', url: 'https://www.youtube.com/watch?v=Qyiw4opSG9U', week: 'week8' },
  { code: 'W8_L4', title: 'The gram-schmidt process', url: 'https://www.youtube.com/watch?v=WEpy57pYKH4', week: 'week8' },
  { code: 'W8_L5', title: 'Orthogonal transformations & rotations', url: 'https://www.youtube.com/watch?v=2qruaPxQUJU', week: 'week8' },
  // Week 8 - Tutorials
  { code: 'W8_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=AUPInEfil_4', week: 'week8' },
  { code: 'W8_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=FcWl3vxK_zY', week: 'week8' },
  { code: 'W8_T3', title: 'Tutorial 3', url: 'https://www.youtube.com/watch?v=P6tBnX1CdZo', week: 'week8' },
  { code: 'W8_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=ma3KcWIMHFg', week: 'week8' },
  { code: 'W8_T6', title: 'Tutorial 6', url: 'https://www.youtube.com/watch?v=RoJDTZIsOck', week: 'week8' },

  // Week 9 - Lectures
  { code: 'W9_L1', title: 'Multivariable functions - visualization', url: 'https://www.youtube.com/watch?v=MfrAPZRrqxw', week: 'week9' },
  { code: 'W9_L2', title: 'Partial derivatives', url: 'https://www.youtube.com/watch?v=GoJoNFBuCJ8', week: 'week9' },
  { code: 'W9_L3', title: 'Directional derivatives', url: 'https://www.youtube.com/watch?v=uhUqybTaGns', week: 'week9' },
  { code: 'W9_L4', title: 'Limits for scalar-valued multivariable functions', url: 'https://www.youtube.com/watch?v=Uvv8-Ujgqjo', week: 'week9' },
  { code: 'W9_L5', title: 'Continuity for multivariable functions', url: 'https://www.youtube.com/watch?v=_G6UYEZYaGk', week: 'week9' },
  { code: 'W9_L6', title: 'Directional derivatives in terms of the gradient', url: 'https://www.youtube.com/watch?v=2eYER90_4wA', week: 'week9' },
  // Week 9 - Tutorials
  { code: 'W9_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=JYmLAB2eDXo', week: 'week9' },
  { code: 'W9_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=al01RaBUkIo', week: 'week9' },
  { code: 'W9_T3', title: 'Tutorial 3', url: 'https://www.youtube.com/watch?v=vlZIhKlM6bc', week: 'week9' },
  { code: 'W9_T4', title: 'Tutorial 4', url: 'https://www.youtube.com/watch?v=CadYHZuxSCg', week: 'week9' },
  { code: 'W9_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=65wV32DCtVA', week: 'week9' },
  { code: 'W9_T6', title: 'Tutorial 6', url: 'https://www.youtube.com/watch?v=33BLotzDF0g', week: 'week9' },
  { code: 'W9_T7', title: 'Tutorial 7', url: 'https://www.youtube.com/watch?v=oHnLq0qzQ9g', week: 'week9' },

  // Week 10 - Lectures
  { code: 'W10_L1', title: 'The direction of steepest ascent/descent', url: 'https://www.youtube.com/watch?v=0H7ca6dFvQ8', week: 'week10' },
  { code: 'W10_L2', title: 'Tangents for scalar-valued multivariable functions', url: 'https://www.youtube.com/watch?v=9yeyc472W5Q', week: 'week10' },
  { code: 'W10_L3', title: 'Finding the tangent hyper(plane)', url: 'https://www.youtube.com/watch?v=bz1gtPvNIAg', week: 'week10' },
  { code: 'W10_L4', title: 'Critical points for multivariable functions', url: 'https://www.youtube.com/watch?v=9pciPOO19wQ', week: 'week10' },

  // Week 11 - Lectures
  { code: 'W11_L1', title: 'Higher order partial derivatives and the hessian matrix', url: 'https://www.youtube.com/watch?v=SNAyzb35MAc', week: 'week11' },
  { code: 'W11_L2', title: 'The hessian matrix & local extrema for f(x,y)', url: 'https://www.youtube.com/watch?v=XJH8RJ5m3OU', week: 'week11' },
  { code: 'W11_L3', title: 'The hessian matrix & local extrema for f(x,y,z)', url: 'https://www.youtube.com/watch?v=QOqj5I8q_eU', week: 'week11' },
  { code: 'W11_L4', title: 'Differentiability for multivariable functions', url: 'https://www.youtube.com/watch?v=tbd1xs-ZeU4', week: 'week11' },
  { code: 'W11_L5', title: 'Review of maths - 2', url: 'https://www.youtube.com/watch?v=_hLYDPQtDKY', week: 'week11' },
  // Week 11 - Tutorials
  { code: 'W11_T1', title: 'Tutorial 1', url: 'https://www.youtube.com/watch?v=noecviNSwrA', week: 'week11' },
  { code: 'W11_T2', title: 'Tutorial 2', url: 'https://www.youtube.com/watch?v=ar_oKHBKiXU', week: 'week11' },
  { code: 'W11_T3', title: 'Tutorial 3', url: 'https://www.youtube.com/watch?v=SJlhzeiTdEQ', week: 'week11' },
  { code: 'W11_T4', title: 'Tutorial 4', url: 'https://www.youtube.com/watch?v=JtQC-GpsQZc', week: 'week11' },
  { code: 'W11_T5', title: 'Tutorial 5', url: 'https://www.youtube.com/watch?v=t93ygun2x2A', week: 'week11' },

  // Refresher Week
  { code: 'Refresher_T1', title: 'Refresher week - tutorial 1', url: 'https://www.youtube.com/watch?v=x9Dv61Ml910', week: 'refresher' },
  { code: 'Refresher_T2', title: 'Refresher week - tutorial 2', url: 'https://www.youtube.com/watch?v=S6hzxX1AIBU', week: 'refresher' },
  { code: 'Refresher_T3', title: 'Refresher week - tutorial 3', url: 'https://www.youtube.com/watch?v=US18ZBaHO1Q', week: 'refresher' },
  { code: 'Refresher_T4', title: 'Refresher week - tutorial 4', url: 'https://www.youtube.com/watch?v=lBqVQxUYTIs', week: 'refresher' },
  { code: 'Refresher_T5', title: 'Refresher week - tutorial 5', url: 'https://www.youtube.com/watch?v=Z9jpB1gK-PQ', week: 'refresher' },
  { code: 'Refresher_T6', title: 'Refresher week - tutorial 6', url: 'https://www.youtube.com/watch?v=nNWcu09Qo04', week: 'refresher' },

  // Mathematics for Data Science II (Special Videos)
  { code: 'MDS2_1', title: 'Mathematics for Data Science II - Video 1', url: 'https://www.youtube.com/watch?v=UJFe9JIBogc', week: 'special' },
  { code: 'MDS2_2', title: 'Mathematics for Data Science II - Video 2', url: 'https://www.youtube.com/watch?v=wj73NcPIeZE', week: 'special' },
  { code: 'MDS2_3', title: 'Mathematics for Data Science II - Video 3', url: 'https://www.youtube.com/watch?v=SEevQPGIJSE', week: 'special' },
  { code: 'MDS2_4', title: 'Mathematics for Data Science II - Video 4', url: 'https://www.youtube.com/watch?v=qcT49XqFzXo', week: 'special' },
];

interface TranscriptItem {
  text: string;
  offset: number;
  duration: number;
  lang: string;
}

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)';
const INNERTUBE_URL = 'https://www.youtube.com/youtubei/v1/player?prettyPrint=false';
const INNERTUBE_CLIENT_VERSION = '20.10.38';
const ANDROID_UA = `com.google.android.youtube/${INNERTUBE_CLIENT_VERSION} (Linux; U; Android 14)`;

function getVideoId(url: string): string {
  const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i);
  if (match) return match[1];
  if (url.length === 11) return url;
  throw new Error(`Cannot extract video ID from: ${url}`);
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function parseTranscriptXml(xml: string, lang: string): TranscriptItem[] {
  const items: TranscriptItem[] = [];

  const pRegex = /<p\s+t="(\d+)"\s+d="(\d+)"[^>]*>([\s\S]*?)<\/p>/g;
  let pMatch;
  while ((pMatch = pRegex.exec(xml)) !== null) {
    const offset = parseInt(pMatch[1], 10);
    const duration = parseInt(pMatch[2], 10);
    const inner = pMatch[3];
    let text = '';
    const sRegex = /<s[^>]*>([^<]*)<\/s>/g;
    let sMatch;
    while ((sMatch = sRegex.exec(inner)) !== null) {
      text += sMatch[1];
    }
    if (!text) {
      text = inner.replace(/<[^>]+>/g, '');
    }
    text = decodeEntities(text).trim();
    if (text) {
      items.push({ text, offset, duration, lang });
    }
  }

  if (items.length > 0) return items;

  const legacyRegex = /<text start="([^"]*)" dur="([^"]*)">([^<]*)<\/text>/g;
  let legacyMatch;
  while ((legacyMatch = legacyRegex.exec(xml)) !== null) {
    const offset = Math.round(parseFloat(legacyMatch[1]) * 1000);
    const duration = Math.round(parseFloat(legacyMatch[2]) * 1000);
    const text = decodeEntities(legacyMatch[3]).trim();
    if (text) {
      items.push({ text, offset, duration, lang });
    }
  }

  return items;
}

async function fetchTranscriptViaInnerTube(videoId: string): Promise<TranscriptItem[] | null> {
  try {
    const body = {
      context: {
        client: {
          clientName: 'ANDROID',
          clientVersion: INNERTUBE_CLIENT_VERSION,
        },
      },
      videoId,
    };

    const res = await fetch(INNERTUBE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': ANDROID_UA,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) return null;

    const data = await res.json() as Record<string, unknown>;
    const tracks = (data as Record<string, unknown>)?.captions as Record<string, unknown>;
    const captionTracks = (tracks?.playerCaptionsTracklistRenderer as Record<string, unknown>)?.captionTracks as Array<{ baseUrl: string; languageCode: string }>;

    if (!Array.isArray(captionTracks) || captionTracks.length === 0) return null;

    const track = captionTracks[0];
    const trackUrl = track.baseUrl;
    const lang = track.languageCode;

    if (!new URL(trackUrl).hostname.endsWith('.youtube.com')) return null;

    const xmlRes = await fetch(trackUrl, {
      headers: { 'User-Agent': USER_AGENT },
    });
    if (!xmlRes.ok) return null;

    const xml = await xmlRes.text();
    return parseTranscriptXml(xml, lang);
  } catch {
    return null;
  }
}

async function fetchTranscriptViaWebPage(videoId: string, videoUrl: string): Promise<TranscriptItem[]> {
  const pageRes = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
    headers: { 'User-Agent': USER_AGENT },
  });
  const html = await pageRes.text();

  if (html.includes('class="g-recaptcha"')) {
    throw new Error('YouTube is rate limiting this IP (captcha required)');
  }
  if (!html.includes('"playabilityStatus":')) {
    throw new Error(`Video is unavailable: ${videoUrl}`);
  }

  const initStr = 'var ytInitialPlayerResponse = ';
  const startIdx = html.indexOf(initStr);
  if (startIdx === -1) throw new Error('Could not find ytInitialPlayerResponse');

  let jsonStart = startIdx + initStr.length;
  let depth = 0;
  let jsonEnd = jsonStart;
  for (let i = jsonStart; i < html.length; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}') {
      depth--;
      if (depth === 0) { jsonEnd = i + 1; break; }
    }
  }

  let playerResponse: Record<string, unknown>;
  try {
    playerResponse = JSON.parse(html.slice(jsonStart, jsonEnd)) as Record<string, unknown>;
  } catch {
    throw new Error('Failed to parse player response JSON');
  }

  const captions = (playerResponse?.captions as Record<string, unknown>)?.playerCaptionsTracklistRenderer as Record<string, unknown>;
  const captionTracks = captions?.captionTracks as Array<{ baseUrl: string; languageCode: string }>;

  if (!Array.isArray(captionTracks) || captionTracks.length === 0) {
    throw new Error(`Transcript is disabled or unavailable for this video: ${videoUrl}`);
  }

  const track = captionTracks[0];
  const trackUrl = track.baseUrl;
  const lang = track.languageCode;

  const xmlRes = await fetch(trackUrl, {
    headers: { 'User-Agent': USER_AGENT },
  });
  if (!xmlRes.ok) throw new Error('Failed to fetch transcript XML');

  const xml = await xmlRes.text();
  const items = parseTranscriptXml(xml, lang);
  if (items.length === 0) throw new Error('Transcript XML parsed but contained no segments');
  return items;
}

async function fetchTranscript(url: string): Promise<TranscriptItem[]> {
  const videoId = getVideoId(url);

  const innerTubeResult = await fetchTranscriptViaInnerTube(videoId);
  if (innerTubeResult && innerTubeResult.length > 0) return innerTubeResult;

  return fetchTranscriptViaWebPage(videoId, url);
}

function formatTranscript(items: TranscriptItem[]): string {
  return items.map(item => {
    const totalSecs = Math.floor(item.offset / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const timestamp = `[${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}]`;
    const text = item.text.replace(/\n/g, ' ').trim();
    return `${timestamp} ${text}`;
  }).join('\n');
}

function buildMarkdown(video: VideoEntry, transcript: string | null, error?: string): string {
  const weekLabel =
    video.week === 'refresher' ? 'Refresher Week' :
    video.week === 'special' ? 'Mathematics for Data Science II (Special Videos)' :
    `Week ${video.week.replace('week', '')}`;

  const lines: string[] = [
    `# ${video.code}: ${video.title}`,
    '',
    `**Week:** ${weekLabel}`,
    `**YouTube URL:** ${video.url}`,
    '',
    '---',
    '',
  ];

  if (transcript) {
    lines.push('## Transcript', '', transcript);
  } else {
    lines.push('## Transcript Unavailable', '');
    lines.push('> **Note:** Transcript could not be retrieved for this video.');
    if (error) {
      lines.push(`> **Reason:** ${error}`);
    }
  }

  return lines.join('\n');
}

function slugify(str: string): string {
  return str
    .replace(/[|:?/\\<>*"']/g, '-')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface IndexEntry {
  code: string;
  title: string;
  week: string;
  url: string;
  filePath: string;
  status: 'ok' | 'unavailable';
  error?: string;
}

async function main() {
  console.log(`Starting transcript extraction for ${VIDEOS.length} videos...`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const weekDirs = [...new Set(VIDEOS.map(v => v.week))];
  for (const w of weekDirs) {
    fs.mkdirSync(path.join(OUTPUT_DIR, w), { recursive: true });
  }

  const indexEntries: IndexEntry[] = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < VIDEOS.length; i++) {
    const video = VIDEOS[i];
    const fileSlug = slugify(video.title);
    const fileName = `${video.code}_${fileSlug}.md`;
    const filePath = path.join(OUTPUT_DIR, video.week, fileName);
    const relPath = `${video.week}/${fileName}`;

    process.stdout.write(`[${i + 1}/${VIDEOS.length}] ${video.code}: ${video.title} ... `);

    let transcriptText: string | null = null;
    let errorMsg: string | undefined;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const items = await fetchTranscript(video.url);
        transcriptText = formatTranscript(items);
        successCount++;
        console.log(`OK (${items.length} segments)`);
        break;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        if (attempt < 3) {
          console.log(`  Retry ${attempt}/2 after error: ${msg.substring(0, 60)}`);
          await delay(2000 * attempt);
        } else {
          errorMsg = msg;
          failCount++;
          console.log(`UNAVAILABLE: ${msg.substring(0, 80)}`);
        }
      }
    }

    const markdown = buildMarkdown(video, transcriptText, errorMsg);
    fs.writeFileSync(filePath, markdown, 'utf8');

    indexEntries.push({
      code: video.code,
      title: video.title,
      week: video.week,
      url: video.url,
      filePath: relPath,
      status: transcriptText ? 'ok' : 'unavailable',
      error: errorMsg,
    });

    if (i < VIDEOS.length - 1) {
      await delay(300);
    }
  }

  const weekOrder = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'refresher', 'special'];
  const weekLabels: Record<string, string> = {
    week1: 'Week 1 — Vectors, Matrices, Systems, Determinants',
    week2: 'Week 2 — Determinants (cont.), Cramer\'s Rule, Echelon Form, Gaussian Elimination',
    week3: 'Week 3 — Vector Spaces, Linear Dependence/Independence',
    week4: 'Week 4 — Basis, Rank, Dimension',
    week5: 'Week 5 — Null Space, Linear Mappings & Transformations',
    week6: 'Week 6 — Linear Transformations, Image & Kernel',
    week7: 'Week 7 — Matrix Equivalence, Affine Subspaces, Inner Products',
    week8: 'Week 8 — Orthogonality, Gram-Schmidt, Orthogonal Transformations',
    week9: 'Week 9 — Multivariable Functions, Partial & Directional Derivatives',
    week10: 'Week 10 — Gradient, Tangent Planes, Critical Points',
    week11: 'Week 11 — Hessian Matrix, Local Extrema, Differentiability',
    refresher: 'Refresher Week',
    special: 'Mathematics for Data Science II (Special Videos)',
  };

  const readmeLines: string[] = [
    '# Linear Algebra & Multivariable Calculus — Transcript Index',
    '',
    'Transcripts for the **Linear Algebra & Multivariable Calculus** course, organized by week.',
    '',
    `| Stat | Count |`,
    `|------|-------|`,
    `| Total videos | ${VIDEOS.length} |`,
    `| Transcripts available | ${successCount} |`,
    `| Transcripts unavailable | ${failCount} |`,
    '',
    '---',
    '',
  ];

  for (const week of weekOrder) {
    const entries = indexEntries.filter(e => e.week === week);
    if (entries.length === 0) continue;

    readmeLines.push(`## ${weekLabels[week]}`);
    readmeLines.push('');

    const lectures = entries.filter(e => e.code.includes('_L') || e.code.startsWith('MDS2') || e.code.startsWith('Refresher'));
    const tutorials = entries.filter(e => e.code.includes('_T') && !e.code.startsWith('Refresher'));

    if (lectures.length > 0) {
      readmeLines.push('**Lectures:**', '');
      for (const entry of lectures) {
        const icon = entry.status === 'ok' ? '✅' : '❌';
        readmeLines.push(`- ${icon} [${entry.code}: ${entry.title}](${entry.filePath}) — [YouTube](${entry.url})`);
      }
      readmeLines.push('');
    }

    if (tutorials.length > 0) {
      readmeLines.push('**Tutorials:**', '');
      for (const entry of tutorials) {
        const icon = entry.status === 'ok' ? '✅' : '❌';
        readmeLines.push(`- ${icon} [${entry.code}: ${entry.title}](${entry.filePath}) — [YouTube](${entry.url})`);
      }
      readmeLines.push('');
    }
  }

  const unavailable = indexEntries.filter(e => e.status === 'unavailable');
  if (unavailable.length > 0) {
    readmeLines.push('---', '', '## Videos Without Transcripts', '');
    readmeLines.push('These videos could not have their transcripts extracted (transcripts may be disabled or unavailable).', '');
    for (const entry of unavailable) {
      readmeLines.push(`- **${entry.code}**: [${entry.title}](${entry.url})`);
      if (entry.error) {
        readmeLines.push(`  - Reason: \`${entry.error.substring(0, 150)}\``);
      }
    }
    readmeLines.push('');
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeLines.join('\n'), 'utf8');

  console.log('\n=== DONE ===');
  console.log(`Transcripts saved to: ${OUTPUT_DIR}`);
  console.log(`Success: ${successCount}/${VIDEOS.length}`);
  console.log(`Unavailable: ${failCount}/${VIDEOS.length}`);
  console.log(`Index: ${path.join(OUTPUT_DIR, 'README.md')}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
