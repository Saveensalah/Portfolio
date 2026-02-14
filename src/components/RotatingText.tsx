'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = ['Full Stack Web Developer', 'React Specialist', 'DevOps Engineer', 'WordPress Developer']

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-block">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="inline-block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
      >
        {roles[currentIndex]}
      </motion.span>
    </div>
  )
}
