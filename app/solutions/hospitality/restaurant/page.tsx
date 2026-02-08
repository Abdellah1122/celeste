'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Utensils, ChefHat, QrCode, ClipboardList, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function RestaurantPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/hospitality" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Hospitality
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Système de Gestion de Restaurant</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        De la Cuisine à la Table. Rationalisez le "coup de feu" avec une intégration POS & KDS native.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="\restohero.png" className="w-full h-full object-cover" alt="Restaurant Interface" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Salle & Service</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Utensils className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">POS Tactile Rapide</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gestion graphique du plan de salle, prise de commande intuitive et partage d'addition (Bill Split).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <QrCode className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Menu Digital</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Présentation de la carte via QR Code ou tablettes pour une expérience moderne.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Cuisine & Stocks</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <ChefHat className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Kitchen Display (KDS)</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Écrans remplaçant les tickets papier, affichant les ordres par poste avec gestion des délais.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <ClipboardList className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Nomenclature (BoM)</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Déduction automatique des stocks à chaque vente (ex: 1 Burger = -1 Pain, -150g Viande).</p>
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
