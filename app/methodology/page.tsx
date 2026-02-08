import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileSearch, PenTool, LayoutTemplate, Bug, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function MethodologyPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    Notre Approche
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-8 max-w-4xl mx-auto leading-[1.1]">
                    L'Art de <span className="italic text-primary">l'Exécution</span>
                </h1>
                <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">
                    Une méthodologie Agile raffinée. Nous transformons le chaos en processus clairs et l'incertitude en roadmap précise.
                </p>
            </section>

            {/* Vertical Timeline Steps */}
            <section className="py-24 px-6 border-t border-border/40">
                <div className="max-w-4xl mx-auto space-y-24 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border/60">

                    {/* Step 1 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="absolute left-8 md:left-1/2 -ml-[19px] w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center z-10 font-serif text-lg">1</div>
                        <div className="flex-1 md:text-right pl-24 md:pl-0">
                            <h3 className="font-serif text-2xl mb-2">Audit & Cadrage</h3>
                            <p className="text-muted-foreground text-sm">Analyse profonde de vos processus actuels. Identification des goulots d'étranglement.</p>
                        </div>
                        <div className="flex-1 pl-24 md:pl-0">
                            <div className="aspect-video bg-muted border border-border relative">
                                <img src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Workshop+Audit" className="w-full h-full object-cover" alt="Audit" />
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                        <div className="absolute left-8 md:left-1/2 -ml-[19px] w-10 h-10 bg-primary text-white flex items-center justify-center z-10 font-serif text-lg">2</div>
                        <div className="flex-1 md:text-left pl-24 md:pl-0">
                            <h3 className="font-serif text-2xl mb-2">Design & UX</h3>
                            <p className="text-muted-foreground text-sm">Prototypage des interfaces. Nous validons l'expérience utilisateur avant d'écrire une ligne de code.</p>
                        </div>
                        <div className="flex-1 pl-24 md:pl-0">
                            <div className="aspect-video bg-muted border border-border relative">
                                <img src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=UX+Wireframes" className="w-full h-full object-cover" alt="UX" />
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="absolute left-8 md:left-1/2 -ml-[19px] w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center z-10 font-serif text-lg">3</div>
                        <div className="flex-1 md:text-right pl-24 md:pl-0">
                            <h3 className="font-serif text-2xl mb-2">Développement</h3>
                            <p className="text-muted-foreground text-sm">Sprints de 2 semaines. Code propre, modulaire et documenté. Intégration continue.</p>
                        </div>
                        <div className="flex-1 pl-24 md:pl-0">
                            <div className="aspect-video bg-muted border border-border relative">
                                <img src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Code+Editor" className="w-full h-full object-cover" alt="Dev" />
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                        <div className="absolute left-8 md:left-1/2 -ml-[19px] w-10 h-10 bg-primary text-white flex items-center justify-center z-10 font-serif text-lg">4</div>
                        <div className="flex-1 md:text-left pl-24 md:pl-0">
                            <h3 className="font-serif text-2xl mb-2">Recettage (QA)</h3>
                            <p className="text-muted-foreground text-sm">Tests automatisés et manuels. Validation par vos équipes clés.</p>
                        </div>
                        <div className="flex-1 pl-24 md:pl-0">
                            <div className="aspect-video bg-muted border border-border relative">
                                <img src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Quality+Check" className="w-full h-full object-cover" alt="QA" />
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="absolute left-8 md:left-1/2 -ml-[19px] w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center z-10 font-serif text-lg">5</div>
                        <div className="flex-1 md:text-right pl-24 md:pl-0">
                            <h3 className="font-serif text-2xl mb-2">Déploiement</h3>
                            <p className="text-muted-foreground text-sm">Go-Live sans interruption. Formation des utilisateurs et support dédié.</p>
                        </div>
                        <div className="flex-1 pl-24 md:pl-0">
                            <div className="aspect-video bg-muted border border-border relative">
                                <img src="https://placehold.co/400x225/1B3C53/FFFFFF/png?text=Rocket+Launch" className="w-full h-full object-cover" alt="Live" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
