'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    let animationFrameId: number

    const raf = (time: number) => {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
