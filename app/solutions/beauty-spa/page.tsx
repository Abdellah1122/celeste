'use client'

import React from 'react'
import { Scissors, Calendar, Clock, Sparkles, UserCheck, MessageCircle, Globe, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BeautyPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40">
                        Spa & Beauté
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste Salon</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        L'élégance du service. Une suite logicielle dédiée aux salons de coiffure, spas et instituts de beauté pour gérer rendez-vous et clientèle avec raffinement.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100">
                    <img src="/salon11.png" className="w-full h-full object-cover" alt="Céleste Beauty Salon" />
                </div>
            </section>

            {/* ODOO POWERED SECTION */}
            <section className="py-16 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Propulsé par Odoo</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Transformez chaque visite en expérience unique. Grâce à l'intégration Odoo, vos agendas sont liés à votre stock de produits et à votre base CRM pour un suivi client ultra-personnalisé.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Réservation en ligne</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Données Clients</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md p-8 border border-white/10 bg-white/5 rounded-none backdrop-blur-sm">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Agenda intelligent & Rappels SMS
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Gestion des abonnements & cures
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Commissions coiffeurs/esthéticiens
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Vente de produits additionnels
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
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-4">L'excellence du Soin</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {/* Feature 1 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Planning Visuel</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Vue claire par employé ou par cabine. Glisser-déposer intuitif pour modifier les rendez-vous. Gestion des indisponibilités et congés.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Fiches Clients Détaillées</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Historique des coupes, colorations (avec photos), allergies et préférences. Offrez un service sur-mesure dès l'accueil.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Réservation 24/7</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Module de réservation en ligne élégant intégré à votre site. Synchronisation temps réel pour éviter les doubles réservations.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Marketing Automatisé</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Rappels de RDV par SMS pour réduire les no-shows. Campagnes email automatiques pour les anniversaires ou pour relancer les clients inactifs.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Scissors className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Gestion des Stocks Produits</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Suivi précis de la consommation des produits techniques (colorations, shampoings) et des produits vente. Commandes fournisseurs automatiques.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Cartes Cadeaux & Cures</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Gestion simplifiée des bons cadeaux et suivi des forfaits (ex: forfaits 10 séances). Suivi financier précis des prestations pré-payées.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-8">Révélez votre potentiel</h2>
                    <p className="text-[#1B3C53]/60 mb-10 text-lg">
                        Libérez-vous des tâches administratives pour vous concentrer sur votre art et vos clients.
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
