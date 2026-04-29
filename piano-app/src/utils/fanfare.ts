import type { NoteEvent } from '../types';

export interface Fanfare {
  id: string;
  name: string;
  composer: string;
  notes: NoteEvent[];
}

// 変ロ長調(Bb major) 移動ド:
// ド=A#(Bb) レ=C ミ=D ファ=D#(Eb) ソ=F ラ=G シ=A
//
// JRA G1 東コース ファンファーレ（すぎやまこういち 1986）
// 譜面より:
//   ① レ— レ レ レ— レ レ ファ—
//   ② ミ ド ソ ファ—
//   ③ ミ ド ソ レ—
//   ④ ソ ソ レ ファ ミ ド ソ レ—
//   ⑤ レ ファ ミ ラ ファ ソ
//   ⑥ ソ ソ ソ ソ—
const G1_EAST_NOTES: NoteEvent[] = [
  // ① レ— レ レ レ— レ レ ファ—
  { note: 'C5', duration: 0.65 },
  { note: 'C5', duration: 0.3 }, { note: 'C5', duration: 0.3 }, { note: 'C5', duration: 0.65 },
  { note: 'C5', duration: 0.3 }, { note: 'C5', duration: 0.3 }, { note: 'D#5', duration: 1.0 },
  // ② ミ ド ソ ファ—
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 },
  { note: 'F5', duration: 0.3  }, { note: 'D#5', duration: 0.8 },
  // ③ ミ ド ソ レ—
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 },
  { note: 'F5', duration: 0.3  }, { note: 'C5',  duration: 0.8 },
  // ④ ソ ソ レ ファ ミ ド ソ レ—
  { note: 'F5', duration: 0.35 }, { note: 'F5', duration: 0.35 },
  { note: 'C5', duration: 0.2  }, { note: 'D#5', duration: 0.2 },
  { note: 'D5', duration: 0.2  }, { note: 'A#4', duration: 0.2 },
  { note: 'F5', duration: 0.2  }, { note: 'C5',  duration: 0.7 },
  // ⑤ レ ファ ミ ラ ファ ソ
  { note: 'C5',  duration: 0.2 }, { note: 'D#5', duration: 0.2 },
  { note: 'D5',  duration: 0.2 }, { note: 'G5',  duration: 0.4 },
  { note: 'D#5', duration: 0.2 }, { note: 'F5',  duration: 0.6 },
  // ⑥ ソ ソ ソ ソ—
  { note: 'F5', duration: 0.25 }, { note: 'F5', duration: 0.25 },
  { note: 'F5', duration: 0.25 }, { note: 'F5', duration: 1.3 },
];

// JRA G1 西コース ファンファーレ（宮川泰 1987）
// ヘ長調(F major)・4拍子
const G1_WEST_NOTES: NoteEvent[] = [
  { note: 'C5',  duration: 0.15 },
  { note: 'F5',  duration: 0.35 },
  { note: 'E5',  duration: 0.18 },
  { note: 'F5',  duration: 0.18 },
  { note: 'A5',  duration: 0.45 },
  { note: 'G5',  duration: 0.18 },
  { note: 'F5',  duration: 0.18 },
  { note: 'G5',  duration: 0.35 },
  { note: 'F5',  duration: 0.18 },
  { note: 'E5',  duration: 0.18 },
  { note: 'F5',  duration: 0.35 },
  { note: 'D5',  duration: 0.18 },
  { note: 'C5',  duration: 0.18 },
  { note: 'D5',  duration: 0.50 },
  { note: 'C5',  duration: 0.18 },
  { note: 'E5',  duration: 0.18 },
  { note: 'G5',  duration: 0.18 },
  { note: 'C6',  duration: 0.50 },
  { note: 'A#5', duration: 0.18 },
  { note: 'A5',  duration: 0.18 },
  { note: 'G5',  duration: 0.45 },
  { note: 'A5',  duration: 0.18 },
  { note: 'G5',  duration: 0.18 },
  { note: 'F5',  duration: 0.18 },
  { note: 'G5',  duration: 0.35 },
  { note: 'E5',  duration: 0.18 },
  { note: 'C5',  duration: 0.18 },
  { note: 'C5',  duration: 0.18 },
  { note: 'F5',  duration: 0.18 },
  { note: 'A5',  duration: 0.18 },
  { note: 'C6',  duration: 0.35 },
  { note: 'A5',  duration: 0.18 },
  { note: 'C6',  duration: 0.35 },
  { note: 'F5',  duration: 1.00 },
];

// JRA G2 東コース ファンファーレ（すぎやまこういち）
const G2_EAST_NOTES: NoteEvent[] = [
  { note: 'C5', duration: 0.5 }, { note: 'C5', duration: 0.25 }, { note: 'C5', duration: 0.5 },
  { note: 'D#5', duration: 0.8 },
  { note: 'A#4', duration: 0.5 }, { note: 'A#4', duration: 0.25 }, { note: 'A#4', duration: 0.5 },
  { note: 'C5', duration: 0.7 },
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 },
  { note: 'F5', duration: 0.3 }, { note: 'D#5', duration: 0.5 },
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 }, { note: 'C5', duration: 0.25 },
  { note: 'D5', duration: 0.3 }, { note: 'F5', duration: 0.3 }, { note: 'A#4', duration: 0.3 },
  { note: 'C5', duration: 0.8 },
];

// JRA G3 東コース ファンファーレ（すぎやまこういち）
const G3_EAST_NOTES: NoteEvent[] = [
  { note: 'C5', duration: 0.45 }, { note: 'C5', duration: 0.2 }, { note: 'C5', duration: 0.45 },
  { note: 'D#5', duration: 0.65 },
  { note: 'A#4', duration: 0.4 }, { note: 'C5', duration: 0.25 }, { note: 'D5', duration: 0.25 },
  { note: 'A#4', duration: 0.25 }, { note: 'F5', duration: 0.3 }, { note: 'C5', duration: 0.55 },
  { note: 'G5', duration: 0.45 }, { note: 'F5', duration: 0.25 }, { note: 'D#5', duration: 0.25 },
  { note: 'F5', duration: 0.7 },
];

// JRA オープン ファンファーレ
const OPEN_NOTES: NoteEvent[] = [
  { note: 'C5', duration: 0.35 }, { note: 'C5', duration: 0.2 }, { note: 'C5', duration: 0.35 },
  { note: 'D#5', duration: 0.55 },
  { note: 'A#4', duration: 0.35 }, { note: 'C5', duration: 0.2 },
  { note: 'D5', duration: 0.3 }, { note: 'C5', duration: 0.2 },
  { note: 'A#4', duration: 0.2 }, { note: 'F5', duration: 0.6 },
];

export const FANFARES: Fanfare[] = [
  { id: 'g1-east', name: 'G1（東）東京・中山',  composer: 'すぎやまこういち', notes: G1_EAST_NOTES },
  { id: 'g1-west', name: 'G1（西）京都・阪神',  composer: '宮川泰',           notes: G1_WEST_NOTES },
  { id: 'g2-east', name: 'G2（東）',             composer: 'すぎやまこういち', notes: G2_EAST_NOTES },
  { id: 'g3-east', name: 'G3（東）',             composer: 'すぎやまこういち', notes: G3_EAST_NOTES },
  { id: 'open',    name: 'OP（オープン）',        composer: '',                notes: OPEN_NOTES },
];
