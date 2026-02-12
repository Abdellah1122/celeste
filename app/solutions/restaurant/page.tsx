'use client'

import React from 'react'
import { Utensils, ChefHat, QrCode, ClipboardList, Smartphone, Truck, Globe, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RestaurantPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40">
                        Restauration & F&B
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste Restauration</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Le goût de la perfection. Un système de gestion complet pour restaurants, bars et chaînes de restauration, du plan de salle à la cuisine.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100">
                    <img src="/celest-resto.png" alt="Céleste Restaurant POS" />
                </div>
            </section>

            {/* ODOO POWERED SECTION */}
            <section className="py-16 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Propulsé par Odoo</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Gérez vos coûts au centime près. Notre intégration Odoo lie chaque plat vendu à votre inventaire d'ingrédients, calculant vos marges en temps réel.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Multi-établissements</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">HACCP & Traçabilité</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md p-8 border border-white/10 bg-white/5 rounded-none backdrop-blur-sm">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Plan de salle interactif
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Écran Cuisine (KDS)
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Menu QR Code & Commande à table
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Gestion des fiches techniques
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
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-4">Service 5 Étoiles</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {/* Feature 1 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Prise de Commande Rapide</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Interface tactile intuitive pour les serveurs. Envoi direct des commandes en cuisine (bar, chaud, froid) avec gestion des suites et réclames.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <ChefHat className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Écran Cuisine (KDS)</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Remplacez les tickets papier par des écrans intelligents. Suivi du temps de préparation, alertes retard et coordination parfaite entre les parties.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <QrCode className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Scan & Command</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Permettez à vos clients de commander et payer directement depuis leur table via QR Code. Idéal pour les terrasses ou le fast-casual.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <ClipboardList className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Gestion des Stocks Avancée</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Déstockage automatique des ingrédients à chaque vente. Inventaires simplifiés par zone de stockage (cave, frigo, économat).
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Click & Collect / Livraison</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Centralisez toutes vos commandes (Web, UberEats, Deliveroo) sur un seul écran. Fini les tablettes multiples au comptoir.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Truck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Gestion Fournisseurs</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Comparaison des prix fournisseurs, commandes de réapprovisionnement automatiques et suivi des livraisons. Contrôlez vos coûts matière.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-[#1B3C53] text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Passez à la vitesse supérieure</h2>
                    <p className="text-white/60 mb-10 text-lg font-light">
                        Optimisez votre service et maximisez vos marges avec la solution Céleste Restauration.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest bg-white text-[#1B3C53] hover:bg-gray-100">
                            <Link href="/contact">Demander une démo</Link>
                        </Button>
                        <Button asChild size="lg" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest bg-white text-[#1B3C53] hover:bg-gray-100">
                            <Link href="/contact">Nous Contacter</Link>
                        </Button>
                    </div>
                </div>
            </section >
        </div >
    )
}
