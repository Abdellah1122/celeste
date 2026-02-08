'use client'

import React from 'react'
import { Code2, Smartphone, Database, Layers, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function CustomDevPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/services" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Services
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Développement Spécifique</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Excellence du Code. Architecture micro-services, applications mobiles et solutions sur mesure.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Code+Architecture" className="w-full h-full object-cover" alt="Custom Dev" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Web & Mobile</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Code2 className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">High-Performance Web</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Sites ultra-rapides en Next.js (React) et Backends robustes (Spring Boot, .NET).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Smartphone className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Mobile Cross-Platform</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Applications iOS et Android natives générées via Flutter pour un déploiement rapide.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Expertise ERP</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Layers className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Modules Sur Mesure</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Développement Python spécifique pour étendre les fonctionnalités natives d'Odoo.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Database className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">API Intégration</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Connecteurs pour lier Odoo à vos autres outils (Banques, Logistique, IA).</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="bg-[#1B3C53] py-24">
                <DemoVideo />
            </div>
        </div>
    )
}
