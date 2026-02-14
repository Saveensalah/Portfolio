'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack web developer with a deep focus on creating exceptional user experiences and high-performance applications. My journey in tech has been defined by a commitment to clean code, scalable architecture, and staying current with modern development practices.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With strong expertise in React and JavaScript ES6+, I specialize in building interactive web applications that combine beautiful UI/UX design with robust backend integration. I&apos;m equally comfortable working with DevOps workflows and WordPress solutions.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My approach to development is collaborative and detail-oriented. I thrive in cross-functional teams, working alongside designers, product managers, and other developers to deliver products that users love.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-6 text-center hover-card"
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    2+
                  </p>
                  <p className="text-gray-400 mt-2">Years Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-6 text-center hover-card"
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    15+
                  </p>
                  <p className="text-gray-400 mt-2">Projects Completed</p>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass rounded-lg p-8 glow-purple">
              <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                {[
                  { icon: '⚡', text: 'Performance-optimized React applications' },
                  { icon: '🎨', text: 'Modern, responsive UI/UX design' },
                  { icon: '🔗', text: 'Seamless REST API integration' },
                  { icon: '📱', text: 'Mobile-first development approach' },
                  { icon: '🔄', text: 'CI/CD and deployment workflows' },
                  { icon: '🛠', text: 'Custom WordPress theme development' },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
