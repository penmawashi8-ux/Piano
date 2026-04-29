import type { NoteEvent } from '../types';

export interface Fanfare {
  id: string;
  name: string;
  composer: string;
  notes: NoteEvent[];
}

// 固定ド: ど=C レ=D ミ=E ファ=F ソ=G ラ=A シ=B ♭シ=A#(Bb) ♭ミ=D#(Eb)
//
// JRA G1 東コース ファンファーレ（すぎやまこういち 1986）
// 譜面より（固定ド）:
//   ① レ— レ レ レ— レ レ ファ—
//   ② ミ ど ソ ファ—
//   ③ ミ ど ソ レ—
//   ④ ソ ソ レ ファ ミ ど ソ レ—
//   ⑤ レ ファ ミ ラ ファ ソ
//   ⑥ ソ ソ ソ ソ—
const G1_EAST_NOTES: NoteEvent[] = [
  // ① レ— レ レ レ— レ レ ファ—
  { notes: ['D5'], duration: 1.0 },
  { notes: ['D5'], duration: 0.4 }, { notes: ['D5'], duration: 0.4 }, { notes: ['D5'], duration: 1.0 },
  { notes: ['D5'], duration: 0.4 }, { notes: ['D5'], duration: 0.4 }, { notes: ['F5'], duration: 1.5 },
  // ② ミ ど ソ ファ—
  { notes: ['E5'], duration: 0.4 }, { notes: ['C5'], duration: 0.4 },
  { notes: ['G5'], duration: 0.4 }, { notes: ['F5'], duration: 1.2 },
  // ③ ミ ど ソ レ—
  { notes: ['E5'], duration: 0.4 }, { notes: ['C5'], duration: 0.4 },
  { notes: ['G5'], duration: 0.4 }, { notes: ['D5'], duration: 1.2 },
  // ④ ソ ソ レ ファ ミ ど ソ レ—
  { notes: ['G5'], duration: 0.5 }, { notes: ['G5'], duration: 0.5 },
  { notes: ['D5'], duration: 0.3 }, { notes: ['F5'], duration: 0.3 },
  { notes: ['E5'], duration: 0.3 }, { notes: ['C5'], duration: 0.3 },
  { notes: ['G5'], duration: 0.3 }, { notes: ['D5'], duration: 1.0 },
  // ⑤ レ ファ ミ ラ ファ ソ
  { notes: ['D5'], duration: 0.3 }, { notes: ['F5'], duration: 0.3 },
  { notes: ['E5'], duration: 0.3 }, { notes: ['A5'], duration: 0.5 },
  { notes: ['F5'], duration: 0.3 }, { notes: ['G5'], duration: 0.8 },
  // ⑥ ソ ソ ソ ソ—
  { notes: ['G5'], duration: 0.35 }, { notes: ['G5'], duration: 0.35 },
  { notes: ['G5'], duration: 0.35 }, { notes: ['G5'], duration: 1.5 },
];

// JRA G1 西コース ファンファーレ（宮川泰 1987）
// ヘ長調(F major)・4拍子
const G1_WEST_NOTES: NoteEvent[] = [
  { notes: ['C5'],  duration: 0.15 },
  { notes: ['F5'],  duration: 0.35 },
  { notes: ['E5'],  duration: 0.18 },
  { notes: ['F5'],  duration: 0.18 },
  { notes: ['A5'],  duration: 0.45 },
  { notes: ['G5'],  duration: 0.18 },
  { notes: ['F5'],  duration: 0.18 },
  { notes: ['G5'],  duration: 0.35 },
  { notes: ['F5'],  duration: 0.18 },
  { notes: ['E5'],  duration: 0.18 },
  { notes: ['F5'],  duration: 0.35 },
  { notes: ['D5'],  duration: 0.18 },
  { notes: ['C5'],  duration: 0.18 },
  { notes: ['D5'],  duration: 0.50 },
  { notes: ['C5'],  duration: 0.18 },
  { notes: ['E5'],  duration: 0.18 },
  { notes: ['G5'],  duration: 0.18 },
  { notes: ['C6'],  duration: 0.50 },
  { notes: ['A#5'], duration: 0.18 },
  { notes: ['A5'],  duration: 0.18 },
  { notes: ['G5'],  duration: 0.45 },
  { notes: ['A5'],  duration: 0.18 },
  { notes: ['G5'],  duration: 0.18 },
  { notes: ['F5'],  duration: 0.18 },
  { notes: ['G5'],  duration: 0.35 },
  { notes: ['E5'],  duration: 0.18 },
  { notes: ['C5'],  duration: 0.18 },
  { notes: ['C5'],  duration: 0.18 },
  { notes: ['F5'],  duration: 0.18 },
  { notes: ['A5'],  duration: 0.18 },
  { notes: ['C6'],  duration: 0.35 },
  { notes: ['A5'],  duration: 0.18 },
  { notes: ['C6'],  duration: 0.35 },
  { notes: ['F5'],  duration: 1.00 },
];

