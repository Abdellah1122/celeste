import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Céleste RH',
    category: 'Système RH Stratégique',
    image: '/celest-rh.png',
    colSpan: 'md:col-span-3',
    aspect: 'aspect-[16/9]',
    link: '/solutions/rh-solution'
  },
  {
    title: 'Céleste Hôtellerie',
    category: 'Gestion Hôtelière Avancée',
    image: '/celeste-hotel.png',
    colSpan: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
    link: '/solutions/hospitality'
  },
  {
    title: 'Céleste Caisse',
    category: 'Point de Vente Retail',
    image: '/celest-retail.png',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-[3/4]',
    link: '/solutions/retail-pos'
  },
  {
    title: 'Céleste Salon',
    category: 'Spa & Salon de Beauté',
    image: '/salon11.png',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-[3/4]',
    link: '/solutions/beauty-spa'
  },
  {
    title: 'Céleste Restauration',
    category: 'Restaurants & Bars',
    image: '/celest-resto.png',
    colSpan: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
    link: '/solutions/restaurant'
  },]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[#F5F5F0] text-[#1B3C53]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] opacity-50 mb-4 block">CÉLESTE</span>
            <h2 className="text-6xl md:text-7xl font-serif">Nos Solutions</h2>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group relative cursor-pointer ${project.colSpan}`}>
              <div className={`relative w-full ${project.aspect} overflow-hidden bg-white`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1B3C53]/0 group-hover:bg-[#1B3C53]/10 transition-colors duration-500" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                  <span className="text-xs uppercase tracking-widest opacity-50">{project.category}</span>
                </div>
                <a href={project.link} ><ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /></a>

              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
