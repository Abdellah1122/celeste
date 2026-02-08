'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Key, RefreshCw, MessageSquare, BedDouble, UserCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function HMSPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/hospitality" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Hospitality
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Système de Gestion Hôtelière (HMS)</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Architecture du Séjour Parfait. Une solution centrale qui orchestre chaque aspect de l'expérience invité.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="\hotelhero.png" className="w-full h-full object-cover" alt="HMS Interface" />
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">

                    {/* Front Desk */}
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Expérience Client (Front Desk)</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <BedDouble className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Centralisation PMS</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Pilotage unifié du planning, des check-ins et des check-outs depuis une interface ergonomique.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <UserCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Historique Client</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Enregistrement sécurisé des préférences et identités (Fiche Police) pour un service personnalisé.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Back Office */}
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Opérations (Back Office)</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Calendar className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Synchronisation Gantt</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Visualisation en temps réel des interactions entre les réservations et les plannings de maintenance.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <MessageSquare className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Communication Staff</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Canal de discussion instantané pour relayer les demandes VIP ou urgences techniques.</p>
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
