import type { NoteEvent } from '../types';

export interface Fanfare {
  id: string;
  name: string;
  composer: string;
  notes: NoteEvent[];
}

// JRA G1 東コース ファンファーレ（すぎやまこういち作曲）
// 変ロ長調(Bb major) / 4/4 → 5/4 → 2/4
//
// 4/4部：付点4分音符(pickup) → 16分×4(> > > >) → 8分×2(> >) → 全音符+タイ
//         このパターンを3回繰り返し、長音が D5 → F5 → G5 と上昇する
// 5/4/2/4部：コード系の刻みパターン
//
// テンポ: 四分音符 ≒ 108 BPM
//  付点4分 = 0.83s, 4分 = 0.56s, 8分 = 0.28s, 16分 = 0.14s, 全音符 = 2.22s
const G1_EAST_NOTES: NoteEvent[] = [

  // ===== 4/4 Section =====

  // --- Phrase 1: pickup → ×4 → ×2 → D5(long) ---
  { note: 'Bb4', duration: 0.79 }, // 付点4分 pickup (accent >)

  { note: 'Bb4', duration: 0.10 }, // 16th (>)
  { note: 'Bb4', duration: 0.10 }, // 16th (>)
  { note: 'Bb4', duration: 0.10 }, // 16th (>)
  { note: 'Bb4', duration: 0.10 }, // 16th (>)
  { note: 'C5',  duration: 0.24 }, // 8th (>)
  { note: 'Bb4', duration: 0.24 }, // 8th (>)
  { note: 'D5',  duration: 2.18 }, // 全音符 + タイ8分 (5拍分)

  // --- Phrase 2: 8threst + pickup → ×4 → ×2 → F5(long) ---
  { note: 'Bb4', duration: 0.79 }, // 付点4分 pickup

  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'D5',  duration: 0.24 }, // 8th (>)
  { note: 'Eb5', duration: 0.24 }, // 8th (>)
  { note: 'F5',  duration: 2.18 }, // 全音符 + タイ8分

  // --- Phrase 3: similar → G5(long) ---
  { note: 'Bb4', duration: 0.79 }, // 付点4分 pickup

  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'Bb4', duration: 0.10 },
  { note: 'C5',  duration: 0.24 },
  { note: 'D5',  duration: 0.24 },
  { note: 'G5',  duration: 2.18 }, // 全音符 + タイ8分（3フレーズで最高音）

  // ===== 5/4 Section =====
  // 5拍子×2小節のパターン (image 2 右側)
  // 上声：F5 Eb5 / D5 F5 G5 のアクセント刻み
  { note: 'F5',  duration: 0.52 }, // quarter >
  { note: 'Eb5', duration: 0.52 }, // quarter >
  { note: 'D5',  duration: 0.52 }, // quarter >
  { note: 'F5',  duration: 0.52 }, // quarter >
  { note: 'G5',  duration: 0.52 }, // quarter >

  // ===== 2/4 Section =====
  { note: 'Bb5', duration: 0.52 }, // quarter >
  { note: 'G5',  duration: 0.52 }, // quarter >

  // ===== 5/4 Section (repeat) =====
  { note: 'F5',  duration: 0.52 },
  { note: 'Eb5', duration: 0.52 },
  { note: 'D5',  duration: 0.52 },
  { note: 'F5',  duration: 0.52 },
  { note: 'G5',  duration: 0.52 },

  // ===== 2/4 =====
  { note: 'Bb5', duration: 0.52 },
  { note: 'G5',  duration: 0.52 },

  // ===== 4/4 Coda (image 3) =====
  // 付点2分 → 4分 → 全音符 + 最後の8分
  { note: 'F5',  duration: 1.56 }, // 付点2分 (3拍)
  { note: 'Eb5', duration: 0.52 }, // 4分
  { note: 'D5',  duration: 0.52 }, // 4分
  { note: 'Bb4', duration: 0.52 }, // 4分

  // 終わりの長い音 + 最後の短い音
  { note: 'Bb5', duration: 2.20 }, // 全音符 (最終クライマックス)
  { note: 'F5',  duration: 0.24 }, // 最後の8分音符
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
