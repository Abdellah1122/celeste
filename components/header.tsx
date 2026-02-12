'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 text-[#1B3C53] border-b border-[#1B3C53]/10">
      <nav className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Logo */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/" className="font-serif font-bold text-xl text-foreground">CÉLESTE</Link>
        </div>

        {/* Desktop Navigation - Left */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-start">

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors focus:outline-none group">
              Solutions <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-none border-border/40 bg-white/95 backdrop-blur-xl p-6 w-[300px] shadow-2xl flex flex-col gap-4">
              <Link href="/solutions/rh-solution" className="text-sm font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary transition-colors">
                Céleste RH
              </Link>
              <Link href="/solutions/real-estate" className="text-sm font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary transition-colors">
                Céleste Immobilier
              </Link>
              <Link href="/solutions/hospitality" className="text-sm font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary transition-colors">
                Céleste Hôtellerie
              </Link>
              <Link href="/solutions/retail-pos" className="text-sm font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary transition-colors">
                Céleste Caisse
              </Link>
              <Link href="/solutions/beauty-spa" className="text-sm font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary transition-colors">
                Céleste Salon
              </Link>
              <Link href="/solutions/restaurant" className="text-sm font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary transition-colors">
                Céleste Restauration
              </Link>

            </DropdownMenuContent>
          </DropdownMenu>



          <Link href="/methodology" className="text-xs uppercase tracking-[0.2em] text-[#1B3C53] hover:opacity-70 transition-all hover:tracking-[0.25em]">
            Méthodologie
          </Link>
        </div>

        {/* Desktop Logo - Center */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <Link href="/" className="font-serif font-bold text-3xl text-foreground tracking-tight hover:opacity-80 transition-opacity">
            CÉLESTE
          </Link>
        </div>

        {/* Desktop Navigation - Right */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          <Link href="/technology" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all hover:tracking-[0.25em]">
            Technologie
          </Link>
          <Button asChild size="sm" className="rounded-none px-6 h-9 text-[10px] uppercase tracking-widest border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all">
            <Link href="/contact">
              Demander un Devis
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b border-border/40 p-6 flex flex-col gap-6 md:hidden shadow-2xl h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-6">
              <p className="text-xs uppercase text-muted-foreground mb-4 border-b border-border pb-2">Solutions</p>
              <Link href="/solutions/rh-solution" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Céleste RH</Link>
              <Link href="/solutions/real-estate" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Céleste Immobilier</Link>
              <Link href="/solutions/hospitality" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Céleste Hôtellerie</Link>
              <Link href="/solutions/retail-pos" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Céleste Caisse</Link>
              <Link href="/solutions/beauty-spa" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Céleste Salon</Link>
              <Link href="/solutions/restaurant" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Céleste Restauration</Link>


            </div>

            <div className="space-y-6 pt-6 border-t border-border/50">
              <Link href="/methodology" className="block text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>Méthodologie</Link>
              <Link href="/technology" className="block text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>Technologie</Link>
            </div>

            <div className="pt-6 mt-auto">
              <Button asChild size="lg" className="w-full rounded-none text-xs uppercase tracking-widest">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Demander un Devis</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
