'use client'

import React from 'react'
import { Dumbbell, CreditCard, HeartPulse, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DemoVideo } from '@/components/demo-video'

export default function FitnessPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1B3C53]">
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden text-center">
                <div className="max-w-4xl mx-auto mb-12">
                    <Link href="/solutions/wellness" className="inline-block mb-8 text-xs font-bold tracking-[0.3em] uppercase text-[#1B3C53]/40 hover:text-[#1B3C53] transition-colors">
                        ← Wellness
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif text-[#1B3C53] mb-6">Fitness Center Management</h1>
                    <p className="text-xl text-[#1B3C53]/60 font-light leading-relaxed">
                        Santé & Efficacité. Automatisez les abonnements et le planning pour vous concentrer sur le coaching.
                    </p>
                </div>
                <div className="w-full aspect-[16/9] relative shadow-2xl overflow-hidden bg-[#1B3C53]/5">
                    <img src="https://placehold.co/1920x1080/EAEAEA/1B3C53/png?text=Fitness+Center+App" className="w-full h-full object-cover" alt="Fitness System" />
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 bg-[#F9F9F7]">
                <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Abonnements & Accès</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <CreditCard className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Membership Management</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Création de packages sur mesure et suivi automatisé des inscriptions et renouvellements.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Dumbbell className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Tarification Dynamique</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Gratuité automatique des cours pour les membres actifs, tarif standard à l'expiration.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-3xl font-serif text-[#1B3C53] mb-8 border-b border-[#1B3C53]/10 pb-4">Planification</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <HeartPulse className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Agenda des Cours</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Organisation visuelle des sessions de Personal Training et des cours collectifs (Yoga, HIIT).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Wrench className="w-6 h-6 text-[#1B3C53] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#1B3C53]">Maintenance Machines</h4>
                                    <p className="text-sm text-[#1B3C53]/70">Suivi de l'entretien préventif des équipements pour garantir la sécurité.</p>
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
