import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Server, Shield, Globe, Database, Cpu, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function TechnologyPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    Infrastructure & Sécurité
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-8 max-w-4xl mx-auto leading-[1.1]">
                    Le Moteur <span className="italic text-primary">Invisible</span>
                </h1>
                <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">
                    Une stack technologique robuste, pensée pour l'échelle et la sécurité bancaire. Odoo Enterprise comme cœur nucléaire.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-24">
                    <Button asChild size="lg" className="rounded-none px-10 h-12 text-xs uppercase tracking-widest border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all">
                        <Link href="/contact">Auditer Votre Stack</Link>
                    </Button>
                </div>
            </section>

            {/* Stack Grid */}
            <section className="py-24 px-6 border-t border-border/40">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {/* Odoo Core */}
                    <div className="p-8 border border-border bg-card hover:border-primary transition-colors group">
                        <Database className="w-10 h-10 text-primary mb-6" />
                        <h3 className="font-serif text-2xl mb-4">Odoo Enterprise</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Le coeur du système. Base de données PostgreSQL unifiée. Modulaire, open-source et sans dette technique.
                        </p>
                        <div className="aspect-video bg-muted relative overflow-hidden">
                            <img
                                src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Odoo+Architecture"
                                alt="Odoo Core"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    {/* Cloud & Hosting */}
                    <div className="p-8 border border-border bg-card hover:border-primary transition-colors group">
                        <Globe className="w-10 h-10 text-primary mb-6" />
                        <h3 className="font-serif text-2xl mb-4">Cloud Hybride</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Hébergement sur AWS ou Odoo.sh. Réplication multi-région pour une disponibilité de 99.99%.
                        </p>
                        <div className="aspect-video bg-muted relative overflow-hidden">
                            <img
                                src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Cloud+Infrastructure"
                                alt="Cloud Infra"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    {/* Security */}
                    <div className="p-8 border border-border bg-card hover:border-primary transition-colors group">
                        <Shield className="w-10 h-10 text-primary mb-6" />
                        <h3 className="font-serif text-2xl mb-4">Cyber-Sécurité</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Chiffrement SSL/TLS, backups horaires et audit logs immuables. Conforme RGPD par design.
                        </p>
                        <div className="aspect-video bg-muted relative overflow-hidden">
                            <img
                                src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Security+Shield"
                                alt="Security"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 px-6 bg-secondary/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-12">Intégrations Natives</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-sm">
                                <span className="font-bold text-xs">STRIPE</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest">Paiements</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-sm">
                                <span className="font-bold text-xs">DHL</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest">Logistique</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-sm">
                                <span className="font-bold text-xs">TWILIO</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest">SMS / WhatsApp</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-sm">
                                <span className="font-bold text-xs">GOOGLE</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest">Workspace</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
