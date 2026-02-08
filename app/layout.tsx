import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'CÉLESTE - Artistic Tech Solutions',
  description: 'Where creativity meets technology. CÉLESTE transforms ideas into digital art.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${manrope.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
