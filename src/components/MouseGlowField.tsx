'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'

export default function MouseGlowField() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowRef = useRef<HTMLDivElement>(null)

  const glowX = useTransform(mouseX, (x) => x - 125)
  const glowY = useTransform(mouseY, (y) => y - 125)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={glowRef}
      className="fixed pointer-events-none z-0 w-64 h-64 rounded-full blur-3xl mix-blend-screen"
      style={{
        x: glowX,
        y: glowY,
        background:
          'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0) 70%)',
        display: 'none', // Hidden on mobile
      }}
      onMouseEnter={() => {
        if (glowRef.current) glowRef.current.style.display = 'block'
      }}
      onMouseLeave={() => {
        if (glowRef.current) glowRef.current.style.display = 'none'
      }}
    />
  )
}
