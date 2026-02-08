'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Building2, Search, BarChart3, Users, Calendar, Key, MapPin, ArrowRight, LineChart, Quote } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function RealEstatePage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Immobilier & Promotion
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1B3C53] mb-10 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Agence <span className="italic opacity-60">4.0</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#1B3C53]/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Un système complet pour les agences modernes. De la prospection à la signature, maîtrisez chaque mètre carré.
                    </p>
                    <Button className="bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 rounded-none px-10 py-8 text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in duration-700 delay-300">
                        Moderniser Maintenant
                    </Button>
                </div>

                {/* CINEMATIC HERO IMAGE - 16:9 */}
                <div className="w-full max-w-[1920px] mx-auto aspect-[16/9] relative shadow-2xl animate-in fade-in duration-1000 delay-500 overflow-hidden bg-[#1B3C53]/5">
                    <img
                        src="https://placehold.co/1920x1080/F5F5F0/1B3C53/png?text=Real+Estate+Cinematic+1920x1080"
                        alt="Real Estate Overview"
                        className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-grayscale duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent opacity-50" />
                </div>
            </section>

            {/* Intro Quote */}
            <section className="py-32 px-6 max-w-[1920px] mx-auto border-b border-[#1B3C53]/10">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote className="w-12 h-12 text-[#1B3C53]/20 mx-auto mb-8" />
                    <p className="text-3xl md:text-4xl font-serif text-[#1B3C53] leading-tight mb-8">
                        "Le marché n'attend pas. Votre technologie doit être aussi rapide qu'une signature <span className="italic opacity-60">électronique</span>."
                    </p>
                </div>
            </section>

            {/* Section 1: Intelligent Inventory - Sharp Cards */}
            <section className="py-32 bg-[#F9F9F7]">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-4 sticky top-32">
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-[#1B3C53] uppercase border border-[#1B3C53] rounded-none">
                                Marketing & SEO
                            </span>
                            <h2 className="text-5xl md:text-6xl font-serif text-[#1B3C53] mb-8 leading-[1]">
                                Inventaire <br /><span className="italic opacity-50">Intelligent</span>
                            </h2>
                            <p className="text-lg text-[#1B3C53]/70 leading-relaxed font-light text-justify">
                                Ne laissez plus vos biens dormir. Notre IA croise automatiquement votre inventaire avec votre base acquéreurs pour générer des leads qualifiés instantanément.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-[#1B3C53]/10 border border-[#1B3C53]/10">
                            {/* Grid using gaps for borders */}
                            {[
                                { icon: Search, title: 'Matchmaking IA', text: 'Suggestion automatique de biens aux prospects.' },
                                { icon: Key, title: 'Espace Propriétaire', text: 'Transparence totale sur les visites et offres.' },
                                { icon: MapPin, title: 'Multi-Diffusion', text: 'Publication en 1 clic sur tous les portails.' },
                                { icon: BarChart3, title: 'Valorisation', text: 'Estimation précise basée sur la Data marché.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-12 hover:bg-[#F5F5F0] transition-colors group">
                                    <item.icon className="w-10 h-10 text-[#1B3C53] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">{item.title}</h3>
                                    <p className="text-[#1B3C53]/60 leading-relaxed text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Pipeline Velocity - Dark Split */}
            <section className="bg-[#1B3C53] text-white">
                <div className="grid lg:grid-cols-2 min-h-[80vh]">
                    <div className="relative h-[50vh] lg:h-auto overflow-hidden order-2 lg:order-1">
                        <img
                            src="https://placehold.co/1920x1080/1B3C53/FFFFFF/png?text=Pipeline+Dashboard"
                            alt="Pipeline Dashboard"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1B3C53]/10" />
                    </div>

                    <div className="p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
                        <div>
                            <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-widest text-white uppercase border border-white rounded-none">
                                Data Driven
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[0.9]">
                                Vélocité du <br /><span className="italic opacity-50">Pipeline</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-12 leading-relaxed font-light max-w-lg">
                                Arrêtez de naviguer à vue. Visualisez chaque étape de votre tunnel de vente, du lead entrant à la signature chez le notaire.
                            </p>
                            <div className="flex gap-12 border-t border-white/20 pt-8">
                                <div>
                                    <LineChart className="w-8 h-8 text-white mb-4 opacity-50" />
                                    <h4 className="text-lg font-serif">Prévision</h4>
                                    <p className="text-xs uppercase tracking-wider text-white/50">Revenus à 30/60/90j</p>
                                </div>
                                <div>
                                    <Users className="w-8 h-8 text-white mb-4 opacity-50" />
                                    <h4 className="text-lg font-serif">Performance</h4>
                                    <p className="text-xs uppercase tracking-wider text-white/50">Classement Agents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Field Ops - Full Background */}
            <section className="py-40 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://placehold.co/1920x1080/F5F5F0/1B3C53/png?text=Modern+Building+Interior"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full">
                    <div className="text-center mb-16">
                        <Building2 className="w-16 h-16 text-[#1B3C53] mx-auto mb-8" />
                        <h2 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-8">Terrain Synchronisé</h2>
                        <p className="text-xl text-[#1B3C53]/70 leading-relaxed max-w-2xl mx-auto">
                            Coordonnez les visites, gérez les clés et partagez vos agendas en temps réel.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Agenda Partagé', desc: 'Zéro conflit de visite. Synchronisation Google/Outlook.' },
                            { title: 'Suivi Clés', desc: 'Tracez chaque trousse avec QR Code.' },
                            { title: 'Géolocalisation', desc: 'Optimisation des tournées de visite pour les agents.' }
                        ].map((feat, i) => (
                            <div key={i} className="bg-white border border-[#1B3C53]/10 p-10 hover:shadow-2xl hover:border-[#1B3C53] transition-all duration-300 group">
                                <div className="text-4xl text-[#1B3C53]/10 font-bold mb-4 group-hover:text-[#1B3C53] transition-colors">0{i + 1}</div>
                                <h3 className="text-2xl font-serif text-[#1B3C53] mb-4">{feat.title}</h3>
                                <p className="text-sm text-[#1B3C53]/60 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
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
