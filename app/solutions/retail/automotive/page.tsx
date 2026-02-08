'use client'

import React from 'react'
import { Cog, Car, ShoppingCart, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function AutomotivePage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/retail" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Retail
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Automobile Spare Parts</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Mécanique de Précision. Gérez des milliers de références avec compatibilité multi-marques.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Auto+Parts+System" className="w-full h-full object-cover" alt="Auto Parts System" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Catalogue de Pièces</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Cog className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Inventaire Expert</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi précis des stocks par marque, modèle, année et compatibilité technique.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Car className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Traçabilité OEM/EAN</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Capture des codes constructeurs pour garantir l'origine et la conformité.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">B2B & Opérations</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Users className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Vente Garage (B2B)</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Portail dédié pour les garagistes et flottes avec tarifs contractuels.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <ShoppingCart className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Réassort Auto</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Commandes fournisseurs automatiques pour les consommables à forte rotation.</p>
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
