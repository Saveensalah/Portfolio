'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const skillCategories = [
  {
    name: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'JavaScript ES6+', level: 93 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Redux', level: 85 },
      { name: 'Bootstrap', level: 88 },
      { name: 'Context API', level: 90 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Firebase', level: 75 },
      { name: 'REST APIs', level: 88 },
      { name: 'Database Design', level: 75 },
    ],
  },
  {
    name: 'DevOps',
    icon: '🚀',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Deployment', level: 82 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    name: 'CMS',
    icon: '📝',
    skills: [
      { name: 'WordPress', level: 88 },
      { name: 'Elementor', level: 85 },
      { name: 'Theme Development', level: 87 },
      { name: 'Plugin Integration', level: 83 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-neon-blue">{level}%</span>
      </div>
      <div className="w-full h-2 glass rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.name} delay={0.1 * idx}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-8 glow-blue hover-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Skills */}
        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 glass rounded-lg p-8 glow-purple"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Soft Skills & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Communication',
                'Code Review',
                'Debugging',
                'Performance Optimization',
                'Responsive Design',
                'SEO Basics',
              ].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-lg p-4 text-center cursor-pointer hover:bg-white/10 transition-all"
                >
                  <p className="text-sm font-medium text-gray-300">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
