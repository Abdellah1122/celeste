'use client'

import React from 'react'
import { HardHat, Ruler, Truck, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function ConstructionPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/real-estate" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Real Estate
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Construction Management (BTP)</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Bâtir sur des Fondations Solides. Gérez le cycle de vie complet du chantier, du devis à la livraison.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Construction+Project+Management" className="w-full h-full object-cover" alt="Construction BTP" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Chantier & Terrain</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Ruler className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Suivi de Chantier</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Organisation en étapes claires ("Fondations", "Gros Œuvre") avec délais précis (Gantt).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Clock className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Feuilles de Temps Mobiles</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Les ouvriers enregistrent leurs heures par tâche directement sur site.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Gestion & Finances</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Truck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Approvisionnement</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Automatisation des commandes de matériaux pour assurer la livraison "Just-in-Time".</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <HardHat className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Facturation Avancement</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gestion des situations de travaux (DGD), retenues de garantie et acomptes.</p>
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
