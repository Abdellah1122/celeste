'use client'

import React from 'react'
import { BedDouble, CalendarCheck, UtensilsCrossed, ConciergeBell, CheckCircle, Wifi, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HospitalityPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40">
                        Gestion Hôtelière
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste Hôtellerie</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        L'art de recevoir, sublimé par la technologie. Une solution PMS tout-en-un pour hôtels de luxe, resorts et chaînes hôtelières.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100">
                    <img src="/celeste-hotel.png" className="w-full h-full object-cover" alt="Céleste Hotel Dashboard" />
                </div>
            </section>

            {/* ODOO POWERED SECTION */}
            <section className="py-16 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Propulsé par Odoo</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Notre PMS (Property Management System) est nativement intégré à l'écosystème Odoo. Profitez d'une synchronisation parfaite entre réservations, facturation, stock et CRM.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Channel Manager</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Données Sécurisées</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md p-8 border border-white/10 bg-white/5 rounded-none backdrop-blur-sm">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Réservations centralisées
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Check-in/Check-out rapide
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Facturation unifiée
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Gestion du Housekeeping
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
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-4">L'expérience Hôtelière 360°</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {/* Feature 1 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <BedDouble className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Gestion des Chambres</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Vue planning intuitive pour gérer l'occupation. Assignation intelligente des chambres, gestion des statuts (propre, à nettoyer, hors service) en temps réel.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <CalendarCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Moteur de Réservation</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Intégrez un moteur de réservation direct sur votre site web. Zéro commission, synchronisation instantanée avec Booking, Expedia et Airbnb.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <ConciergeBell className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Expérience Client</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                CRM intégré pour connaître vos clients sur le bout des doigts. Historique des séjours, préférences alimentaires, et communication personnalisée.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <UtensilsCrossed className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Facturation Intégrée</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Une seule facture pour tout le séjour : nuits, restaurant, spa et extras. Génération automatique et envoi par email.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Housekeeping Mobile</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Application mobile pour les équipes de ménage. Mise à jour instantanée du statut des chambres dès qu'elles sont prêtes.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Rapports & Audit</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Suivez vos indicateurs clés (ADR, RevPAR, Taux d'occupation) en temps réel. Rapports financiers automatisés pour la comptabilité.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-8">Élevez vos standards d'accueil</h2>
                    <p className="text-[#1B3C53]/60 mb-10 text-lg">
                        Offrez à vos clients une expérience sans friction et à vos équipes un outil performant.
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
