'use client'

import React from 'react'
import { BedDouble, CalendarCheck, UtensilsCrossed, ConciergeBell, CheckCircle, Wifi, Globe, Shield, Smartphone, ArrowRight, LayoutDashboard, Users, CreditCard, BarChart3, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HospitalityPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/60">
                        Next.js Hospitality Suite
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste Hôtellerie</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        Une plateforme de gestion hôtelière moderne, ultra-rapide et optimisée pour le SEO.
                        L'alliance parfaite entre design d'exception et performance technologique.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100 border border-[#1B3C53]/10">
                    <img src="/celeste-hotel.png" alt="Interface Céleste Hôtellerie Moderne" />
                </div>
            </section>

            {/* TECH & PERFORMANCE SECTION */}
            <section className="py-20 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">L'Ère du "Headless" <br />et de la Performance</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Oubliez les solutions lourdes et lentes. Céleste Hôtellerie est bâti sur Next.js pour offrir une rapidité fulgurante,
                            un référencement naturel (SEO) optimal et une expérience utilisateur fluide sur tous les appareils.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Smartphone className="w-5 h-5 text-white/60" />
                                    <span className="text-sm font-bold tracking-wide uppercase">Mobile First</span>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed">Interface responsive native pour clients et staff.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Globe className="w-5 h-5 text-white/60" />
                                    <span className="text-sm font-bold tracking-wide uppercase">SEO Ready</span>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed">Structure optimisée pour Google et les moteurs de recherche.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Réservation Directe
                                </h4>
                                <p className="text-sm text-white/60">Commission 0%. Moteur de réservation intégré à votre image de marque.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Sync Temps Réel
                                </h4>
                                <p className="text-sm text-white/60">Disponibilités mises à jour instantanément sur tous les canaux.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Analytics Avancés
                                </h4>
                                <p className="text-sm text-white/60">Tableaux de bord financiers et opérationnels précis.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Sécurité Max
                                </h4>
                                <p className="text-sm text-white/60">Données clients chiffrées et conformes RGPD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPREHENSIVE FEATURES */}
            <section className="py-32 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B3C53]/40 mb-3 block">Fonctionnalités Clés</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-6">Gestion Hôtelière 360°</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-[#1B3C53]/60 font-light text-lg">
                            Une suite complète d'applications interconnectées pour gérer chaque aspect de votre établissement,
                            du check-in au housekeeping, en passant par la restauration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Booking & Front Desk */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <CalendarCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Réception & Réservations</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Gérez les check-in/out en un éclair. Vue calendrier intuitive pour visualiser les disponibilités,
                                gérer les surclassements et éviter les surréservations.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Prise de réservation rapide</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Gestion des groupes</li>
                            </ul>
                        </div>

                        {/* Housekeeping */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <BedDouble className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Housekeeping Connecté</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Synchronisation temps réel entre la réception et les étages.
                                Vos équipes de ménage voient les chambres à faire sur tablette et notifient quand c'est prêt.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Statut des chambres Live</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Planification des tâches</li>
                            </ul>
                        </div>

                        {/* CRM & Client Identity */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">CRM & Identité Client</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Centralisez les données clients pour un service personnalisé.
                                Historique des séjours, préférences, scan de pièces d'identité sécurisé.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Profils clients enrichis</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Programmes de fidélité</li>
                            </ul>
                        </div>

                        {/* Billing & Invoicing */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Facturation Unifiée</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Une facture unique pour tout le séjour. Intègre automatiquement les nuitées,
                                la taxe de séjour, et les consommations (bar, spa, restaurant).
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Calcul auto taxe de séjour</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Split de facture facile</li>
                            </ul>
                        </div>

                        {/* Restaurant & POS */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <UtensilsCrossed className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Restaurant & Bar (POS)</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Chargez les consommations directement sur la chambre du client depuis le point de vente.
                                Gestion des tables, des commandes cuisine et des stocks.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Charge en chambre (Room Charge)</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Menu digital QR Code</li>
                            </ul>
                        </div>

                        {/* Communication */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Communication Interne</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Fini les talkie-walkies bruyants. Un système de chat intégré pour coordonner la maintenance,
                                la réception et le management en toute discrétion.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Notes internes partagées</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Alertes maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO & MARKETING SECTION */}
            <section className="py-24 bg-white border-t border-[#1B3C53]/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1B3C53]/5 rounded-full blur-3xl" />
                        <div className="relative z-10 p-8 bg-[#F9F9F7] border border-[#1B3C53]/10">
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Plus de Réservations Directes</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1B3C53] text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <p className="text-[#1B3C53]/70 text-sm">Votre site web est votre meilleure vitrine. Avec notre technologie Next.js, il charge instantanément.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1B3C53] text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <p className="text-[#1B3C53]/70 text-sm">Optimisation SEO native pour apparaître en premier sur Google, devant les OTAs.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1B3C53] text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <p className="text-[#1B3C53]/70 text-sm">Expérience de réservation fluide sur mobile pour maximiser la conversion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-xs font-bold tracking-widest uppercase text-[#1B3C53]/40 mb-2 block">Marketing & Ventes</span>
                        <h2 className="text-4xl font-serif text-[#1B3C53] mb-6">Reprenez le contrôle de votre distribution</h2>
                        <p className="text-[#1B3C53]/60 text-lg font-light leading-relaxed mb-8">
                            Ne laissez plus les commissions grignoter votre marge. Céleste vous donne les outils
                            pour attirer et fidéliser vos clients en direct, avec une image de marque forte et cohérente.
                        </p>
                        <Button asChild className="rounded-none px-8 py-6 bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 group">
                            <Link href="/contact" className="flex items-center gap-2">
                                Audit Gratuit de votre Site
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-[#1B3C53] text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Prêt à moderniser votre hôtel ?</h2>
                    <p className="text-white/60 mb-10 text-lg font-light">
                        Rejoignez les hôteliers visionnaires qui ont choisi Céleste pour leur transformation numérique.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest bg-white text-[#1B3C53] hover:bg-gray-100">
                            <Link href="/contact">Demander une démo</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-none px-10 py-7 text-sm uppercase tracking-widest border-white/20 text-white hover:bg-white/10 hover:text-white">
                            <Link href="/contact">Contacter l'équipe</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
