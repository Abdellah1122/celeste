'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Pill, Sofa, Sparkles, Truck, Scan, Box, Palette, Tag, ArrowUpRight, ShoppingBag, Quote } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function RetailPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Retail & Distribution
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1B3C53] mb-10 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Précision du <span className="italic opacity-60">Détail</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#1B3C53]/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Une suite unifiée pour maîtriser la complexité du commerce moderne. Pharma, Cosmétique, Luxe et Mobilier.
                    </p>
                    <Button className="bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 rounded-none px-10 py-8 text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in duration-700 delay-300">
                        Commencer Maintenant
                    </Button>
                </div>

                {/* CINEMATIC HERO IMAGE - 16:9 */}
                <div className="w-full max-w-[1920px] mx-auto aspect-[16/9] relative shadow-2xl animate-in fade-in duration-1000 delay-500 overflow-hidden bg-[#1B3C53]/5">
                    <img
                        src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Retail+Flagship+1920x1080"
                        alt="Retail Overview"
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
                        "Le retail n'est plus une question de stock, mais de fluidité. La bonne pièce, au bon endroit, au bon <span className="italic opacity-60">moment</span>."
                    </p>
                </div>
            </section>

            {/* Section 1: Complex Inventory (Sharp Grid) */}
            <section className="py-32 bg-[#F9F9F7]">
                <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#1B3C53]/10 pb-8">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-serif text-[#1B3C53] mb-4">Stocks Complexes</h2>
                            <p className="text-xl text-[#1B3C53]/60">La gestion multidimensionnelle pour les industries exigeantes.</p>
                        </div>
                        <Button variant="outline" className="rounded-none border-[#1B3C53] text-[#1B3C53] hover:bg-[#1B3C53] hover:text-white uppercase tracking-widest text-xs px-8 py-6 hidden md:flex">
                            Explorer les Modules
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-[#1B3C53]/10 bg-white">
                        {/* Pharma - Large */}
                        <div className="md:col-span-2 p-12 md:p-16 border-r border-[#1B3C53]/10 border-b md:border-b-0 group hover:bg-[#1B3C53] hover:text-white transition-colors duration-500">
                            <Pill className="w-12 h-12 text-[#1B3C53] mb-8 group-hover:text-white transition-colors" />
                            <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2 block">Pharma & Labo</span>
                            <h3 className="text-4xl font-serif mb-6">Zéro Périmé (FEFO)</h3>
                            <p className="text-lg opacity-70 mb-10 leading-relaxed font-light">
                                Gestion stricte des dates d'expiration. Traçabilité des lots et numéros de série du fabricant au patient. Compatible GS1 et Datamatrix.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 border border-[#1B3C53]/20 group-hover:border-white/20 text-xs uppercase tracking-wider">Scan Datamatrix</span>
                                <span className="px-4 py-2 border border-[#1B3C53]/20 group-hover:border-white/20 text-xs uppercase tracking-wider">Multi-Entrepôt</span>
                            </div>
                        </div>

                        {/* Cosmetics - Side */}
                        <div className="md:col-span-1 p-12 md:p-16 flex flex-col justify-between group bg-[#F5F5F0] hover:bg-[#1B3C53] hover:text-white transition-colors duration-500">
                            <div>
                                <Sparkles className="w-12 h-12 text-[#1B3C53] mb-8 group-hover:text-white transition-colors" />
                                <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2 block">Cosmétique</span>
                                <h3 className="text-3xl font-serif mb-4">Matrice Variantes</h3>
                                <p className="text-sm opacity-70 leading-relaxed">Teintes, Tailles, Textures. Gérez des milliers de déclinaisons sans chaos.</p>
                            </div>
                        </div>

                        {/* Furniture - Bottom Left */}
                        <div className="md:col-span-1 p-12 md:p-16 border-r border-[#1B3C53]/10 border-t border-[#1B3C53]/10 group hover:bg-[#1B3C53] hover:text-white transition-colors duration-500">
                            <Sofa className="w-12 h-12 text-[#1B3C53] mb-8 group-hover:text-white transition-colors" />
                            <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2 block">Mobilier</span>
                            <h3 className="text-3xl font-serif mb-4">Configurateur</h3>
                            <p className="text-sm opacity-70 leading-relaxed">Prix dynamique et BOM automatique pour le sur-mesure.</p>
                        </div>

                        {/* Logistics - Bottom Right */}
                        <div className="md:col-span-2 p-12 md:p-16 border-t border-[#1B3C53]/10 flex flex-col md:flex-row items-center justify-between group hover:bg-[#1B3C53] hover:text-white transition-colors duration-500">
                            <div className="max-w-md">
                                <Truck className="w-12 h-12 text-[#1B3C53] mb-8 group-hover:text-white transition-colors" />
                                <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2 block">Omnicanal</span>
                                <h3 className="text-3xl font-serif mb-4">Logistique Unifiée</h3>
                                <p className="text-sm opacity-70 leading-relaxed">Click & Collect, Ship from Store. Unifiez vos stocks web et physiques en temps réel.</p>
                            </div>
                            <ArrowUpRight className="w-12 h-12 opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Experience - Full Bleed 16:9 */}
            <section className="py-24 max-w-[1920px] mx-auto px-6">
                <div className="w-full aspect-[16/9] relative overflow-hidden bg-black group">
                    <img
                        src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Omnichannel+Lifestyle+1920x1080"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <ShoppingBag className="w-20 h-20 text-white mb-8 opacity-80" />
                        <h2 className="text-6xl md:text-8xl font-serif text-white mb-8">Expérience <br /><span className="italic">Sans Couture</span></h2>
                        <p className="text-white/80 text-2xl max-w-2xl font-light">Le client est unique. Votre commerce aussi.</p>
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
