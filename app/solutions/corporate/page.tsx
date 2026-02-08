'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Briefcase, Clock, Scissors, FileText, UserCheck, TrendingUp, Calendar, CheckSquare, Quote } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function CorporatePage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Corporate & Services
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1B3C53] mb-10 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Efficacité <span className="italic opacity-60">Quotidienne</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#1B3C53]/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Une approche radicale pour les sociétes de services. Optimisez votre taux d'utilisation et automatisez vos ressources humaines.
                    </p>
                    <Button className="bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 rounded-none px-10 py-8 text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in duration-700 delay-300">
                        Rationaliser les Opérations
                    </Button>
                </div>

                {/* CINEMATIC HERO IMAGE - 16:9 */}
                <div className="w-full max-w-[1920px] mx-auto aspect-[16/9] relative shadow-2xl animate-in fade-in duration-1000 delay-500 overflow-hidden bg-[#1B3C53]/5">
                    <img
                        src="https://placehold.co/1920x1080/F5F5F0/1B3C53/png?text=Corporate+Modern+Office+1920x1080"
                        alt="Corporate Overview"
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-30" />
                </div>
            </section>

            {/* Intro Quote */}
            <section className="py-32 px-6 max-w-[1920px] mx-auto border-b border-[#1B3C53]/10">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote className="w-12 h-12 text-[#1B3C53]/20 mx-auto mb-8" />
                    <p className="text-3xl md:text-4xl font-serif text-[#1B3C53] leading-tight mb-8">
                        "Le temps est votre actif le plus précieux. Ne le gaspillez pas dans l'administration <span className="italic opacity-60">stérile</span>."
                    </p>
                </div>
            </section>

            {/* Section 1: Project Profitability - Sharp Split */}
            <section className="py-32 bg-[#F9F9F7]">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative aspect-[16/9] w-full bg-white shadow-xl border border-[#1B3C53]/5 overflow-hidden">
                            <img
                                src="https://placehold.co/1920x1080/1B3C53/FFFFFF/png?text=Project+Management+Dashboard"
                                alt="Gestion Projet"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#1B3C53] uppercase border border-[#1B3C53] rounded-none">
                                Consulting
                            </span>
                            <div className="mb-12">
                                <h2 className="text-5xl md:text-6xl font-serif text-[#1B3C53] mb-6">Rentabilité Projet</h2>
                                <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed text-justify">
                                    Arrêtez de perdre de la marge. Suivez le temps passé par tâche et facturez en régie ou au forfait automatiquement. Une visibilité totale sur votre P&L.
                                </p>
                            </div>

                            <div className="space-y-0 border-t border-[#1B3C53]/10">
                                <div className="flex gap-8 items-center py-8 border-b border-[#1B3C53]/10 hover:bg-white transition-colors px-4 -mx-4 cursor-default group">
                                    <Clock className="w-10 h-10 text-[#1B3C53] opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <div>
                                        <h3 className="text-xl font-serif text-[#1B3C53] mb-1">Feuilles de Temps</h3>
                                        <p className="text-[#1B3C53]/60 text-sm">Saisie mobile ou chronomètre.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 items-center py-8 border-b border-[#1B3C53]/10 hover:bg-white transition-colors px-4 -mx-4 cursor-default group">
                                    <TrendingUp className="w-10 h-10 text-[#1B3C53] opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <div>
                                        <h3 className="text-xl font-serif text-[#1B3C53] mb-1">Analyse de Marge</h3>
                                        <p className="text-[#1B3C53]/60 text-sm">Rentabilité temps réel par projet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: HR Intelligence - Dark Side */}
            <section className="bg-[#1B3C53] text-white">
                <div className="grid lg:grid-cols-2 min-h-[80vh]">
                    <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-white/10">
                        <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-white uppercase border border-white rounded-none self-start">
                            Ressources Humaines
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[0.9]">
                            Intelligence <br /> <span className="italic opacity-50">Talents</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 leading-relaxed font-light">
                            Automatisez le chaos administratif. Du recrutement à l'évaluation annuelle, créez un parcours collaborateur fluide et engageant.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
                                <FileText className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-lg font-serif mb-2">Parsing CV</h3>
                                <p className="text-xs text-white/50">Extraction IA des compétences.</p>
                            </div>
                            <div className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
                                <CheckSquare className="w-8 h-8 text-white mb-4" />
                                <h3 className="text-lg font-serif mb-2">Evaluations</h3>
                                <p className="text-xs text-white/50">Feedback 360° et objectifs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[50vh] lg:h-auto overflow-hidden">
                        <img
                            src="https://placehold.co/1920x1080/234C6A/FFFFFF/png?text=Kanban+Recruitment+Board"
                            alt="Kanban Recrutement"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1B3C53]/10" />
                    </div>
                </div>
            </section>

            {/* Section 3: Salons - Strict 3 Cols */}
            <section className="py-32 bg-white">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12 text-center">
                    <Scissors className="w-16 h-16 mx-auto mb-8 text-[#1B3C53]" />
                    <h2 className="text-5xl font-serif text-[#1B3C53] mb-16">Salons & Bien-être</h2>

                    <div className="grid lg:grid-cols-3 gap-0 border border-[#1B3C53]/10">
                        <div className="p-12 border-b lg:border-b-0 lg:border-r border-[#1B3C53]/10 hover:bg-[#F9F9F7] transition-colors">
                            <Calendar className="w-10 h-10 text-[#1B3C53] mx-auto mb-6" />
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Réservation</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed">Planning visuel. Respect des compétences et disponibilités du staff.</p>
                        </div>
                        <div className="p-12 border-b lg:border-b-0 lg:border-r border-[#1B3C53]/10 hover:bg-[#F9F9F7] transition-colors">
                            <UserCheck className="w-10 h-10 text-[#1B3C53] mx-auto mb-6" />
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Fiche Client VIP</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed">Historique des coupes, préférences, allergies et galerie photos avant/après.</p>
                        </div>
                        <div className="p-12 hover:bg-[#F9F9F7] transition-colors">
                            <TrendingUp className="w-10 h-10 text-[#1B3C53] mx-auto mb-6" />
                            <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">Anti No-Show</h3>
                            <p className="text-[#1B3C53]/60 text-sm leading-relaxed">Rappels automatiques SMS. Demande d'acompte en ligne intégrée.</p>
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
