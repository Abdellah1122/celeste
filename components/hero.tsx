import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 bg-background flex flex-col items-center text-center px-6">
      {/* Badge / Label */}
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Artistic Tech Solutions
      </span>

      {/* Headline */}
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 max-w-5xl mx-auto leading-[1.1]">
        Where Creativity Meets <span className="italic">Technology</span>
      </h1>

      {/* Subheadline */}
      <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed tracking-wide">
        CÉLESTE transforms your wildest digital ideas into artistic masterpieces. We blend cutting-edge technology with creative excellence.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mb-24">
        <Button size="lg" className="rounded-none px-10 h-12 text-xs uppercase tracking-widest border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all">
          Explore Our Work
        </Button>
        <Button size="lg" variant="outline" className="rounded-none px-10 h-12 text-xs uppercase tracking-widest border-primary/20 hover:border-primary hover:bg-transparent text-foreground transition-all">
          Get in Touch
        </Button>
      </div>

      {/* Image / Visual - Sharp corners */}
      <div className="w-full max-w-7xl aspect-[16/9] relative bg-muted overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="Artistic digital experience"
          fill
          className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
          priority
        />
        {/* Overlay for text readability if needed, or aesthetic tint */}
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none" />
      </div>
    </section>
  )
}
