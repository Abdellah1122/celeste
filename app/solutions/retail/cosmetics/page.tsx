'use client'

import React from 'react'
import { Sparkles, Palette, Fingerprint, Store, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function CosmeticsPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/retail" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Retail
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Cosmetics Store System</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Éclat de la Beauté. Centralisez la gestion de vos ventes, de vos stocks sensibles et de la fidélité client.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Cosmetics+Retail+System" className="w-full h-full object-cover" alt="Cosmetics Store" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Expérience Boutique</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Palette className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Point de Vente (POS)</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Encaissement fluide avec gestion des teintes et variantes via interface tactile.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Store className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">eCommerce de Marque</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Boutique en ligne synchronisée reflétant l'image de marque pour une expérience omnicanale.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Supply Chain</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Sparkles className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Inventaire Temps Réel</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi précis des stocks cosmétiques (fragiles) et automatisation des alertes de rupture.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Fingerprint className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Gestion Fournisseurs</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Centralisation des achats d'ingrédients, packagings et produits finis.</p>
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
