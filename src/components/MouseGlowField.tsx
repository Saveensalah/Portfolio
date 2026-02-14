'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'

export default function MouseGlowField() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowRef = useRef<HTMLDivElement>(null)
  const lastMoveRef = useRef({ x: 0, y: 0 })
  const throttleRef = useRef<NodeJS.Timeout | null>(null)

  const glowX = useTransform(mouseX, (x) => x - 125)
  const glowY = useTransform(mouseY, (y) => y - 125)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleRef.current) return

      const distance = Math.hypot(
        e.clientX - lastMoveRef.current.x,
        e.clientY - lastMoveRef.current.y
      )

      if (distance > 5) {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
        lastMoveRef.current = { x: e.clientX, y: e.clientY }
        
        throttleRef.current = setTimeout(() => {
          throttleRef.current = null
        }, 16)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (throttleRef.current) clearTimeout(throttleRef.current)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={glowRef}
      className="fixed pointer-events-none z-0 w-64 h-64 rounded-full blur-3xl mix-blend-screen will-change-transform"
      style={{
        x: glowX,
        y: glowY,
        background:
          'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0) 70%)',
        display: 'none',
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
