import type { NoteEvent } from '../types';

export interface FanfareItem {
  id: string;
  name: string;
  composer: string;
  notes: NoteEvent[];
}

// 変ロ長調(Bb major)・5拍子でのドレミ対応:
// ド=A#(Bb) レ=C ミ=D ファ=D#(Eb) ソ=F ラ=G シ=A
//
// JRA G1 ファンファーレ（東コース）すぎやまこういち 1986
// ソルフェージュ:
//   ミーミミ ミーミミ ソー
//   レーレレ レーレレ ファー
//   ミドソファー ミドソレー
//   ラーラ レファミドソレー
//   レーレ レファミラファソー ソソソ ソー
const G1_EAST: NoteEvent[] = [
  // ミーミミ (1小節)
  { note: 'D5', duration: 0.65 }, { note: 'D5', duration: 0.3 }, { note: 'D5', duration: 0.65 },
  // ミーミミ (2小節)
  { note: 'D5', duration: 0.65 }, { note: 'D5', duration: 0.3 }, { note: 'D5', duration: 0.65 },
  // ソー
  { note: 'F5', duration: 1.2 },
  // レーレレ
  { note: 'C5', duration: 0.65 }, { note: 'C5', duration: 0.3 }, { note: 'C5', duration: 0.55 },
  // レーレレ
  { note: 'C5', duration: 0.65 }, { note: 'C5', duration: 0.3 }, { note: 'C5', duration: 0.55 },
  // ファー
  { note: 'D#5', duration: 1.0 },
  // ミドソファー
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 },
  { note: 'F5', duration: 0.3  }, { note: 'D#5', duration: 0.55 },
  // ミドソレー
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 },
  { note: 'F5', duration: 0.3  }, { note: 'C5',  duration: 0.55 },
  // ラーラ
  { note: 'G5', duration: 0.7 }, { note: 'G5', duration: 0.45 },
  // レファミドソレー
  { note: 'C5',  duration: 0.2 }, { note: 'D#5', duration: 0.2 },
  { note: 'D5',  duration: 0.2 }, { note: 'A#4', duration: 0.2 },
  { note: 'F5',  duration: 0.2 }, { note: 'C5',  duration: 0.45 },
  // レーレ
  { note: 'C5', duration: 0.55 }, { note: 'C5', duration: 0.45 },
  // レファミラファソー
  { note: 'C5',  duration: 0.2 }, { note: 'D#5', duration: 0.2 },
  { note: 'D5',  duration: 0.2 }, { note: 'G5',  duration: 0.3 },
  { note: 'D#5', duration: 0.2 }, { note: 'F5',  duration: 0.45 },
  // ソソソ
  { note: 'F5', duration: 0.25 }, { note: 'F5', duration: 0.25 }, { note: 'F5', duration: 0.25 },
  // ソー
  { note: 'F5', duration: 1.1 },
];

// JRA G1 ファンファーレ（西コース - 京都・阪神）宮川泰 1987
// 明るくポップな4拍子
const G1_WEST: NoteEvent[] = [
  { note: 'G5', duration: 0.35 }, { note: 'E5', duration: 0.2 }, { note: 'C5', duration: 0.2 },
  { note: 'G5', duration: 0.5 },
  { note: 'G5', duration: 0.25 }, { note: 'A5', duration: 0.25 },
  { note: 'B5', duration: 0.45 }, { note: 'A5', duration: 0.2 }, { note: 'G5', duration: 0.2 },
  { note: 'E5', duration: 0.4 }, { note: 'G5', duration: 0.25 }, { note: 'A5', duration: 0.25 },
  { note: 'C6', duration: 0.5 }, { note: 'B5', duration: 0.2 }, { note: 'A5', duration: 0.2 },
  { note: 'G5', duration: 0.35 }, { note: 'A5', duration: 0.2 }, { note: 'G5', duration: 0.2 },
  { note: 'E5', duration: 0.4 }, { note: 'D5', duration: 0.2 }, { note: 'E5', duration: 0.2 },
  { note: 'F5', duration: 0.3 }, { note: 'G5', duration: 0.3 }, { note: 'A5', duration: 0.3 },
  { note: 'B5', duration: 0.45 }, { note: 'A5', duration: 0.2 }, { note: 'G5', duration: 0.2 },
  { note: 'F5', duration: 0.25 }, { note: 'E5', duration: 0.25 }, { note: 'D5', duration: 0.25 },
  { note: 'C5', duration: 0.2 }, { note: 'E5', duration: 0.2 },
  { note: 'G5', duration: 0.2 }, { note: 'C6', duration: 0.85 },
];

// JRA G2 ファンファーレ（東コース）すぎやまこういち
const G2_EAST: NoteEvent[] = [
  { note: 'D5', duration: 0.5 }, { note: 'D5', duration: 0.25 }, { note: 'D5', duration: 0.5 },
  { note: 'F5', duration: 0.8 },
  { note: 'C5', duration: 0.5 }, { note: 'C5', duration: 0.25 }, { note: 'C5', duration: 0.5 },
  { note: 'D#5', duration: 0.7 },
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 },
  { note: 'F5', duration: 0.3 }, { note: 'D#5', duration: 0.5 },
  { note: 'D5', duration: 0.25 }, { note: 'A#4', duration: 0.25 }, { note: 'C5', duration: 0.25 },
  { note: 'D5', duration: 0.3 }, { note: 'F5', duration: 0.3 }, { note: 'A#4', duration: 0.3 },
  { note: 'C5', duration: 0.8 },
];

// JRA G3 ファンファーレ（東コース）すぎやまこういち
const G3_EAST: NoteEvent[] = [
  { note: 'D5', duration: 0.45 }, { note: 'D5', duration: 0.2 }, { note: 'D5', duration: 0.45 },
  { note: 'F5', duration: 0.65 },
  { note: 'C5', duration: 0.4 }, { note: 'D#5', duration: 0.25 }, { note: 'D5', duration: 0.25 },
  { note: 'A#4', duration: 0.25 }, { note: 'F5', duration: 0.3 }, { note: 'C5', duration: 0.55 },
  { note: 'G5', duration: 0.45 }, { note: 'F5', duration: 0.25 }, { note: 'D#5', duration: 0.25 },
  { note: 'F5', duration: 0.7 },
];

// JRA オープン ファンファーレ
const OPEN: NoteEvent[] = [
  { note: 'D5', duration: 0.35 }, { note: 'D5', duration: 0.2 }, { note: 'D5', duration: 0.35 },
  { note: 'F5', duration: 0.55 },
  { note: 'C5', duration: 0.35 }, { note: 'D5', duration: 0.2 },
  { note: 'D#5', duration: 0.3 }, { note: 'D5', duration: 0.2 },
  { note: 'A#4', duration: 0.2 }, { note: 'F5', duration: 0.6 },
];

export const FANFARES: FanfareItem[] = [
  { id: 'g1-east', name: 'G1（東）東京・中山',  composer: 'すぎやまこういち', notes: G1_EAST },
  { id: 'g1-west', name: 'G1（西）京都・阪神',  composer: '宮川泰',           notes: G1_WEST },
  { id: 'g2-east', name: 'G2（東）',             composer: 'すぎやまこういち', notes: G2_EAST },
  { id: 'g3-east', name: 'G3（東）',             composer: 'すぎやまこういち', notes: G3_EAST },
  { id: 'open',    name: 'OP（オープン）',        composer: '',                notes: OPEN },
];
