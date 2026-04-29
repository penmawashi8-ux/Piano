import { useCallback, useRef, useState } from 'react';
import type { NoteEvent } from '../types';

export function useAutoPlay(
  onNoteOn: (note: string) => void,
  onNoteOff: (note: string) => void,
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const playingRef = useRef(false);

  const start = useCallback((events: NoteEvent[]) => {
    if (playingRef.current) return;
    playingRef.current = true;
    setIsPlaying(true);

    let t = 0;
    events.forEach(({ notes, duration, noteDuration }) => {
      const offDelay = noteDuration ?? duration * 0.82;
      notes.forEach(note => {
        timers.current.push(
          setTimeout(() => onNoteOn(note), t * 1000),
          setTimeout(() => onNoteOff(note), (t + offDelay) * 1000),
        );
      });
      t += duration;
    });

    timers.current.push(
      setTimeout(() => {
        playingRef.current = false;
        setIsPlaying(false);
      }, t * 1000),
    );
  }, [onNoteOn, onNoteOff]);

  const stop = useCallback((events: NoteEvent[]) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    events.forEach(({ notes }) => notes.forEach(note => onNoteOff(note)));
    playingRef.current = false;
    setIsPlaying(false);
  }, [onNoteOff]);

  return { isPlaying, start, stop };
}
