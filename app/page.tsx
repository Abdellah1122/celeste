'use client'

import { HeroCarousel } from '@/components/hero-carousel'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { CTA } from '@/components/cta'

export default function Page() {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />
      <Services />
      <Portfolio />
      <CTA />
    </div>
  )
}
