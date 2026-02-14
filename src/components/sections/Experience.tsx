'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi'

const experienceData = [
  {
    company: 'Viral Fever Interactive',
    role: 'Web Developer – React.js',
    duration: 'Aug 2024 – Present',
    type: 'Remote',
    responsibilities: [
      'Developed interactive web apps using React.js, Redux, modern JavaScript',
      'Built reusable UI components with best practices',
      'Collaborated with designers, backend developers, and product managers',
      'Integrated REST APIs and third-party services',
      'Optimized performance and data fetching strategies',
      'Implemented responsive UI using Flexbox, Grid, and modern UI libraries',
      'Conducted code reviews and systematic debugging',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <ScrollReveal key={idx} delay={0.2 * idx}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-8 glow-blue hover-card border-l-4 border-neon-blue"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <HiBriefcase className="text-neon-blue" size={24} />
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <HiBriefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiCalendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiLocationMarker size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-neon-blue mb-4">Key Responsibilities:</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIdx) => (
                      <motion.li
                        key={respIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * respIdx }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-neon-blue mt-1">▶</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 inline-block px-4 py-2 glass rounded-lg text-sm font-medium text-neon-blue hover:bg-white/10 transition-all"
                >
                  Currently employed
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Timeline info */}
        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 glass rounded-lg p-8 glow-purple"
          >
            <div className="text-center">
              <p className="text-xl font-semibold mb-4">
                Consistently delivering high-quality results across diverse projects
              </p>
              <p className="text-gray-400">
                From startup environments to established organizations, I bring expertise in building scalable solutions with modern tech stacks
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
