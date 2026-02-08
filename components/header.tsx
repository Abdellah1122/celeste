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

          {/* SOLUTIONS MEGA MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors focus:outline-none group">
              Solutions <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-none border-border/40 bg-white/95 backdrop-blur-xl p-6 w-[900px] shadow-2xl grid grid-cols-3 gap-8 ml-12">

              {/* Column 1 */}
              <div className="space-y-4">
                <div>
                  <Link href="/solutions/hospitality" className="text-xs font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary mb-2 block">Hôtellerie & Restauration</Link>
                  <div className="flex flex-col gap-1 pl-2 border-l border-[#1B3C53]/10">
                    <Link href="/solutions/hospitality/hms" className="text-sm text-muted-foreground hover:text-[#1B3C53]">HMS (Système Hôtelier)</Link>
                    <Link href="/solutions/hospitality/restaurant" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Restaurant & POS</Link>
                    <Link href="/solutions/hospitality/bars" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Bars & Pubs</Link>
                    <Link href="/solutions/hospitality/food-distribution" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Distribution F&B</Link>
                  </div>
                </div>
                <div>
                  <Link href="/solutions/corporate" className="text-xs font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary mb-2 block pt-2">Corporate</Link>
                  <div className="flex flex-col gap-1 pl-2 border-l border-[#1B3C53]/10">
                    <Link href="/solutions/corporate/accounting-firm" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Cabinet Comptable</Link>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div>
                  <Link href="/solutions/retail" className="text-xs font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary mb-2 block">Retail & Commerce</Link>
                  <div className="flex flex-col gap-1 pl-2 border-l border-[#1B3C53]/10">
                    <Link href="/solutions/retail/cosmetics" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Cosmetics Store</Link>
                    <Link href="/solutions/retail/furniture" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Furniture Store</Link>
                    <Link href="/solutions/retail/automotive" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Pièces Auto</Link>
                    <Link href="/solutions/retail/pharmacy" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Pharmacie</Link>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <div>
                  <Link href="/solutions/wellness" className="text-xs font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary mb-2 block">Services & Wellness</Link>
                  <div className="flex flex-col gap-1 pl-2 border-l border-[#1B3C53]/10">
                    <Link href="/solutions/wellness/hair-salon" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Hair Salon</Link>
                    <Link href="/solutions/wellness/sports-club" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Sports Club</Link>
                    <Link href="/solutions/wellness/fitness" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Fitness Center</Link>
                  </div>
                </div>
                <div>
                  <Link href="/solutions/real-estate" className="text-xs font-bold uppercase tracking-widest text-[#1B3C53] hover:text-primary mb-2 block pt-2">Immobilier</Link>
                  <div className="flex flex-col gap-1 pl-2 border-l border-[#1B3C53]/10">
                    <Link href="/solutions/real-estate/agency" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Agence Immobilière</Link>
                    <Link href="/solutions/real-estate/property-management" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Syndic & Gestion</Link>
                    <Link href="/solutions/real-estate/construction" className="text-sm text-muted-foreground hover:text-[#1B3C53]">Construction (BTP)</Link>
                  </div>
                </div>
              </div>

            </DropdownMenuContent>
          </DropdownMenu>

          {/* SERVICES DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors focus:outline-none group">
              Services <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-none border-border/40 bg-white/95 backdrop-blur-xl p-2 w-64 shadow-2xl">
              <DropdownMenuItem asChild>
                <Link href="/services/custom-development" className="cursor-pointer text-xs uppercase tracking-widest py-3 px-4 focus:bg-primary/5 focus:text-primary">
                  Développement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/digital-marketing" className="cursor-pointer text-xs uppercase tracking-widest py-3 px-4 focus:bg-primary/5 focus:text-primary">
                  Digital Marketing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/consulting" className="cursor-pointer text-xs uppercase tracking-widest py-3 px-4 focus:bg-primary/5 focus:text-primary">
                  Conseil Stratégique
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/methodology" className="text-xs uppercase tracking-[0.2em] text-[#1B3C53] hover:opacity-70 transition-all hover:tracking-[0.25em]">
            Méthodologie
          </Link>
          <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] text-[#1B3C53] hover:opacity-70 transition-all hover:tracking-[0.25em]">
            Réalisations
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
              <Link href="/solutions/hospitality" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Hôtellerie</Link>
              <Link href="/solutions/hospitality/hms" className="block text-sm text-foreground/60 pl-8" onClick={() => setIsOpen(false)}>HMS System</Link>
              <Link href="/solutions/hospitality/restaurant" className="block text-sm text-foreground/60 pl-8" onClick={() => setIsOpen(false)}>Restaurant POS</Link>

              <Link href="/solutions/retail" className="block text-lg font-serif text-foreground/80 pl-4 pt-2" onClick={() => setIsOpen(false)}>Retail</Link>
              <Link href="/solutions/retail/cosmetics" className="block text-sm text-foreground/60 pl-8" onClick={() => setIsOpen(false)}>Cosmetics</Link>
              <Link href="/solutions/retail/pharmacy" className="block text-sm text-foreground/60 pl-8" onClick={() => setIsOpen(false)}>Pharmacie</Link>

              <Link href="/solutions/wellness" className="block text-lg font-serif text-foreground/80 pl-4 pt-2" onClick={() => setIsOpen(false)}>Wellness</Link>
              <Link href="/solutions/real-estate" className="block text-lg font-serif text-foreground/80 pl-4 pt-2" onClick={() => setIsOpen(false)}>Immobilier</Link>

              <p className="text-xs uppercase text-muted-foreground mb-4 border-b border-border pb-2 pt-4">Services</p>
              <Link href="/services/custom-development" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Développement</Link>
              <Link href="/services/digital-marketing" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Marketing</Link>
              <Link href="/services/consulting" className="block text-lg font-serif text-foreground/80 pl-4" onClick={() => setIsOpen(false)}>Conseil</Link>
            </div>

            <div className="space-y-6 pt-6 border-t border-border/50">
              <Link href="/methodology" className="block text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>Méthodologie</Link>
              <Link href="/portfolio" className="block text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>Réalisations</Link>
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
