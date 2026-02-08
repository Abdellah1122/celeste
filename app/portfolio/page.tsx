'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CATEGORIES = ["Tous", "Architecture", "Digital", "Branding", "Retail"]

const PROJECTS = [
    {
        id: 1,
        title: 'Maison Archi',
        category: 'Architecture',
        image: 'https://placehold.co/800x1200/F5F5F0/1B3C53/png?text=Architecture+1',
        aspect: 'aspect-[3/4]',
        colSpan: 'md:col-span-1'
    },
    {
        id: 2,
        title: 'Galerie Noire',
        category: 'Digital',
        image: 'https://placehold.co/1200x800/E3E3E3/234C6A/png?text=Digital+Art',
        aspect: 'aspect-[16/9]',
        colSpan: 'md:col-span-2'
    },
    {
        id: 3,
        title: 'Tech Future',
        category: 'Branding',
        image: 'https://placehold.co/1000x1000/FFFFFF/1B3C53/png?text=Tech+Branding',
        aspect: 'aspect-square',
        colSpan: 'md:col-span-1'
    },
    {
        id: 4,
        title: 'Luxe & Co',
        category: 'Retail',
        image: 'https://placehold.co/800x1200/F0F0F0/1B3C53/png?text=Luxury+Retail',
        aspect: 'aspect-[3/4]',
        colSpan: 'md:col-span-1'
    },
    {
        id: 5,
        title: 'Studio Blanc',
        category: 'Branding',
        image: 'https://placehold.co/1000x1000/F5F5F0/1B3C53/png?text=Studio+Identity',
        aspect: 'aspect-square',
        colSpan: 'md:col-span-1'
    },
    {
        id: 6,
        title: 'Eco Tower',
        category: 'Architecture',
        image: 'https://placehold.co/800x1200/E8E8E8/1B3C53/png?text=Eco+Tower',
        aspect: 'aspect-[3/4]',
        colSpan: 'md:col-span-1'
    },
    {
        id: 7,
        title: 'App Flow',
        category: 'Digital',
        image: 'https://placehold.co/1600x900/FFFFFF/234C6A/png?text=App+Interface',
        aspect: 'aspect-[16/9]',
        colSpan: 'md:col-span-2'
    }
]

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("Tous")

    const filteredProjects = activeCategory === "Tous"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory)

    return (
        <div className="bg-[#F5F5F0] min-h-screen text-[#1B3C53] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1B3C53]/10 pb-8">
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] opacity-50 mb-4 block">Portfolio</span>
                        <h1 className="text-6xl md:text-8xl font-serif leading-[0.9]">
                            Nos <br /> <span className="italic opacity-60">Réalisations</span>
                        </h1>
                    </div>
                    <p className="max-w-xs text-sm opacity-60 text-right mt-8 md:mt-0 font-light leading-relaxed">
                        Une sélection de projets où l'esthétique rencontre la performance technique.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-xs uppercase tracking-widest px-6 py-3 rounded-none border transition-all ${activeCategory === cat
                                    ? 'bg-[#1B3C53] text-white border-[#1B3C53]'
                                    : 'bg-transparent text-[#1B3C53] border-[#1B3C53]/20 hover:border-[#1B3C53]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Link
                            href={`/portfolio/${project.id}`}
                            key={project.id}
                            className={`group relative block cursor-pointer ${project.colSpan} animate-in fade-in zoom-in-95 duration-500`}
                        >
                            <div className={`relative w-full ${project.aspect} overflow-hidden bg-white`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#1B3C53]/0 group-hover:bg-[#1B3C53]/10 transition-colors duration-500" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white text-[#1B3C53] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-end">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-serif">{project.title}</h3>
                                    <span className="text-xs uppercase tracking-widest opacity-50 block">{project.category}</span>
                                </div>
                                <span className="text-xs font-mono opacity-30">0{project.id}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <h3 className="text-3xl font-serif mb-8">Un projet en tête ?</h3>
                    <Button asChild size="lg" className="rounded-none bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 px-12 py-6 text-xs uppercase tracking-widest">
                        <Link href="/contact">Discutons-en</Link>
                    </Button>
                </div>

            </div>
        </div>
    )
}
