import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-40 bg-[#1B3C53] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-700">
          Commencer
        </span>
        <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-tight">
          Prêt à Marquer <br /> <span className="italic text-white/70">l'Histoire</span> ?
        </h2>
        <p className="text-xl md:text-2xl text-white/60 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
          Transformons votre vision en une réalité digitale d'exception.
        </p>

        <Button asChild size="lg" className="rounded-none bg-white text-[#1B3C53] hover:bg-white/90 px-12 py-8 text-sm uppercase tracking-widest transition-all hover:scale-105">
          <Link href="/contact">
            Démarrer un projet
          </Link>
        </Button>
      </div>
    </section>
  )
}
