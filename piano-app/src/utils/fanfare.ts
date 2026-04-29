import type { NoteEvent } from '../types';

export interface Fanfare {
  id: string;
  name: string;
  composer: string;
  notes: NoteEvent[];
}

// JRA G1 東コース ファンファーレ（すぎやまこういち作曲）
// 変ロ長調 (Bb major)・5拍子
// ソルフェージュ: ミーミミ、ミーミミ、ソー、レーレレ... (ミ=D, ソ=F, レ=C, ド=Bb)
const G1_EAST_NOTES: NoteEvent[] = [
  // ピックアップ
  { note: 'F4', duration: 0.12 },

  // ミーミミ、ミーミミ
  { note: 'D5', duration: 0.38 },
  { note: 'D5', duration: 0.20 },
  { note: 'D5', duration: 0.20 },
  { note: 'D5', duration: 0.38 },
  { note: 'D5', duration: 0.20 },
  { note: 'D5', duration: 0.20 },

  // ソー、レーレレ
  { note: 'F5', duration: 0.55 },
  { note: 'C5', duration: 0.38 },
  { note: 'C5', duration: 0.20 },
  { note: 'C5', duration: 0.20 },

  // ミーファミ、レードレ
  { note: 'D5', duration: 0.38 },
  { note: 'Eb5', duration: 0.20 },
  { note: 'D5', duration: 0.28 },
  { note: 'C5', duration: 0.20 },
  { note: 'Bb4', duration: 0.20 },
  { note: 'C5', duration: 0.50 },

  // ミーソー、ドーラソ
  { note: 'D5', duration: 0.20 },
  { note: 'F5', duration: 0.20 },
  { note: 'Bb5', duration: 0.55 },
  { note: 'A5', duration: 0.20 },
  { note: 'G5', duration: 0.20 },
  { note: 'F5', duration: 0.50 },

  // ソラシド、ソーミド
  { note: 'F5', duration: 0.20 },
  { note: 'G5', duration: 0.20 },
  { note: 'A5', duration: 0.20 },
  { note: 'Bb5', duration: 0.20 },
  { note: 'F5', duration: 0.30 },
  { note: 'D5', duration: 0.20 },
  { note: 'Bb4', duration: 0.20 },

  // フィナーレ: ソドミソ・ミソ・ドーー
  { note: 'F4', duration: 0.20 },
  { note: 'Bb4', duration: 0.20 },
  { note: 'D5', duration: 0.20 },
  { note: 'F5', duration: 0.30 },
  { note: 'D5', duration: 0.20 },
  { note: 'F5', duration: 0.30 },
  { note: 'Bb5', duration: 1.00 },
];

// JRA G1 西コース ファンファーレ（宮川泰作曲）
// ヘ長調 (F major)・4拍子
const G1_WEST_NOTES: NoteEvent[] = [
  // ピックアップ
  { note: 'C5', duration: 0.15 },

  // 第1フレーズ
  { note: 'F5', duration: 0.35 },
  { note: 'E5', duration: 0.18 },
  { note: 'F5', duration: 0.18 },
  { note: 'A5', duration: 0.45 },
  { note: 'G5', duration: 0.18 },
  { note: 'F5', duration: 0.18 },

  // 第2フレーズ
  { note: 'G5', duration: 0.35 },
  { note: 'F5', duration: 0.18 },
  { note: 'E5', duration: 0.18 },
  { note: 'F5', duration: 0.35 },
  { note: 'D5', duration: 0.18 },
  { note: 'C5', duration: 0.18 },
  { note: 'D5', duration: 0.50 },

  // 第3フレーズ（上昇）
  { note: 'C5', duration: 0.18 },
  { note: 'E5', duration: 0.18 },
  { note: 'G5', duration: 0.18 },
  { note: 'C6', duration: 0.50 },
  { note: 'Bb5', duration: 0.18 },
  { note: 'A5', duration: 0.18 },
  { note: 'G5', duration: 0.45 },

  // 第4フレーズ
  { note: 'A5', duration: 0.18 },
  { note: 'G5', duration: 0.18 },
  { note: 'F5', duration: 0.18 },
  { note: 'G5', duration: 0.35 },
  { note: 'E5', duration: 0.18 },
  { note: 'C5', duration: 0.18 },

  // フィナーレ
  { note: 'C5', duration: 0.18 },
  { note: 'F5', duration: 0.18 },
  { note: 'A5', duration: 0.18 },
  { note: 'C6', duration: 0.35 },
  { note: 'A5', duration: 0.18 },
  { note: 'C6', duration: 0.35 },
  { note: 'F6', duration: 1.00 },
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
