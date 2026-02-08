'use client'

import React from 'react'
import { Pill, ShieldAlert, History, FileCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function PharmacyPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/retail" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Retail
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Pharmacy Retail Management</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Santé & Conformité. Système spécialisé pour la gestion rigoureuse de l'officine et la sécurité sanitaire.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Pharmacy+Management+System" className="w-full h-full object-cover" alt="Pharmacy System" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Gestion des Lots</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Pill className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Suivi par Lots</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi individuel de chaque boîte de médicament par numéro de lot pour la traçabilité.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <ShieldAlert className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Alerte Péremption</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Notifications automatiques avant les dates d'expiration pour gérer les retraits.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Conformité</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <History className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Historique Mouvements</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Traçabilité complète des entrées et sorties pour répondre aux exigences réglementaires.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <FileCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">GED Santé</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Archivage sécurisé des ordonnances et documents légaux.</p>
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
