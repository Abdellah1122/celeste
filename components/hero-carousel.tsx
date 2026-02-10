'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SLIDES = [
    {
        image: "img1.jpg",
        title: "CÉLESTE",
        subtitle: "EXPERTISE ODOO TECHNO-FONCTIONNELLE",
        description: "L'alliance parfaite entre maîtrise technique et intelligence d'affaires. Des solutions ERP certifiées, conçues pour la performance."
    },
    {
        image: "img2.jpg",
        title: "FLUIDITÉ",
        subtitle: "PERFORMANCE ABSOLUE",
        description: "Une navigation instantanée, libérée des lenteurs traditionnelles. Vos outils de gestion deviennent aussi rapides que votre pensée."
    },
    {
        image: "img3.jpg",
        title: "ÉLÉGANCE",
        subtitle: "INTERFACE SUR MESURE",
        description: "Sortez des standards du marché. Nous concevons des environnements digitaux exclusifs, fluides et parfaitement alignés avec votre identité."
    }
]

export function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 10 }, [Autoplay({ delay: 5000 }) as any, Fade() as any])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#F5F5F0] text-[#1B3C53]">
            {/* Carousel */}
            <div className="embla w-full h-full" ref={emblaRef}>
                <div className="embla__container flex w-full h-full">
                    {SLIDES.map((slide, index) => (
                        <div key={index} className="embla__slide relative w-full h-full flex-[0_0_100%]">
                            {/* Image - Sharp & Full Height */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient Overlay - Bottom Up */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0] via-[#F5F5F0]/50 to-transparent opacity-90" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content - Static Overlay on Top */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-32 px-6 md:px-20 pointer-events-none">
                <div className="max-w-4xl pointer-events-auto">
                    <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-[#1B3C53] mb-6 font-bold animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        {SLIDES[selectedIndex].subtitle}
                    </span>
                    <h1 className="font-serif text-7xl md:text-[9rem] leading-[0.85] font-bold tracking-tighter mb-8 text-[#1B3C53] animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200 block">
                        {SLIDES[selectedIndex].title}
                    </h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
                        <p className="max-w-md text-sm md:text-lg text-[#1B3C53]/80 leading-relaxed font-medium">
                            {SLIDES[selectedIndex].description}
                        </p>
                        <Button asChild className="rounded-full bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 px-8 py-6 text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-lg">
                            <Link href="/solutions/hospitality">
                                Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Progress Bar & Navigation */}
            <div className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between p-6 md:p-12">
                <div className="flex gap-4">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 rounded-full transition-all duration-500 ${index === selectedIndex ? 'w-16 bg-[#1B3C53]' : 'w-4 bg-[#1B3C53]/20'}`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                <div className="hidden md:block text-xs font-mono text-[#1B3C53]/40">
                    0{selectedIndex + 1} / 0{SLIDES.length}
                </div>
            </div>
        </section>
    )
}
