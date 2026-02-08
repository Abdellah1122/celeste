'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function RetailHubPage() {
    const projects = [
        {
            title: "Cosmetics Store",
            desc: "L'Éclat de la Beauté. Gestion des teintes, eCommerce de marque et stocks sensibles.",
            link: "/solutions/retail/cosmetics",
            image: "https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Cosmetics+Preview"
        },
        {
            title: "Furniture Store",
            desc: "Design Logistique. Click & Collect, articles volumineux et inventaire précis.",
            link: "/solutions/retail/furniture",
            image: "https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Furniture+Preview"
        },
        {
            title: "Auto Spare Parts",
            desc: "Mécanique de Précision. Compatibilité véhicules, OEM/EAN et portail B2B.",
            link: "/solutions/retail/automotive",
            image: "https://placehold.co/1920x1080/F5F5F0/1B3C53/png?text=Auto+Parts+Preview"
        },
        {
            title: "Pharmacy Retail",
            desc: "Santé & Conformité. Gestion des lots, alertes péremption et historique légal.",
            link: "/solutions/retail/pharmacy",
            image: "https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Pharmacy+Preview"
        }
    ]

    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Hub */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-6 block">
                        Solutions  Retail
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif text-[#1B3C53] mb-8 leading-[0.9]">
                        Retail &amp; <br /><span className="italic opacity-60">Distribution</span>
                    </h1>
                    <p className="text-xl text-[#1B3C53]/60 max-w-2xl font-light leading-relaxed mb-12">
                        Une suite unifiée pour maîtriser la complexité du commerce moderne. Pharma, Cosmétique, Luxe et Mobilier.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 md:px-12 pb-32 max-w-[1920px] mx-auto">
                <div className="grid md:grid-cols-2 gap-px bg-[#1B3C53]/10 border border-[#1B3C53]/10">
                    {projects.map((project, i) => (
                        <Link key={i} href={project.link} className="group block bg-white hover:bg-[#F5F5F0] transition-colors relative overflow-hidden h-[500px] flex flex-col">
                            <div className="p-12 flex-1 relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-xs font-bold tracking-widest uppercase border border-[#1B3C53] px-3 py-1">0{i + 1}</span>
                                    <ArrowUpRight className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h2 className="text-4xl font-serif text-[#1B3C53] mb-4 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h2>
                                <p className="text-[#1B3C53]/60 font-light leading-relaxed max-w-md">{project.desc}</p>
                            </div>

                            {/* Image Reveal on Hover */}
                            <div className="absolute inset-0 top-[60%] opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-700 ease-out z-0">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    )
}
