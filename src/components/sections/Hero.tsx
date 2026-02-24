'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RotatingText from '@/components/RotatingText'
import ScrollReveal from '@/components/ScrollReveal'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animated-gradient" />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm md:text-base font-mono text-neon-blue mb-4">
                  👋 Welcome to my portfolio
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Hi, I&apos;m <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">Saveen Salah</span>
                </h1>
              </motion.div>

              <ScrollReveal delay={0.4}>
                <div className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 min-h-[60px]">
                  <RotatingText />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                  I craft beautiful, high-performance web experiences with cutting-edge technology. Specializing in React, DevOps, and WordPress solutions that deliver real value.
                </p>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={0.6}>
                <div className="flex flex-wrap gap-4 pt-8">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
                  >
                    View Projects <HiArrowRight />
                  </motion.a>

                  <motion.a
                    href="/resume_doc/saveen_salah"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 glass rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Download Resume
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 glass rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Right side - Profile image */}
          <ScrollReveal delay={0.3}>
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl filter blur-2xl opacity-50" />
                <div className="relative bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl p-2 glow-blue">
                  <Image
                    src="/images/profile.jpg"
                    alt="Saveen Salah"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-1 h-2 bg-neon-blue rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
