"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { slideUp, staggerContainer } from "@/lib/animations"
import type { ReactNode } from "react"

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  /** Use stagger container so children animate in sequence */
  stagger?: boolean
  /** Delay before animation starts (seconds) */
  delay?: number
  /** Override the animation variant */
  variant?: typeof slideUp
} & Omit<HTMLMotionProps<"section">, "children">

export function AnimatedSection({
  children,
  className,
  stagger = false,
  delay = 0,
  variant,
  ...props
}: AnimatedSectionProps) {
  const variants = variant ?? (stagger ? staggerContainer : slideUp)

  return (
    <motion.section
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

/**
 * AnimatedDiv — a generic div wrapper with scroll-triggered animation.
 * Use when you need a div instead of a section.
 */
type AnimatedDivProps = {
  children: ReactNode
  className?: string
  stagger?: boolean
  delay?: number
  variant?: typeof slideUp
} & Omit<HTMLMotionProps<"div">, "children">

export function AnimatedDiv({
  children,
  className,
  stagger = false,
  delay = 0,
  variant,
  ...props
}: AnimatedDivProps) {
  const variants = variant ?? (stagger ? staggerContainer : slideUp)

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}