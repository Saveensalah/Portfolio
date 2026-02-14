'use client'

import { useEffect, useRef, useMemo } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 40,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  
  const easing = useMemo(() => [0.25, 0.46, 0.45, 0.94], [])

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: easing,
        },
      })
    }
  }, [isInView, controls, delay, duration, easing])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={controls}
      className={className}
      style={{ willChange: 'auto' }}
    >
      {children}
    </motion.div>
  )
}
