'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  className?: string
}

export default function CountUp({
  end,
  duration = 2,
  delay = 0,
  suffix = '',
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      let start: number
      let animationId: number
      const increment = end / (duration * 60)

      const animate = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = timestamp - start

        if (ref.current) {
          const current = Math.min(
            Math.floor(increment * (timestamp - start) / 16.67),
            end
          )
          ref.current.innerText = `${current}${suffix}`
        }

        if (progress < duration * 1000) {
          animationId = requestAnimationFrame(animate)
        } else if (ref.current) {
          ref.current.innerText = `${end}${suffix}`
        }
      }

      setTimeout(() => {
        animationId = requestAnimationFrame(animate)
      }, delay * 1000)

      return () => cancelAnimationFrame(animationId)
    }
  }, [isInView, end, duration, delay, suffix])

  return <span ref={ref} className={className}>0{suffix}</span>
}
