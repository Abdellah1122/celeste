'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { FileText, Calculator, Landmark, ShieldCheck, Search, Share2, Activity, PieChart, Lock, Quote } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function FinancePage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Finance & Administration
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1B3C53] mb-10 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Entreprise <span className="italic opacity-60">Zéro Papier</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#1B3C53]/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        La fin de la saisie manuelle. Comptabilité automatisée par l'IA et Gestion Électronique des Documents (GED) sécurisée.
                    </p>
                    <Button className="bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 rounded-none px-10 py-8 text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in duration-700 delay-300">
                        Digitaliser la Finance
                    </Button>
                </div>

                {/* CINEMATIC HERO IMAGE - 16:9 */}
                <div className="w-full max-w-[1920px] mx-auto aspect-[16/9] relative shadow-2xl animate-in fade-in duration-1000 delay-500 overflow-hidden bg-[#1B3C53]/5">
                    <img
                        src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Finance+Center+Cinematic+1920x1080"
                        alt="Finance Overview"
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-50" />
                </div>
            </section>

            {/* Intro Quote */}
            <section className="py-32 px-6 max-w-[1920px] mx-auto border-b border-[#1B3C53]/10">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote className="w-12 h-12 text-[#1B3C53]/20 mx-auto mb-8" />
                    <p className="text-3xl md:text-4xl font-serif text-[#1B3C53] leading-tight mb-8">
                        "La comptabilité n'est plus une obligation légale, mais un outil de pilotage <span className="italic opacity-60">stratégique</span>. Temps réel, zéro erreur."
                    </p>
                </div>
            </section>

            {/* Section 1: Accounting AI - Sharp Layout */}
            <section className="py-32 bg-[#F9F9F7]">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#1B3C53] uppercase border border-[#1B3C53] rounded-none">
                                Comptabilité IA
                            </span>
                            <h2 className="text-5xl md:text-6xl font-serif text-[#1B3C53] mb-8 leading-[1]">
                                Comptabilité <br /><span className="italic opacity-50">Temps Réel</span>
                            </h2>
                            <p className="text-lg text-[#1B3C53]/70 leading-relaxed font-light mb-12 text-justify">
                                L'IA scanne vos factures fournisseurs et écritures bancaires en continu. Votre bilan est généré à la volée. Reconnaissance OCR à 99% de précision.
                            </p>

                            <div className="flex gap-12 border-t border-[#1B3C53]/10 pt-8">
                                <div className="flex flex-col gap-2">
                                    <Activity className="w-8 h-8 text-[#1B3C53]" />
                                    <span className="text-lg font-serif text-[#1B3C53]">Synchro Bancaire</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <PieChart className="w-8 h-8 text-[#1B3C53]" />
                                    <span className="text-lg font-serif text-[#1B3C53]">Reports Auto</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-[16/9] w-full shadow-2xl bg-white p-2 border border-[#1B3C53]/5 group hover:border-[#1B3C53] transition-colors">
                            <div className="absolute top-0 right-0 bg-[#1B3C53] text-white text-xs font-bold px-4 py-2 uppercase tracking-widest z-10">AI Powered</div>
                            <img
                                src="https://placehold.co/1920x1080/1B3C53/FFFFFF/png?text=Accounting+Dashboard+1920x1080"
                                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: GED - Dark & Sharp */}
            <section className="bg-[#1B3C53] text-white">
                <div className="grid lg:grid-cols-2 min-h-[80vh]">
                    <div className="relative h-[50vh] lg:h-auto overflow-hidden order-2 lg:order-1">
                        <img
                            src="https://placehold.co/1920x1080/F5F5F0/1B3C53/png?text=Secure+Documents+Center"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1B3C53]/20" />
                    </div>

                    <div className="p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
                        <div>
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-white uppercase border border-white rounded-none">
                                GED & Légal
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[0.9]">
                                Coffre-fort <br /><span className="italic opacity-50">Numérique</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-12 leading-relaxed font-light">
                                Centralisez tous vos contrats avec des droits d'accès granulaires (RBAC) et signature électronique intégrée. Plus jamais de document perdu.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-6 border border-white/20 hover:bg-white/5 transition-colors">
                                    <Lock className="w-8 h-8 text-white" />
                                    <div>
                                        <h3 className="text-lg font-serif mb-1">Sécurité Maximale</h3>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">Chiffrement de bout en bout</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-6 border border-white/20 hover:bg-white/5 transition-colors">
                                    <Share2 className="w-8 h-8 text-white" />
                                    <div>
                                        <h3 className="text-lg font-serif mb-1">Partage Facile</h3>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">Liens expirables sécurisés</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMO VIDEO COMPONENT */}
            <div className="bg-[#1B3C53] py-24">
                <DemoVideo />
            </div>

        </div>
    )
}
