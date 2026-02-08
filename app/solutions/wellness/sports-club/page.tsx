'use client'

import React from 'react'
import { Trophy, Coffee, CalendarRange, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function SportsClubPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/wellness" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Wellness
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Sports Club System</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Performance & Communauté. Un système unifié pour gérer location de terrains, boutique et événements.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Sports+Club+Management" className="w-full h-full object-cover" alt="Sports Club System" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Installations & Ventes</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <CalendarRange className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Réservation Terrains</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Membres et coachs réservent en ligne 24/7, réduisant la charge de l'accueil.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Coffee className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Cafétéria & Pro Shop</h4>
                                    <p className="text-sm text-[#1B3C53]/70">POS unifié pour la vente rapide de boissons, snacks et équipements sportifs.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Vie du Club</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Trophy className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Gestion Tournois</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Optimisation de l'usage des installations et du staff lors des événements compétitifs.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Users className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">CRM Membres</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi des adhésions, des prospects et des sponsorings d'entreprise.</p>
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
