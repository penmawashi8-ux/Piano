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
// ソルフェージュ: レレレレレレファ... (固定ド: レ=D, ファ=F)
// 構造: D5×6(付点pickup+16分×4+8分×1) → F5(全音符+タイ = 長音) を繰り返し
const G1_EAST_NOTES: NoteEvent[] = [

  // ===== 4/4 Section =====

  // --- Phrase 1: D×6 → F5 long ---
  { note: 'D5', duration: 0.32 }, // 付点4分 pickup (accent >)  = れ
  { note: 'D5', duration: 0.10 }, // 16分 (>)                   = れ
  { note: 'D5', duration: 0.10 }, // 16分 (>)                   = れ
  { note: 'D5', duration: 0.10 }, // 16分 (>)                   = れ
  { note: 'D5', duration: 0.10 }, // 16分 (>)                   = れ
  { note: 'D5', duration: 0.22 }, // 8分 (>)                    = れ
  { note: 'F5', duration: 2.10 }, // 全音符+タイ8分              = ふぁーーー

  // --- Phrase 2: same call → F5 long ---
  { note: 'D5', duration: 0.32 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.22 },
  { note: 'F5', duration: 2.10 },

  // --- Phrase 3: same call → G5 (少し高め) ---
  { note: 'D5', duration: 0.32 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.10 },
  { note: 'D5', duration: 0.22 },
  { note: 'G5', duration: 0.55 }, // 短め → 5/4へ続く

  // ===== 5/4 Section =====
  // アクセント付きコード上声
  { note: 'F5',  duration: 0.50 }, // >
  { note: 'Eb5', duration: 0.50 }, // >
  { note: 'D5',  duration: 0.50 }, // >
  { note: 'F5',  duration: 0.50 }, // >
  { note: 'G5',  duration: 0.50 }, // >

  // ===== 2/4 Section =====
  { note: 'Bb5', duration: 0.50 },
  { note: 'G5',  duration: 0.50 },

  // ===== 5/4 Section (2回目) =====
  { note: 'F5',  duration: 0.50 },
  { note: 'Eb5', duration: 0.50 },
  { note: 'D5',  duration: 0.50 },
  { note: 'F5',  duration: 0.50 },
  { note: 'G5',  duration: 0.50 },

  // ===== 2/4 =====
  { note: 'Bb5', duration: 0.50 },
  { note: 'G5',  duration: 0.50 },

  // ===== 4/4 Coda =====
  { note: 'F5',  duration: 1.50 }, // 付点2分
  { note: 'Eb5', duration: 0.50 },
  { note: 'D5',  duration: 0.50 },
  { note: 'Bb4', duration: 0.50 },
  { note: 'Bb5', duration: 2.20 }, // 最終長音
  { note: 'F5',  duration: 0.22 }, // 最後の短い音
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
