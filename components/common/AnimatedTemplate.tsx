"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { pageTransition } from "@/lib/animations"
import type { ReactNode } from "react"

/**
 * AnimatedTemplate — wraps page content with route-based enter/exit animations.
 * Uses AnimatePresence with pathname as key to trigger transitions on navigation.
 */
export function AnimatedTemplate({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}