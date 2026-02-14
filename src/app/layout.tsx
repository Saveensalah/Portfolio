import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import AnimatedBackground from '@/components/AnimatedBackground'
import MouseGlowField from '@/components/MouseGlowField'
import NoiseOverlay from '@/components/NoiseOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saveen Salah - Full Stack Developer & DevOps Enthusiast',
  description: 'Premium portfolio of Saveen Salah - React Specialist, Full Stack Web Developer, and WordPress Expert',
  keywords: 'React, Web Developer, DevOps, WordPress, Full Stack, Portfolio',
  openGraph: {
    title: 'Saveen Salah - Full Stack Developer & DevOps Enthusiast',
    description: 'Explore my premium portfolio featuring React apps, DevOps projects, and WordPress solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`${inter.className} bg-dark-bg text-white overflow-x-hidden relative`}>
        <AnimatedBackground />
        <MouseGlowField />
        <NoiseOverlay />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
