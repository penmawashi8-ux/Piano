import type { NoteEvent } from '../types';

export interface Fanfare {
  id: string;
  name: string;
  composer: string;
  notes: NoteEvent[];
}

// JRA G1 東コース ファンファーレ（すぎやまこういち作曲）
// 変ロ長調(Bb major) / 4/4→5/4→2/4
// 楽譜: 付点音符pickup → 16分音符×4(accent) → 8分音符×2 → 全音符、の繰り返し
const G1_EAST_NOTES: NoteEvent[] = [
  // === 4/4 section: 第1フレーズ ===
  // pickup (付点4分)
  { note: 'Bb4', duration: 0.30 },
  // 16分音符×4 (accent > > > >)
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  // 8分音符×2 (> >)
  { note: 'C5',  duration: 0.20 },
  { note: 'Bb4', duration: 0.20 },
  // 全音符（次の小節へタイ含む）
  { note: 'D5',  duration: 1.65 },

  // === 第2フレーズ（少し上へ）===
  { note: 'Bb4', duration: 0.30 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'D5',  duration: 0.20 },
  { note: 'Eb5', duration: 0.20 },
  { note: 'F5',  duration: 1.65 },

  // === 第3フレーズ（さらに上へ）===
  { note: 'Bb4', duration: 0.30 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'C5',  duration: 0.20 },
  { note: 'D5',  duration: 0.20 },
  // 全音符→タイ→8分音符
  { note: 'Eb5', duration: 0.40 },
  { note: 'D5',  duration: 0.20 },
  // 3連符パッセージ（楽譜の3記号部分）
  { note: 'C5',  duration: 0.14 },
  { note: 'Bb4', duration: 0.14 },
  { note: 'A4',  duration: 0.14 },

  // === 5/4 section ===
  // 全音符 (5/4の長い音)
  { note: 'Bb4', duration: 0.50 },
  { note: 'D5',  duration: 0.25 },
  // アクセント付きコード上音 > > >
  { note: 'F5',  duration: 0.18 },
  { note: 'Eb5', duration: 0.18 },
  { note: 'D5',  duration: 0.18 },
  { note: 'F5',  duration: 0.25 },

  // === 2/4 section ===
  { note: 'Bb5', duration: 0.40 },
  { note: 'G5',  duration: 0.20 },

  // === 5/4 section（繰り返し）===
  { note: 'Bb4', duration: 0.50 },
  { note: 'D5',  duration: 0.25 },
  { note: 'F5',  duration: 0.18 },
  { note: 'Eb5', duration: 0.18 },
  { note: 'D5',  duration: 0.18 },
  { note: 'F5',  duration: 0.25 },

  // === 2/4 ===
  { note: 'Bb5', duration: 0.40 },
  { note: 'G5',  duration: 0.20 },

  // === 4/4 coda ===
  { note: 'F5',  duration: 0.25 },
  { note: 'Eb5', duration: 0.25 },
  { note: 'D5',  duration: 0.25 },
  { note: 'Eb5', duration: 0.25 },
  // 全音符（タイ）
  { note: 'F5',  duration: 0.80 },
  // 3連符フィナーレ
  { note: 'G5',  duration: 0.14 },
  { note: 'F5',  duration: 0.14 },
  { note: 'Eb5', duration: 0.14 },
  { note: 'F5',  duration: 0.20 },
  { note: 'G5',  duration: 0.20 },
  // 最後の長音
  { note: 'Bb5', duration: 1.40 },
];

// JRA G1 西コース ファンファーレ（宮川泰作曲）
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
  { note: 'Bb5', duration: 0.18 },
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
  { note: 'F6',  duration: 1.00 },
];

export const FANFARES: Fanfare[] = [
  {
    id: 'g1-east',
    name: 'G1 東コース',
    composer: 'すぎやまこういち',
    notes: G1_EAST_NOTES,
  },
  {
    id: 'g1-west',
    name: 'G1 西コース',
    composer: '宮川泰',
    notes: G1_WEST_NOTES,
  },
];
