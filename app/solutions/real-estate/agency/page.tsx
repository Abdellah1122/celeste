'use client'

import React from 'react'
import { Building2, Search, Key, UserPlus, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function RealEstateAgencyPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/real-estate" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Real Estate
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Real Estate Agency System</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Agence Immobilière 4.0. Rationalisez le cycle de vie complet de la transaction, du lead à la signature.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Real+Estate+CRM" className="w-full h-full object-cover" alt="Real Estate Agency" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Marketing & CRM</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <UserPlus className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">CRM Pipeline</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi visuel des opportunités d'achat et de vente avec assignation automatique des leads.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Search className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Matchmaking IA</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Algorithme liant automatiquement les acheteurs potentiels aux biens selon leurs critères.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Opérations Agence</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Building2 className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Gestion des Mandats</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Base de données centralisée pour organiser le portefeuille et statuts de disponibilité.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Key className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Signature Électronique</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gestion dématérialisée des offres et compromis avec signatures digitales sécurisées.</p>
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
