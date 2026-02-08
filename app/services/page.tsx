'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesHubPage() {
    const projects = [
        {
            title: "Développement Spécifique",
            desc: "L'Excellence du Code. Web Apps, Mobile (Flutter) et Modules Odoo custom.",
            link: "/services/custom-development",
            image: "https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Dev+Preview"
        },
        {
            title: "Digital Marketing",
            desc: "L'Art de la Visibilité. SEO/SEA, Identité Visuelle et Growth Hacking.",
            link: "/services/digital-marketing",
            image: "https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Marketing+Preview"
        },
        {
            title: "Accompagnement Conseil",
            desc: "Stratégie IT & Transformation. Audit, DSI externalisé et Conduite du Changement.",
            link: "/services/consulting",
            image: "https://placehold.co/1920x1080/F5F5F0/1B3C53/png?text=Consulting+Preview"
        }
    ]

    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Hub */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-6 block">
                        Céleste  Services
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif text-[#1B3C53] mb-8 leading-[0.9]">
                        Ingénierie &amp; <br /><span className="italic opacity-60">Services</span>
                    </h1>
                    <p className="text-xl text-[#1B3C53]/60 max-w-2xl font-light leading-relaxed mb-12">
                        Au-delà des produits, une expertise technique et stratégique pour propulser votre croissance.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 md:px-12 pb-32 max-w-[1920px] mx-auto">
                <div className="grid md:grid-cols-3 gap-px bg-[#1B3C53]/10 border border-[#1B3C53]/10">
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
