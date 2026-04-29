import { useCallback, useRef, useState } from 'react';
import type { NoteEvent } from '../types';
import { getAudioContext, scheduleNote } from '../utils/audioEngine';
import type { ScheduledNote } from '../utils/audioEngine';

export function useAutoPlay(
  onNoteOn: (note: string) => void,
  onNoteOff: (note: string) => void,
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scheduled = useRef<ScheduledNote[]>([]);
  const playingRef = useRef(false);

  const start = useCallback((events: NoteEvent[]) => {
    if (playingRef.current) return;
    playingRef.current = true;
    setIsPlaying(true);

    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();

    // Small lookahead so all notes are scheduled before the first one fires
    const startTime = ctx.currentTime + 0.05;

    let t = 0;
    events.forEach(({ notes, duration, noteDuration }) => {
      const offDelay = noteDuration ?? duration * 0.82;
      notes.forEach(note => {
        // Audio: scheduled precisely using AudioContext clock
        scheduled.current.push(
          scheduleNote(note, ctx, startTime + t, startTime + t + offDelay),
        );

        // Visuals: setTimeout is approximate but acceptable for UI updates
        const tMs = t * 1000 + 50; // +50ms matches the 0.05s lookahead above
        timers.current.push(
          setTimeout(() => onNoteOn(note), tMs),
          setTimeout(() => onNoteOff(note), tMs + offDelay * 1000),
        );
      });
      t += duration;
    });

    timers.current.push(
      setTimeout(() => {
        playingRef.current = false;
        setIsPlaying(false);
        scheduled.current = [];
      }, t * 1000 + 50),
    );
  }, [onNoteOn, onNoteOff]);

  const stop = useCallback((events: NoteEvent[]) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    scheduled.current.forEach(sn => sn.cancelEarly());
    scheduled.current = [];
    events.forEach(({ notes }) => notes.forEach(note => onNoteOff(note)));
    playingRef.current = false;
    setIsPlaying(false);
  }, [onNoteOff]);

  return { isPlaying, start, stop };
}
