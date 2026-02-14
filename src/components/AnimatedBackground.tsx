'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import ParallaxLayers from './ParallaxLayers'

const NoiseOverlay = dynamic(() => import('./NoiseOverlay'), { ssr: false })
const MouseGlowField = dynamic(() => import('./MouseGlowField'), { ssr: false })

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-dark-bg">
      {/* Parallax layers background */}
      <ParallaxLayers />
      
      {/* Premium effects */}
      <MouseGlowField />
      <NoiseOverlay />
    </div>
  )
}
