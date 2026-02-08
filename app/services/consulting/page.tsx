'use client'

import React from 'react'
import { Lightbulb, Compass, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function ConsultingPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/services" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Services
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Accompagnement Conseil</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Partenaires de Votre Vision. La technologie n'est rien sans la stratégie pour la piloter.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Strategic+Consulting" className="w-full h-full object-cover" alt="Consulting" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Stratégie IT</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Compass className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Audit de Processus</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Analyse 360° de votre organisation pour détecter les goulots d'étranglement.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <ShieldCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">DSI Externalisé</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Nous pilotons votre stratégie IT pour vous laisser vous concentrer sur votre métier.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Transformation</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Lightbulb className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Conduite du Changement</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Formation et coaching de vos équipes pour assurer l'adoption des nouveaux outils.</p>
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
