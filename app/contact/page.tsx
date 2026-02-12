import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="bg-[#F5F5F0] text-[#1B3C53] min-h-screen pt-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 min-h-[calc(100vh-6rem)]">

                {/* Left Column: Visual/Info */}
                <div className="flex flex-col justify-between py-12 md:py-24 md:pr-24 border-b md:border-b-0 md:border-r border-[#1B3C53]/10">
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#1B3C53]/50 mb-6 block">Contact</span>
                        <h1 className="font-serif text-6xl md:text-8xl mb-12">
                            Parlons <br /> <span className="italic text-[#1B3C53]/60">Projet</span>
                        </h1>
                        <p className="text-xl text-[#1B3C53]/70 max-w-md font-light leading-relaxed">
                            Vous avez une vision. Nous avons l'ingénierie pour la réaliser. Discutons de votre transformation digitale.
                        </p>
                    </div>

                    <div className="space-y-8 mt-12 md:mt-0">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-[#1B3C53]/20 flex items-center justify-center group-hover:bg-[#1B3C53] group-hover:text-white transition-all">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs text-[#1B3C53]/40 uppercase tracking-widest block mb-1">Email</span>
                                <span className="text-lg">abdellahjorf4@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-[#1B3C53]/20 flex items-center justify-center group-hover:bg-[#1B3C53] group-hover:text-white transition-all">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs text-[#1B3C53]/40 uppercase tracking-widest block mb-1">Téléphone</span>
                                <span className="text-lg">+212 6 75 24 22 83</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-[#1B3C53]/20 flex items-center justify-center group-hover:bg-[#1B3C53] group-hover:text-white transition-all">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs text-[#1B3C53]/40 uppercase tracking-widest block mb-1">Bureau</span>
                                <span className="text-lg">Casablanca, Maroc</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="py-12 md:py-24 md:pl-24 flex flex-col justify-center">
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#1B3C53]/40">Nom Complet</label>
                                <Input className="bg-transparent border-0 border-b border-[#1B3C53]/20 rounded-none px-0 py-4 focus:ring-0 focus:border-[#1B3C53] transition-colors text-lg placeholder:text-transparent text-[#1B3C53]" placeholder="Votre Nom" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#1B3C53]/40">Email</label>
                                <Input className="bg-transparent border-0 border-b border-[#1B3C53]/20 rounded-none px-0 py-4 focus:ring-0 focus:border-[#1B3C53] transition-colors text-lg placeholder:text-transparent text-[#1B3C53]" placeholder="votre@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#1B3C53]/40">Sujet</label>
                            <Input className="bg-transparent border-0 border-b border-[#1B3C53]/20 rounded-none px-0 py-4 focus:ring-0 focus:border-[#1B3C53] transition-colors text-lg placeholder:text-transparent text-[#1B3C53]" placeholder="Quel est votre projet ?" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#1B3C53]/40">Message</label>
                            <Textarea className="bg-transparent border-0 border-b border-[#1B3C53]/20 rounded-none px-0 py-4 focus:ring-0 focus:border-[#1B3C53] transition-colors text-lg min-h-[150px] resize-none placeholder:text-transparent text-[#1B3C53]" placeholder="Dites-nous en plus..." />
                        </div>

                        <div className="flex items-center justify-between pt-8">

                            <Button size="lg" className="rounded-none bg-[green] text-white hover:bg-[darkgreen]/90 px-12 py-6 text-xs uppercase tracking-widest">
                                <Link href="https://wa.me/33123456789" >
                                    WhatsApp Rapide
                                </Link>
                            </Button>
                            <Button size="lg" className="rounded-none bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90 px-12 py-6 text-xs uppercase tracking-widest">
                                Envoyer
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
