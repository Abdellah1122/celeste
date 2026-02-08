'use client'

import React from 'react'
import { Landmark, FileText, Wrench, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function PropertyManagementPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/real-estate" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Real Estate
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Property Management (Syndic)</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        La Pierre Angulaire de la Gestion. Rationalisez la gestion de portefeuilles locatifs et de syndics.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Property+Management+Dashboard" className="w-full h-full object-cover" alt="Syndic Management" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Gestion Financière</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <FileText className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Quittancement Auto</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Automatisation de la collecte des loyers et charges avec cycles flexibles.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Landmark className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Cash Flow</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Tableau de bord de suivi des encaissements et relances automatiques.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Relation Technique</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Wrench className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Maintenance</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Dispatching des équipes techniques et suivi des interventions sur le parc immobilier.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Users className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Portail Propriétaire</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Accès en ligne pour les bailleurs (Compte Rendu de Gestion, Taux d'occupation).</p>
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
