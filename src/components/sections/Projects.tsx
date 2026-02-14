'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
  {
    title: 'React SaaS Dashboard',
    description: 'Enterprise-level analytics dashboard with real-time data visualization, user authentication, and responsive design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    title: 'WordPress Business Website',
    description: 'Custom WordPress theme with advanced Elementor integration, optimized for conversion and SEO best practices.',
    image: '/images/wordpress.jpg',
    tags: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'DevOps Deployment Automation',
    description: 'CI/CD pipeline automation tool demonstrating deployment workflows, GitHub actions, and infrastructure as code principles.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    tags: ['Docker', 'CI/CD', 'Git', 'Linux'],
    github: '#',
    live: '#',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <ScrollReveal delay={0.1 * index}>
      <motion.div
        whileHover={{ y: -10 }}
        className="glass rounded-lg overflow-hidden glow-purple hover-card group flex flex-col h-full"
      >
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 backdrop-blur-sm"
          >
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neon-blue rounded-full text-dark-bg hover:shadow-lg transition-all"
              aria-label="View code"
            >
              <HiCode size={20} />
            </motion.a>
            <motion.a
              href={project.live}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neon-purple rounded-full text-white hover:shadow-lg transition-all"
              aria-label="Live demo"
            >
              <HiExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.1 }}
                className="text-xs px-3 py-1 glass rounded-full text-neon-blue hover:bg-white/10 transition-all"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
            <p className="mt-6 text-gray-400 max-w-2xl">
              A selection of projects that showcase my ability to build high-performance, user-centric applications across different technologies
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 glass rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              View All Projects on GitHub
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
