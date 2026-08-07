"use client"

import { motion } from "framer-motion"
import { pageTransition } from "@/lib/animations"
import type { ReactNode } from "react"

type PageTransitionProps = {
  children: ReactNode
  className?: string
}

/**
 * PageTransition — wraps page content with enter/exit animations.
 * Place inside AnimatePresence in the layout for route transitions.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}