// JRA G2 東コース ファンファーレ（すぎやまこういち）
const G2_EAST_NOTES: NoteEvent[] = [
  { notes: ['D5'], duration: 0.5 }, { notes: ['D5'], duration: 0.25 }, { notes: ['D5'], duration: 0.5 },
  { notes: ['F5'], duration: 0.8 },
  { notes: ['C5'], duration: 0.5 }, { notes: ['C5'], duration: 0.25 }, { notes: ['C5'], duration: 0.5 },
  { notes: ['D5'], duration: 0.7 },
  { notes: ['E5'], duration: 0.25 }, { notes: ['C5'], duration: 0.25 },
  { notes: ['G5'], duration: 0.3 }, { notes: ['F5'], duration: 0.5 },
  { notes: ['E5'], duration: 0.25 }, { notes: ['C5'], duration: 0.25 }, { notes: ['D5'], duration: 0.25 },
  { notes: ['E5'], duration: 0.3 }, { notes: ['G5'], duration: 0.3 }, { notes: ['C5'], duration: 0.3 },
  { notes: ['D5'], duration: 0.8 },
];

// JRA G3 東コース ファンファーレ（すぎやまこういち）
const G3_EAST_NOTES: NoteEvent[] = [
  { notes: ['D5'], duration: 0.45 }, { notes: ['D5'], duration: 0.2 }, { notes: ['D5'], duration: 0.45 },
  { notes: ['F5'], duration: 0.65 },
  { notes: ['C5'], duration: 0.4 }, { notes: ['D5'], duration: 0.25 }, { notes: ['E5'], duration: 0.25 },
  { notes: ['C5'], duration: 0.25 }, { notes: ['G5'], duration: 0.3 }, { notes: ['D5'], duration: 0.55 },
  { notes: ['A5'], duration: 0.45 }, { notes: ['G5'], duration: 0.25 }, { notes: ['F5'], duration: 0.25 },
  { notes: ['G5'], duration: 0.7 },
];

// JRA オープン ファンファーレ
const OPEN_NOTES: NoteEvent[] = [
  { notes: ['D5'], duration: 0.35 }, { notes: ['D5'], duration: 0.2 }, { notes: ['D5'], duration: 0.35 },
  { notes: ['F5'], duration: 0.55 },
  { notes: ['C5'], duration: 0.35 }, { notes: ['D5'], duration: 0.2 },
  { notes: ['E5'], duration: 0.3 }, { notes: ['D5'], duration: 0.2 },
  { notes: ['C5'], duration: 0.2 }, { notes: ['G5'], duration: 0.6 },
];

export const FANFARES: Fanfare[] = [
  { id: 'g1-east', name: 'G1（東）東京・中山',  composer: 'すぎやまこういち', notes: G1_EAST_NOTES },
  { id: 'g1-west', name: 'G1（西）京都・阪神',  composer: '宮川泰',           notes: G1_WEST_NOTES },
  { id: 'g2-east', name: 'G2（東）',             composer: 'すぎやまこういち', notes: G2_EAST_NOTES },
  { id: 'g3-east', name: 'G3（東）',             composer: 'すぎやまこういち', notes: G3_EAST_NOTES },
  { id: 'open',    name: 'OP（オープン）',        composer: '',                notes: OPEN_NOTES },
];
