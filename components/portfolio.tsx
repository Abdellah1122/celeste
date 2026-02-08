import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Maison Archi',
    category: 'Architecture',
    image: 'https://placehold.co/800x1200/F5F5F0/1B3C53/png?text=Architecture+Project',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-[3/4]'
  },
  {
    title: 'Galerie Noire',
    category: 'Art Digital',
    image: 'https://placehold.co/1200x800/E3E3E3/234C6A/png?text=Digital+Art+Gallery',
    colSpan: 'md:col-span-2',
    aspect: 'aspect-[16/9]'
  },
  {
    title: 'Tech Future',
    category: 'Innovation',
    image: 'https://placehold.co/1000x1000/FFFFFF/1B3C53/png?text=Tech+Innovation',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-square'
  },
  {
    title: 'Luxe & Co',
    category: 'Retail',
    image: 'https://placehold.co/800x1200/F0F0F0/1B3C53/png?text=Luxury+Retail',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-[3/4]'
  },
  {
    title: 'Studio Blanc',
    category: 'Branding',
    image: 'https://placehold.co/1000x1000/F5F5F0/1B3C53/png?text=Studio+Branding',
    colSpan: 'md:col-span-1',
    aspect: 'aspect-square'
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[#F5F5F0] text-[#1B3C53]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] opacity-50 mb-4 block">Sélection</span>
            <h2 className="text-6xl md:text-7xl font-serif">Projets Récents</h2>
          </div>
          <Link href="/solutions/retail" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">
            Voir tout le portfolio <ArrowRight className="w-4 h-4" />
          </Link>
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
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:hidden text-center">
          <Link href="/solutions/retail" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-[#1B3C53] pb-1">
            Voir tout le portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
