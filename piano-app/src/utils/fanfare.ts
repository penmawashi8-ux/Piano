import type { NoteEvent } from '../types';

export interface FanfareItem {
  id: string;
  name: string;
  notes: NoteEvent[];
}

// JRA G1 ファンファーレ（東コース - 東京・中山）すぎやまこういち
const G1_EAST: NoteEvent[] = [
  { note: 'G4', duration: 0.15 }, { note: 'C5', duration: 0.3 },
  { note: 'E5', duration: 0.3 },  { note: 'G5', duration: 0.5 },
  { note: 'G5', duration: 0.15 }, { note: 'A5', duration: 0.15 },
  { note: 'G5', duration: 0.35 }, { note: 'E5', duration: 0.15 },
  { note: 'F5', duration: 0.15 }, { note: 'E5', duration: 0.25 },
  { note: 'D5', duration: 0.15 }, { note: 'C5', duration: 0.15 },
  { note: 'D5', duration: 0.4 },  { note: 'E5', duration: 0.15 },
  { note: 'G5', duration: 0.15 }, { note: 'C6', duration: 0.5 },
  { note: 'B5', duration: 0.15 }, { note: 'A5', duration: 0.15 },
  { note: 'G5', duration: 0.4 },  { note: 'G5', duration: 0.15 },
  { note: 'A5', duration: 0.15 }, { note: 'B5', duration: 0.15 },
  { note: 'C6', duration: 0.15 }, { note: 'G5', duration: 0.25 },
  { note: 'E5', duration: 0.15 }, { note: 'C5', duration: 0.15 },
  { note: 'G4', duration: 0.15 }, { note: 'C5', duration: 0.15 },
  { note: 'E5', duration: 0.15 }, { note: 'G5', duration: 0.25 },
  { note: 'E5', duration: 0.15 }, { note: 'G5', duration: 0.25 },
  { note: 'C6', duration: 0.9 },
];

// JRA G1 ファンファーレ（西コース - 京都・阪神・中京）すぎやまこういち
const G1_WEST: NoteEvent[] = [
  { note: 'E5', duration: 0.2 },  { note: 'G5', duration: 0.2 },
  { note: 'B5', duration: 0.45 }, { note: 'A5', duration: 0.15 },
  { note: 'G5', duration: 0.15 }, { note: 'F5', duration: 0.15 },
  { note: 'E5', duration: 0.35 }, { note: 'D5', duration: 0.15 },
  { note: 'E5', duration: 0.15 }, { note: 'F5', duration: 0.15 },
  { note: 'G5', duration: 0.35 }, { note: 'E5', duration: 0.15 },
  { note: 'C5', duration: 0.15 }, { note: 'D5', duration: 0.35 },
  { note: 'E5', duration: 0.15 }, { note: 'G5', duration: 0.15 },
  { note: 'B5', duration: 0.45 }, { note: 'C6', duration: 0.15 },
  { note: 'B5', duration: 0.15 }, { note: 'A5', duration: 0.35 },
  { note: 'G5', duration: 0.15 }, { note: 'F5', duration: 0.15 },
  { note: 'E5', duration: 0.15 }, { note: 'D5', duration: 0.15 },
  { note: 'C5', duration: 0.25 }, { note: 'E5', duration: 0.15 },
  { note: 'G5', duration: 0.15 }, { note: 'B5', duration: 0.15 },
  { note: 'C6', duration: 0.85 },
];

// JRA G2 ファンファーレ すぎやまこういち
const G2: NoteEvent[] = [
  { note: 'G4', duration: 0.15 }, { note: 'C5', duration: 0.25 },
  { note: 'E5', duration: 0.25 }, { note: 'G5', duration: 0.45 },
  { note: 'F5', duration: 0.15 }, { note: 'E5', duration: 0.15 },
  { note: 'D5', duration: 0.3 },  { note: 'C5', duration: 0.15 },
  { note: 'D5', duration: 0.15 }, { note: 'E5', duration: 0.3 },
  { note: 'G5', duration: 0.3 },  { note: 'E5', duration: 0.15 },
  { note: 'D5', duration: 0.15 }, { note: 'C5', duration: 0.25 },
  { note: 'E5', duration: 0.15 }, { note: 'G5', duration: 0.15 },
  { note: 'C6', duration: 0.75 },
];

// JRA G3 ファンファーレ すぎやまこういち
const G3: NoteEvent[] = [
  { note: 'C5', duration: 0.2 },  { note: 'E5', duration: 0.2 },
  { note: 'G5', duration: 0.4 },  { note: 'G5', duration: 0.15 },
  { note: 'A5', duration: 0.15 }, { note: 'G5', duration: 0.3 },
  { note: 'E5', duration: 0.15 }, { note: 'F5', duration: 0.15 },
  { note: 'E5', duration: 0.3 },  { note: 'C5', duration: 0.15 },
  { note: 'E5', duration: 0.15 }, { note: 'G5', duration: 0.65 },
];

// JRA オープン ファンファーレ すぎやまこういち
const OPEN: NoteEvent[] = [
  { note: 'G4', duration: 0.2 },  { note: 'C5', duration: 0.2 },
  { note: 'E5', duration: 0.2 },  { note: 'G5', duration: 0.4 },
  { note: 'E5', duration: 0.2 },  { note: 'C5', duration: 0.2 },
  { note: 'G5', duration: 0.55 },
];

export const FANFARES: FanfareItem[] = [
  { id: 'g1-east', name: 'G1（東コース）東京・中山', notes: G1_EAST },
  { id: 'g1-west', name: 'G1（西コース）京都・阪神', notes: G1_WEST },
  { id: 'g2',      name: 'G2',                       notes: G2 },
  { id: 'g3',      name: 'G3',                       notes: G3 },
  { id: 'open',    name: 'OP（オープン）',            notes: OPEN },
];
