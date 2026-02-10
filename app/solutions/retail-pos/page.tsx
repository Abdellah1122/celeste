'use client'

import React from 'react'
import { ShoppingBag, Barcode, TrendingUp, Layers, CreditCard, RefreshCw, Globe, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RetailPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40">
                        Retail & Commerce
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste Caisse</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Le commerce unifié. Une solution POS omnicanale qui connecte votre boutique physique à votre e-commerce pour une expérience client sans couture.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100">
                    <img src="/celest-retail.png" className="w-full h-full object-cover" alt="Céleste Retail POS" />
                </div>
            </section>

            {/* ODOO POWERED SECTION */}
            <section className="py-16 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Propulsé par Odoo</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Oubliez les ruptures de stock et les données éparpillées. Notre POS est nativement connecté à l'inventaire, à la comptabilité et au e-commerce Odoo.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Omnicanal</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Certifié NF525</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md p-8 border border-white/10 bg-white/5 rounded-none backdrop-blur-sm">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Synchronisation stocks temps réel
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Mode hors ligne supporté
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Compatible tous matériels
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Multi-boutiques & Multi-entrepôts
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILED FEATURES */}
            <section className="py-32 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-4">Performance Retail</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {/* Feature 1 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <ShoppingBag className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Encaissement Ultra-Rapide</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Interface tactile optimisée pour la vitesse. Scannez, encaissez, imprimez ou envoyez le ticket par email en quelques secondes.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Gestion des Stocks</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Inventaire unifié entre magasin et web. Alertes de stock bas, réapprovisionnement automatique et transferts entre boutiques.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Fidélité Client</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Programmes de fidélité omnicanaux. Points, cartes cadeaux, cagnottes et codes promo utilisables en magasin et en ligne.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Paiements Flexibles</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Intégration avec tous les terminaux de paiement modernes. Paiements fractionnés, devises multiples et pourboires gérés nativement.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Barcode className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Etiquetage & Prix</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Impression d'étiquettes code-barres personnalisées. Gestion des promotions saisonnières et des listes de prix multiples.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <RefreshCw className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Click & Collect</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Proposez le retrait en magasin pour les commandes web. Notification client automatique et gestion fluide des retours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-8">Modernisez votre commerce</h2>
                    <p className="text-[#1B3C53]/60 mb-10 text-lg">
                        Optez pour la solution POS la plus complète du marché.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="rounded-none px-8 py-6 text-xs uppercase tracking-widest bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90">
                            <Link href="/contact">Demander une démo</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-none px-8 py-6 text-xs uppercase tracking-widest border-[#1B3C53] text-[#1B3C53] hover:bg-[#1B3C53] hover:text-white">
                            <Link href="/contact">Nous Contacter</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
