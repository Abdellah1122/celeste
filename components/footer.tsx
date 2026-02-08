export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-12 overflow-hidden relative">
      {/* Massive Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="font-serif font-black text-[18vw] leading-none whitespace-nowrap italic">CÉLESTE</span>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6 lg:col-span-4">
            <span className="font-serif text-3xl md:text-5xl block mb-6 leading-tight">
              L'Art du <br /> <span className="italic">Digital</span>
            </span>
            <p className="font-sans text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              CÉLESTE est un atelier numérique où la technologie rencontre l'artisanat. Nous construisons des architectures digitales pour les visionnaires.
            </p>
          </div>

          <div className="md:col-start-7 md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 opacity-50">Exploration</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm">
              <li><a href="/methodology" className="hover:text-primary-foreground/60 transition-colors block w-fit underline-offset-4 hover:underline">Méthodologie</a></li>
              <li><a href="/technology" className="hover:text-primary-foreground/60 transition-colors block w-fit underline-offset-4 hover:underline">Technologie</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground/60 transition-colors block w-fit underline-offset-4 hover:underline">Contact</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground/60 transition-colors block w-fit underline-offset-4 hover:underline">Demander un Devis</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 opacity-50">Réseaux</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm">
              <li><a href="#" className="hover:text-primary-foreground/60 transition-colors block w-fit">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary-foreground/60 transition-colors block w-fit">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-foreground/60 transition-colors block w-fit">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] text-primary-foreground/40 uppercase tracking-widest">
            © {currentYear} CÉLESTE. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-sans text-[10px] text-primary-foreground/40 hover:text-primary-foreground uppercase tracking-widest transition-colors">Confidentialité</a>
            <a href="#" className="font-sans text-[10px] text-primary-foreground/40 hover:text-primary-foreground uppercase tracking-widest transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
