'use client'

import React from 'react'
import { Sofa, Truck, PackageCheck, ScanBarcode, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function FurniturePage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/retail" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Retail
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Furniture Store System</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Design Logistique. Optimisez vos opérations pour gérer des articles volumineux et des rotations rapides.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Furniture+Store+System" className="w-full h-full object-cover" alt="Furniture System" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Vente Omnicanal</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Sofa className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Click & Collect</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gestion des commandes web avec options de retrait en magasin ou livraison à domicile.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <ScanBarcode className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">POS Rapide</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Interface de caisse performante supportant scanners et balances intégrées.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Logistique Stock</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <PackageCheck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Inventaire Précis</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi par Lots et Numéros de Série, essentiel pour la garantie et le SAV.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Truck className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Mobilité Entrepôt</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Utilisation de scanners mobiles pour les réceptions et inventaires.</p>
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
