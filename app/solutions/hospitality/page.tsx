'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Key, RefreshCw, Utensils, Star, Beer, Smartphone, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function HospitalityPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Section - Sharp & Precise */}
            <section className="relative pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Hôtellerie & Restauration
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1B3C53] mb-10 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Le Concierge <span className="italic opacity-60">Invisible</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#1B3C53]/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Un écosystème unifié pour Hôtels, Fine Dining et Nightlife. Pilotez vos opérations avec une précision chirurgicale.
                    </p>
                    <Button className="bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 rounded-none px-10 py-8 text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in duration-700 delay-300">
                        Réserver une démo
                    </Button>
                </div>

                {/* CINEMATIC HERO IMAGE - 16:9 Aspect Ratio & Sharp Edges */}
                <div className="w-full max-w-[1920px] mx-auto aspect-[16/9] relative shadow-2xl animate-in fade-in duration-1000 delay-500 overflow-hidden bg-[#1B3C53]/5">
                    <img
                        src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Hospitality+Cinematic+1920x1080"
                        alt="Hospitality Overview"
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#1B3C53]/10 pointer-events-none" />
                </div>
            </section>

            {/* Intro Quote - Strict Grid */}
            <section className="py-32 px-6 max-w-[1920px] mx-auto border-b border-[#1B3C53]/10">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote className="w-12 h-12 text-[#1B3C53]/20 mx-auto mb-8" />
                    <p className="text-3xl md:text-4xl font-serif text-[#1B3C53] leading-tight mb-8">
                        "L'hospitalité moderne n'est pas une question de service, mais d'anticipation. Notre technologie rend l'exceptionnel <span className="italic opacity-60">reproductible</span>."
                    </p>
                </div>
            </section>

            {/* Section 1: Hotel Management - Asymmetric Sharp Layout */}
            <section className="py-32 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Image Column - 7 cols */}
                        <div className="lg:col-span-7 relative aspect-[16/9] w-full bg-white shadow-xl group overflow-hidden border border-[#1B3C53]/5">
                            <img
                                src="/pms.png"
                                alt="Interface PMS Hotel"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Column - 5 cols */}
                        <div className="lg:col-span-5">
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#1B3C53] uppercase border border-[#1B3C53] rounded-none">
                                Hotel Management System
                            </span>
                            <h2 className="text-5xl md:text-6xl font-serif text-[#1B3C53] mb-8 leading-[0.9]">
                                Opérations <br /><span className="italic opacity-50">Centralisées</span>
                            </h2>
                            <p className="text-lg text-[#1B3C53]/70 mb-12 leading-relaxed font-light text-justify">
                                Oubliez la fragmentation. Notre HMS unifie la gestion des réservations, le housekeeping, et la facturation en un flux unique. Une tour de contrôle pour votre établissement, sans compromis.
                            </p>

                            <div className="space-y-8 border-t border-[#1B3C53]/10 pt-8">
                                <div className="flex gap-6 items-start">
                                    <Key className="w-8 h-8 text-[#1B3C53]" />
                                    <div>
                                        <h3 className="text-xl font-serif text-[#1B3C53] mb-1">Accès Intelligent</h3>
                                        <p className="text-[#1B3C53]/60 text-sm">Clés digitales mobiles & check-in express.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <RefreshCw className="w-8 h-8 text-[#1B3C53]" />
                                    <div>
                                        <h3 className="text-xl font-serif text-[#1B3C53] mb-1">Synchro OTA</h3>
                                        <p className="text-[#1B3C53]/60 text-sm">Booking.com, Airbnb, Expedia temps réel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Fine Dining - Dark Mode Sharp */}
            <section className="bg-[#1B3C53] text-white">
                <div className="grid lg:grid-cols-2 min-h-[80vh]">
                    {/* Content Side */}
                    <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-white/10">
                        <div>
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-white uppercase border border-white rounded-none">
                                Fine Dining
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[0.9]">
                                Précision <br /> <span className="italic opacity-50">Absolue</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-12 leading-relaxed font-light max-w-md">
                                La haute gastronomie est un ballet. Orchestrez le service parfait, du plan de salle visuel à l'envoi des suites en cuisine ("Course Firing").
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="border-t border-white/20 pt-6">
                                    <h4 className="flex items-center gap-3 text-lg font-serif mb-2">
                                        <Utensils className="w-5 h-5" /> Plan de Table
                                    </h4>
                                    <p className="text-sm text-white/50">Visuel & Intuitif</p>
                                </div>
                                <div className="border-t border-white/20 pt-6">
                                    <h4 className="flex items-center gap-3 text-lg font-serif mb-2">
                                        <Star className="w-5 h-5" /> Experience
                                    </h4>
                                    <p className="text-sm text-white/50">Service 5 Étoiles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Side - Full Bleed */}
                    <div className="relative h-[50vh] lg:h-auto overflow-hidden">
                        <img
                            src="/cuisine.png"
                            alt="Interface Fine Dining"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1B3C53]/20 hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>
            </section>

            {/* Section 3: Nightlife - Minimal Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-4 sticky top-32">
                            <Beer className="w-16 h-16 mb-8 text-[#1B3C53]" />
                            <h2 className="text-5xl md:text-6xl font-serif text-[#1B3C53] mb-6 leading-none">Nightlife <br />& Bars</h2>
                            <p className="text-lg text-[#1B3C53]/60 leading-relaxed font-light mb-8">
                                L'intensité de la nuit demande une rigueur absolue. Gestion "Happy Hour" et contrôle des coûts au millilitre près.
                            </p>
                            <ul className="space-y-4 text-[#1B3C53]">
                                <li className="flex items-center gap-3 border-b border-[#1B3C53]/10 pb-3">
                                    <span className="text-xs font-bold">01</span> Happy Hour Automatique
                                </li>
                                <li className="flex items-center gap-3 border-b border-[#1B3C53]/10 pb-3">
                                    <span className="text-xs font-bold">02</span> Inventaire Réel
                                </li>
                                <li className="flex items-center gap-3 border-b border-[#1B3C53]/10 pb-3">
                                    <span className="text-xs font-bold">03</span> Analyse des Ventes
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="aspect-[16/9] bg-[#F5F5F0] border border-[#1B3C53]/10 shadow-lg relative group overflow-hidden">
                                <img
                                    src="/bar.png"
                                    alt="Interface Caisse Bar"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Kiosk - Centered Layout */}
            <section className="py-32 bg-[#F5F5F0] border-t border-[#1B3C53]/5">
                <div className="max-w-[1920px] mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-[#1B3C53]/50 mb-6 block">Self-Ordering</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-8">L'Autonomie <span className="italic">Redéfinie</span></h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto items-center">
                        {/* Features Left */}
                        <div className="space-y-8 text-right hidden lg:block">
                            <div className="p-8 bg-white border border-[#1B3C53]/5 shadow-sm hover:border-[#1B3C53] transition-colors">
                                <h3 className="text-xl font-serif text-[#1B3C53] mb-2">Fluidité Totale</h3>
                                <p className="text-sm text-[#1B3C53]/60">Réduisez les files d'attente de 40%.</p>
                            </div>
                            <div className="p-8 bg-white border border-[#1B3C53]/5 shadow-sm hover:border-[#1B3C53] transition-colors">
                                <h3 className="text-xl font-serif text-[#1B3C53] mb-2">Upselling IA</h3>
                                <p className="text-sm text-[#1B3C53]/60">Panier moyen +25% garantis.</p>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="aspect-[9/16] lg:aspect-[3/4] w-full bg-[#1B3C53] shadow-2xl relative overflow-hidden group border-4 border-white">
                            <img
                                src="/poshotel.png"
                                alt="Interface Borne Commande"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Features Right */}
                        <div className="space-y-8 lg:text-left">
                            <div className="p-8 bg-white border border-[#1B3C53]/5 shadow-sm hover:border-[#1B3C53] transition-colors">
                                <h3 className="text-xl font-serif text-[#1B3C53] mb-2">Visuel HD</h3>
                                <p className="text-sm text-[#1B3C53]/60">Photos haute définition appétissantes.</p>
                            </div>
                            <div className="p-8 bg-white border border-[#1B3C53]/5 shadow-sm hover:border-[#1B3C53] transition-colors">
                                <h3 className="text-xl font-serif text-[#1B3C53] mb-2">Cuisine Connectée</h3>
                                <p className="text-sm text-[#1B3C53]/60">Envoi direct aux écrans KDS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTO - Bottom */}
            <section className="py-32 bg-white text-center border-t border-[#1B3C53]/10">
                <h2 className="text-4xl md:text-6xl font-serif text-[#1B3C53] mb-12">L'excellence commence ici.</h2>
                <Button asChild size="lg" className="rounded-none bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 px-12 py-8 text-sm uppercase tracking-widest shadow-xl">
                    <Link href="/contact">Demander une démo</Link>
                </Button>
            </section>

            {/* DEMO VIDEO COMPONENT - Full Width */}
            <div className="bg-[#1B3C53] py-24">
                <DemoVideo />
            </div>

        </div>
    )
}
