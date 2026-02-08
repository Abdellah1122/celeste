'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Truck, BoxSelect, FileCheck, Banknote, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function FoodDistributionPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/hospitality" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Hospitality
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Distributeur Agroalimentaire (F&B)</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Logistique et Traçabilité Sanitaire. L'ingrédient essentiel pour les grossistes.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/FFFFFF/png?text=Food+Logistics+System" className="w-full h-full object-cover" alt="Food Distribution" />
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Qualité & Logistique</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <BoxSelect className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Stratégie FEFO</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Application stricte de la règle "First Expired, First Out" pour minimiser les pertes.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <FileCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Traçabilité Totale</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi rigoureux des Numéros de Lots et Dates d'Expiration du fournisseur jusqu'au client.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Truck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Gestion de Flotte</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi des camions de livraison et feuilles de route des chauffeurs.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Commerce B2B</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Banknote className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Tarification Complexe</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Listes de prix dynamiques selon le type de client (Restaurant, Détaillant, Grossiste).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <FileCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Facturation au Réel</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Émission automatique des factures basées sur les quantités réellement livrées.</p>
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
