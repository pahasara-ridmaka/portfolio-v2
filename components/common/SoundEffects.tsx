"use client";

import { useEffect } from "react";
import { playHoverSound, playClickSound } from "@/lib/sounds";

/**
 * SoundEffects — global, event-delegated sound effects for the whole site.
 * Mount once in the root layout. Automatically covers all links, buttons,
 * and other interactive elements on every page — including future ones.
 *
 * Opt-out / opt-in:
 *   - Add `data-sound="off"` to an element to silence it
 *     (children are also silenced, but unaffected ancestors still work)
 *   - Add `data-sound="click"` to give click sound to non-link/button
 *     clickable elements (e.g. photo thumbnails that open a lightbox)
 */
export function SoundEffects() {
  useEffect(() => {
    function isInteractive(el: Element | null): boolean {
      if (!el || !(el instanceof Element)) return false;
      if (el.closest("[data-sound='off']")) return false;
      if (el.matches("[data-sound='off']")) return false;
      return Boolean(
        el.closest(
          'a, button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"], summary, [data-sound="click"]'
        )
      );
    }

    function handlePointerOver(e: PointerEvent) {
      // Only react to mouse-like pointers so touch taps don't double-trigger.
      if (e.pointerType !== "mouse") return;
      if (isInteractive(e.target as Element | null)) {
        playHoverSound();
      }
    }

    function handleClick(e: MouseEvent) {
      if (isInteractive(e.target as Element | null)) {
        playClickSound();
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (isInteractive(e.target as Element | null)) {
        playClickSound();
      }
    }

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}