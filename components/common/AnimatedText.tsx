"use client"

import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import type { ReactNode } from "react"

type AnimatedTextProps = {
  children: ReactNode
  className?: string
  /** Delay before animation starts (seconds) */
  delay?: number
  /** Whether to stagger child elements */
  stagger?: boolean
}

/**
 * AnimatedText — wraps text content with a staggered or simple slide-up reveal.
 * Use `stagger` to animate child elements (e.g., words, lines) in sequence.
 */
export function AnimatedText({
  children,
  className,
  delay = 0,
  stagger = false,
}: AnimatedTextProps) {
  const variants = stagger ? staggerContainer : slideUp

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * AnimatedItem — a child element meant to be placed inside an AnimatedText
 * with `stagger` enabled, or inside any stagger container.
 */
export function AnimatedItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={slideUp}>
      {children}
    </motion.div>
  )
}