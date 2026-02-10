'use client'

import React from 'react'
import { Users, FileText, Calendar, TrendingUp, CheckCircle, Smartphone, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RHPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[#1B3C53]/5 -z-10" />
                <div className="max-w-4xl mx-auto mb-12">
                    <span className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40">
                        Système Intelligent
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Céleste RH</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed max-w-2xl mx-auto">
                        La gestion des ressources humaines réinventée. Une suite complète, intuitive et puissante pour piloter vos talents, du recrutement à la paie.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto aspect-[16/9] relative shadow-2xl overflow-hidden rounded-sm bg-gray-100">
                    <img src="/celest-rh.png" className="w-full h-full object-cover md:object-contain" alt="Céleste RH Dashboard" />
                </div>
            </section>

            {/* ODOO POWERED SECTION */}
            <section className="py-16 bg-[#1B3C53] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Propulsé par Odoo</h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Céleste RH s'appuie sur la robustesse et la flexibilité de l'ERP Odoo. Nous avons sublimé la technologie pour offrir une expérience utilisateur inégalée, tout en conservant la puissance des données unifiées.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Cloud Native</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-white/50" />
                                <span className="text-sm tracking-widest uppercase">Sécurisé</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md p-8 border border-white/10 bg-white/5 rounded-none backdrop-blur-sm">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Synchronisation temps réel
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Architecture modulaire
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Performance optimisée
                                </li>
                                <li className="flex items-center gap-4 text-white/90">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" /> Mises à jour automatisées
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
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-4">Fonctionnalités Clés</h2>
                        <div className="w-24 h-1 bg-[#1B3C53]/10 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {/* Feature 1 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Gestion des Employés</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Centralisez toutes les informations de vos collaborateurs dans un dossier numérique sécurisé. Contrats, documents, informations personnelles et historique de carrière en un seul endroit.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Recrutement Avancé</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Un pipeline de recrutement visuel et intuitif. Publiez des offres, suivez les candidatures, et transformez les candidats en employés en un clic.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Paie Simplifiée</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Automatisez la génération des bulletins de paie. Gestion des règles salariales complexes, des primes et des déductions, en totale conformité légale.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Congés & Absences</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Portail employé pour les demandes de congés. Validation par les managers en un clic et mise à jour automatique des soldes et des plannings.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Portail Collaborateur</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Donnez de l'autonomie à vos équipes. Accès mobile pour consulter ses fiches de paie, poser ses congés et mettre à jour ses informations.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group">
                            <div className="w-12 h-12 bg-white border border-[#1B3C53]/10 flex items-center justify-center mb-6 group-hover:bg-[#1B3C53] group-hover:text-white transition-all duration-300">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Évaluations & Performance</h3>
                            <p className="text-[#1B3C53]/70 font-light leading-relaxed">
                                Suivez la performance de vos talents. Mettez en place des entretiens périodiques et des plans de développement personnalisés.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B3C53] mb-8">Prêt à transformer votre RH ?</h2>
                    <p className="text-[#1B3C53]/60 mb-10 text-lg">
                        Découvrez comment Céleste RH peut simplifier votre gestion quotidienne et engager vos équipes.
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
