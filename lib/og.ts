import { readFileSync } from "fs";
import { join } from "path";

/**
 * Shared helpers for dynamically generated Open Graph images.
 */

const FONT_PATH = join(process.cwd(), "lib", "fonts", "inter-var.ttf");

/**
 * Loads the Inter variable font (TTF) bundled locally in `lib/fonts/`.
 * Covers weights 400–800 in a single file.
 * Returns null if the font file is missing so callers can degrade gracefully.
 */
export function loadInterFont(): Buffer | null {
  try {
    return readFileSync(FONT_PATH);
  } catch {
    return null;
  }
}

/** Weight range supported by the bundled Inter variable font. */
export const INTER_FONT_WEIGHT_RANGE = [400, 800] as const;

/**
 * Truncates text to approximately `maxChars` characters with an ellipsis.
 * Satori (the ImageResponse renderer) has limited support for CSS
 * line-clamping, so we clamp in JS instead for deterministic output.
 */
export function clampText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars - 1).trimEnd() + "…";
}