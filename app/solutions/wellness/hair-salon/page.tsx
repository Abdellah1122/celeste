'use client'

import React from 'react'
import { Scissors, Calendar, UserCheck, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function HairSalonPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/wellness" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Wellness
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Hair Salon Management</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Art du Style. Une solution élégante qui élimine le désordre administratif pour laisser place à la créativité.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Salon+Management+System" className="w-full h-full object-cover" alt="Hair Salon System" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Expérience Salon</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Calendar className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Booking Intelligent</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Réservation en ligne par coiffeur spécifique, synchronisée en temps réel.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Star className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Portfolio Digital</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Site vitrine intégré pour présenter vos coupes et attirer une nouvelle clientèle.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Gestion Technique</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Scissors className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Optimisation Créneaux</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Division automatique des RDV (ex: Coupe + Couleur) pour libérer le coiffeur pendant la pose.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <UserCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Planning Stylistes</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi des heures, des commissions sur ventes et de la performance par employé.</p>
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
