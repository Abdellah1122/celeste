'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Beer, Smartphone, Archive, Wrench, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function BarsPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/hospitality" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Hospitality
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Gestion de Bars & Pubs</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Vitesse et Mixologie. Un module taillé pour la rapidité du service au comptoir.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Bar+Management+System" className="w-full h-full object-cover grayscale-[10%]" alt="Bar Management" />
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Service Rapide</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Smartphone className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Mobilité Totale</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Les serveurs prennent les commandes sur smartphone pour ne jamais quitter la salle des yeux.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Clock className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Pointage RH</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Enregistrement simplifié du temps de travail des barmans et extras pour une paie précise.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Gestion des Stocks</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Beer className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Inventaire Liquide</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gestion millimétrée des stocks de bouteilles (au centilitre), fûts et ingrédients de cocktails.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Wrench className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Maintenance Préventive</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi automatisé des tâches de nettoyage et maintenance des machines (Café, Tireuse à bière).</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Demo Video */}
            <div className="bg-[#1B3C53] py-24">
                <DemoVideo />
            </div>
        </div>
    )
}
