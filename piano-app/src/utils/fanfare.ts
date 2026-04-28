import type { NoteEvent } from '../types';

// JRA G1 Fanfare (Tokyo/Nakayama - Koichi Sugiyama, approximate transcription in C major)
export const FANFARE: NoteEvent[] = [
  // Opening call
  { note: 'G4', duration: 0.15 },
  { note: 'C5', duration: 0.3 },
  { note: 'E5', duration: 0.3 },
  { note: 'G5', duration: 0.5 },
  { note: 'G5', duration: 0.15 },
  { note: 'A5', duration: 0.15 },
  { note: 'G5', duration: 0.35 },

  // Second phrase
  { note: 'E5', duration: 0.15 },
  { note: 'F5', duration: 0.15 },
  { note: 'E5', duration: 0.25 },
  { note: 'D5', duration: 0.15 },
  { note: 'C5', duration: 0.15 },
  { note: 'D5', duration: 0.4 },

  // Third phrase
  { note: 'E5', duration: 0.15 },
  { note: 'G5', duration: 0.15 },
  { note: 'C6', duration: 0.5 },
  { note: 'B5', duration: 0.15 },
  { note: 'A5', duration: 0.15 },
  { note: 'G5', duration: 0.4 },

  // Fourth phrase
  { note: 'G5', duration: 0.15 },
  { note: 'A5', duration: 0.15 },
  { note: 'B5', duration: 0.15 },
  { note: 'C6', duration: 0.15 },
  { note: 'G5', duration: 0.25 },
  { note: 'E5', duration: 0.15 },
  { note: 'C5', duration: 0.15 },

  // Finale
  { note: 'G4', duration: 0.15 },
  { note: 'C5', duration: 0.15 },
  { note: 'E5', duration: 0.15 },
  { note: 'G5', duration: 0.25 },
  { note: 'E5', duration: 0.15 },
  { note: 'G5', duration: 0.25 },
  { note: 'C6', duration: 0.9 },
];

export const SONG_NAME = 'JRA G1 ファンファーレ';
