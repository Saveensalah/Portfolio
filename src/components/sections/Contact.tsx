'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {

  // Google Apps Script Web App URL
  const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbwwq_C92TpYaZF5urf0B0V-djqieja5-C8eTYiVor4UD3R5peDL7LAKrNYEO-6GWitn/exec'

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    setError('')
  }

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setLoading(true)
    setError('')

    try {

      // Validate
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        throw new Error('Please fill all fields')
      }

      // Send data to Google Sheets
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // IMPORTANT: fixes CORS issue
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Show success
      setSubmitted(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      })

      // Hide success after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)

    } catch (err: any) {

      console.error(err)

      setError('Failed to send message')

    } finally {

      setLoading(false)

    }
  }

  // Contact links
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'saveen.dev@example.com',
      href: 'mailto:saveen.dev@example.com',
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saveensalah',
      href: 'https://linkedin.com/in/saveensalah',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/saveensalah',
      href: 'https://github.com/saveensalah',
    },
  ]

  return (
    <section id="contact" className="section-padding relative">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal>

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold mb-4">

              Let&apos;s{' '}

              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">

                Connect

              </span>

            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />

            <p className="mt-6 text-gray-400">
              Have a project in mind or just want to say hello?
            </p>

          </div>

        </ScrollReveal>


        {/* Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {contactInfo.map((info, index) => {

            const Icon = info.icon

            return (

              <ScrollReveal key={index} delay={index * 0.1}>

                <motion.a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-lg text-center"
                >

                  <Icon
                    size={24}
                    className="mx-auto mb-3 text-neon-blue"
                  />

                  <h3 className="font-semibold mb-1">
                    {info.label}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {info.value}
                  </p>

                </motion.a>

              </ScrollReveal>

            )

          })}

        </div>


        {/* Contact Form */}
        <ScrollReveal>

          <div className="glass p-8 rounded-lg max-w-2xl mx-auto">

            <h3 className="text-2xl font-bold mb-6 text-center">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className="w-full p-3 rounded bg-white/5 border border-white/10"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className="w-full p-3 rounded bg-white/5 border border-white/10"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                className="w-full p-3 rounded bg-white/5 border border-white/10"
              />

              {error && (
                <div className="text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded font-semibold"
              >

                {loading
                  ? 'Sending...'
                  : submitted
                    ? '✓ Message Sent'
                    : 'Send Message'}

              </button>

            </form>

          </div>

        </ScrollReveal>

      </div>

    </section>
  )
}
