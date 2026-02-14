'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const imageData = ctx.createImageData(canvas.width, canvas.height)
    const data = imageData.data

    // Generate noise
    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255
      data[i] = value // R
      data[i + 1] = value // G
      data[i + 2] = value // B
      data[i + 3] = Math.random() * 15 // A (very subtle)
    }

    ctx.putImageData(imageData, 0, 0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-5 mix-blend-overlay z-0"
    />
  )
}
