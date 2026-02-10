import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Direction Artistique',
    description: 'Une identité visuelle qui capture l\'essence de votre marque.',
    href: '/portfolio'
  },
  {
    title: 'Développement Web',
    description: 'Architecture performante et expériences fluides.',
    href: '/technology'
  },
  {
    title: 'Stratégie Digitale',
    description: 'Innovation stratégique pour un impact maximal.',
    href: '/methodology'
  },
  {
    title: 'Innovation Tech',
    description: 'IA et technologies émergentes au service de la croissance.',
    href: '/technology'
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 bg-white text-[#1B3C53]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1B3C53]/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-serif leading-[0.9]">
            Expertise <br /> <span className="italic opacity-60">Céleste</span>
          </h2>
          <p className="max-w-xs text-sm uppercase tracking-widest opacity-60 text-right mt-8 md:mt-0">
            L'excellence à la croisée de l'art et de l'ingénierie.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className="group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-[#1B3C53]/10 hover:bg-[#F5F5F0] transition-colors px-4"
            >
              <span className="text-xs font-mono opacity-40 mb-4 md:mb-0">0{index + 1}</span>
              <h3 className="text-4xl md:text-5xl font-serif group-hover:translate-x-4 transition-transform duration-500">
                {service.title}
              </h3>
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <p className="max-w-md text-lg opacity-60 font-light hidden md:block group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <div className="w-12 h-12 rounded-full border border-[#1B3C53]/20 flex items-center justify-center group-hover:bg-[#1B3C53] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
