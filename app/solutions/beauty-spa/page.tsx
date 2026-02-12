'use client'

import React from 'react'
import { Scissors, Calendar, Clock, Sparkles, UserCheck, MessageCircle, Globe, Shield, CheckCircle, Smartphone, Palette, Star, Zap, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BeautyPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/60">
                        Next.js Salon Suite
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste Salon</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        L'élégance du service, la puissance du code. Une suite digitale haute couture pour salons de coiffure, spas et instituts de beauté exigeants.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100 border border-[#1B3C53]/10">
                    <img src="/celeste-salon.png" alt="Interface Céleste Salon Moderne" />
                </div>
            </section>

            {/* TECH & DESIGN SECTION */}
            <section className="py-20 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">L'Art du Digital <br />L'Expérience Absolue</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Vos clients viennent pour la beauté, offrez-leur une expérience numérique à la hauteur.
                            Céleste Salon combine un design immersif Next.js et une fluidité de réservation inégalée.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Palette className="w-5 h-5 text-white/60" />
                                    <span className="text-sm font-bold tracking-wide uppercase">Design Sur-Mesure</span>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed">Une interface qui reflète l'identité unique de votre salon.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <Zap className="w-5 h-5 text-white/60" />
                                    <span className="text-sm font-bold tracking-wide uppercase">Réservation Éclair</span>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed">Confirmation de rendez-vous en moins de 3 clics, sans rechargement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Agenda Intelligent
                                </h4>
                                <p className="text-sm text-white/60">Optimisation automatique des créneaux pour éviter les trous.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    SMS Automatisés
                                </h4>
                                <p className="text-sm text-white/60">Réduction de 80% des no-shows grâce aux rappels programmés.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Caisse Tactile
                                </h4>
                                <p className="text-sm text-white/60">Encaissement ultra-rapide des prestations et produits.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-serif mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    Stocks Techniques
                                </h4>
                                <p className="text-sm text-white/60">Suivi précis des colorations et produits cabine au gramme près.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILED FEATURES */}
            <section className="py-32 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B3C53]/40 mb-3 block">Fonctionnalités Clés</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-6">L'Excellence du Soin</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-[#1B3C53]/60 font-light text-lg">
                            De la prise de rendez-vous à la fidélisation, chaque interaction est pensée
                            pour sublimer le parcours de vos clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Planning Visuel</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Vue claire par coiffeur ou par cabine. Glisser-déposer intuitif pour modifier les rendez-vous.
                                Gestion des temps de pause et des disponibilités.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Gestion multi-employés</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Synchronisation Google Agenda</li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Fiches Clients Détaillées</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Historique complet des coupes, formules couleurs (avec photos), allergies et préférences.
                                Offrez un accueil VIP dès la porte franchie.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Galerie photos avant/après</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Notes techniques privées</li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Réservation 24/7</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Module de réservation élégant "White Label" intégré directement à votre site.
                                Vos clients réservent même quand vous dormez.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Acomptes en ligne (Stripe)</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Liste d'attente automatique</li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Marketing Automatisé</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Campagnes email pour les anniversaires ou pour relancer les clients inactifs.
                                Demandes d'avis Google automatiques après le rendez-vous.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Scénarios de fidélisation</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Segmentation clients</li>
                            </ul>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <Scissors className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Stocks & Vente Produit</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Gérez vos stocks de revente et vos consommables cabine.
                                Alertes de rupture et commandes fournisseurs simplifiées.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Inventaire avec douchette</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Statistiques de vente</li>
                            </ul>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white p-8 border border-[#1B3C53]/5 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#1B3C53]/5 flex items-center justify-center mb-6 text-[#1B3C53] group-hover:bg-[#1B3C53] group-hover:text-white transition-colors">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif text-[#1B3C53] mb-3">Abos & Cartes Cadeaux</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed mb-4">
                                Gestion simplifiée des bons cadeaux, des cures (ex: 10 séances) et des abonnements mensuels.
                                Prélèvement récurrent automatique.
                            </p>
                            <ul className="text-xs text-[#1B3C53]/50 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Vente en ligne de Gift Card</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1B3C53]" />Suivi du CA différé</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO & MARKETING SECTION */}
            <section className="py-24 bg-white border-t border-[#1B3C53]/5 text-[#1B3C53]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1B3C53]/5 rounded-full blur-3xl" />
                        <div className="relative z-10 p-8 bg-[#F9F9F7] border border-[#1B3C53]/10">
                            <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                                <Star className="w-6 h-6 text-[#1B3C53]" />
                                Avis 5 Étoiles
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1B3C53] text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <p className="text-[#1B3C53]/70 text-sm">Votre réputation en ligne est automatique. Collectez des avis positifs sans effort.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1B3C53] text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <p className="text-[#1B3C53]/70 text-sm">Portfolio Instagram intégré à votre site pour séduire au premier regard.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#1B3C53] text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <p className="text-[#1B3C53]/70 text-sm">SEO local optimisé pour apparaître quand on cherche "Meilleur coiffeur" près de chez vous.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-xs font-bold tracking-widest uppercase text-[#1B3C53]/40 mb-2 block">Croissance & Image</span>
                        <h2 className="text-4xl font-serif mb-6">Votre vitrine digitale,<br />aussi soignée que votre salon</h2>
                        <p className="text-[#1B3C53]/60 text-lg font-light leading-relaxed mb-8">
                            Ne laissez pas une interface datée gâcher votre image de marque. Céleste offre à vos clients
                            le luxe qu'ils méritent, avant même de passer la porte.
                        </p>
                        <Button asChild className="rounded-none px-8 py-6 bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 group">
                            <Link href="/contact" className="flex items-center gap-2">
                                Audit Digital Gratuit
                                <UserPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-[#1B3C53] text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Révélez votre potentiel</h2>
                    <p className="text-white/60 mb-10 text-lg font-light">
                        Libérez-vous des tâches administratives pour vous concentrer sur votre art et vos clients.
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
