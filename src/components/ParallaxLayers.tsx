'use client'

import { useRef, useEffect } from 'react'
import { useScroll, motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxLayers() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll-driven background color animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          markers: false,
        },
      })

      tl.to(
        containerRef.current,
        {
          '--background-position': '100%',
          duration: 1,
        },
        0
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden perspective">
      {/* Layer 1: Primary Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-[#0f1736] to-[#1a0a2e]"
        style={{
          opacity: 0.9,
        }}
      />

      {/* Layer 2: Animated Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: 0.06,
        }}
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(15)"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="50%" stopColor="#BD00FF" />
            <stop offset="100%" stopColor="#FF006B" />
          </linearGradient>
          <radialGradient id="orbGrad1">
            <stop offset="0%" stopColor="rgba(0, 217, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
          </radialGradient>
          <radialGradient id="orbGrad2">
            <stop offset="0%" stopColor="rgba(189, 0, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(189, 0, 255, 0)" />
          </radialGradient>
        </defs>
        <g opacity="0.5">
          <rect width="100%" height="100%" fill="url(#grid)" />
        </g>
        {/* Animated orbs - reduced animation */}
        <motion.circle
          cx="10%"
          cy="10%"
          r="200"
          fill="url(#orbGrad1)"
          animate={{
            cx: ['10%', '12%', '10%'],
            cy: ['10%', '15%', '10%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="90%"
          cy="80%"
          r="250"
          fill="url(#orbGrad2)"
          animate={{
            cx: ['90%', '88%', '90%'],
            cy: ['80%', '75%', '80%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Layer 3: Floating Glassmorphic Elements - reduced */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '5%',
          }}
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-neon-purple/12 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Layer 4: Foreground Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-50" />
      
      {/* Layer 5: Subtle Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-dark-bg/30 opacity-40" />
    </div>
  )
}
