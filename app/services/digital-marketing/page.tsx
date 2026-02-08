'use client'

import React from 'react'
import { Megaphone, TrendingUp, PenTool, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function DigitalMarketingPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/services" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Services
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Digital Marketing Growth</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        L'Art de la Visibilité. Nous fusionnons data et créativité pour construire votre marque.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/1B3C53/F5F5F0/png?text=Marketing+Analytics" className="w-full h-full object-cover" alt="Digital Marketing" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Acquisition Trafic</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <Search className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">SEO Technique</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Optimisation structurelle pour dominer les résultats Google.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <TrendingUp className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Campagnes Ads (SEA)</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gestion de campagnes payantes haute performance (Google Ads, LinkedIn).</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Branding</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <PenTool className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Identité Visuelle</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Création de logos et chartes graphiques cohérents avec votre positionnement.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Megaphone className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Social Media Mgt</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Animation de communautés et planification éditoriale.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="bg-[#1B3C53] py-24">
                <DemoVideo />
            </div>
        </div>
    )
}
