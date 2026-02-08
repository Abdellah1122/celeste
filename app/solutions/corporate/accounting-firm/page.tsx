'use client'

import React from 'react'
import { Briefcase, FileText, Lock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function AccountingFirmPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/corporate" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Corporate
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Accounting Firm System</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Expertise Augmentée. Une plateforme unifiée pour gérer le cycle de vie complet d'un cabinet comptable.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Fiduciaire+Dashboard" className="w-full h-full object-cover" alt="Accounting Firm" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Conformité & KYC</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Lock className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Identité Sécurisée</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Stockage crypté des pièces d'identité et gestion AML (Anti-Blanchiment).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Users className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Bénéficiaires Effectifs</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Visualisation graphique des structures de détention (UBO).</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Productivité</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <FileText className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Bureau Zéro Papier</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Collecte sécurisée via portail client et signature électronique intégrée.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Briefcase className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Multi-Instance</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Accès direct aux comptabilités de vos clients depuis un tableau de bord unique.</p>
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
