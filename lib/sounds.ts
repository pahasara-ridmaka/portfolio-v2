// lib/sounds.ts
// A tiny Web Audio API sound engine for hover/click UI feedback.
// No audio files required — sounds are synthesized with oscillators.

type AudioContextClass = typeof AudioContext;

let audioCtx: AudioContext | null = null;
let lastHoverTime = 0;
let lastClickTime = 0;

const HOVER_THROTTLE_MS = 60;
const CLICK_THROTTLE_MS = 35;
const HOVER_GAIN = 0.035;
const CLICK_GAIN = 0.07;

/** Lazily create (and resume) the shared AudioContext on first use. */
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  if (!audioCtx) {
    const Ctor: AudioContextClass | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: AudioContextClass })
        .webkitAudioContext;
    if (!Ctor) return null;
    audioCtx = new Ctor();
  }

  if (audioCtx.state === "suspended") {
    void audioCtx.resume();
  }

  return audioCtx;
}

function playTone(
  freqStart: number,
  freqEnd: number,
  duration: number,
  gainValue: number,
  type: OscillatorType = "sine"
) {
  const ctx = getAudioContext();
  if (!ctx || ctx.state !== "running") return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freqStart, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(freqEnd, 1), now + duration);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.02);
}

/** Soft tick for hover interactions. */
export function playHoverSound() {
  const now = Date.now();
  if (now - lastHoverTime < HOVER_THROTTLE_MS) return;
  lastHoverTime = now;

  playTone(1800, 2200, 0.04, HOVER_GAIN);
}

/** Subtle pop for click interactions. */
export function playClickSound() {
  const now = Date.now();
  if (now - lastClickTime < CLICK_THROTTLE_MS) return;
  lastClickTime = now;

  playTone(600, 900, 0.08, CLICK_GAIN);
  playTone(1400, 1800, 0.05, CLICK_GAIN * 0.5);
}