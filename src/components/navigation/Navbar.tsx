'use client'

import { useState } from 'react'
import Link from 'next/link'
import BookingButton from '@/components/ui/BookingButton'

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'TEAM', href: '/team' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      role="banner"
      className="absolute top-0 left-0 right-0 z-50 bg-[#f5f4f0] rounded-b-[2rem] lg:rounded-b-[2.5rem] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" aria-label="Wellness Renew home" className="flex items-center gap-3 shrink-0 group">
          <div className="flex flex-col leading-[1.1]">
            <span className="font-serif text-charcoal text-xl italic tracking-tight">Wellness</span>
            <span className="text-charcoal/50 text-[8px] font-medium tracking-[0.35em] uppercase">Renew</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-charcoal/70 text-[10px] font-medium tracking-[0.18em] uppercase hover:text-charcoal transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <BookingButton
            id="nav-cta-btn"
            className="hidden lg:inline-flex items-center px-8 py-3.5 rounded-full bg-[#d1decb] hover:bg-[#c0ceb9] text-charcoal text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Start Here
          </BookingButton>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            id="mobile-menu-toggle"
          >
            <span className={`block w-5 h-[1.5px] bg-charcoal origin-center transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-charcoal origin-center transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#f5f4f0] border-t border-charcoal/10 px-8 py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-3.5 text-charcoal/60 text-xs font-medium tracking-[0.15em] uppercase border-b border-charcoal/5 hover:text-charcoal transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block text-center py-3 bg-charcoal text-[#f5f4f0] text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          >
            Start Here
          </Link>
        </div>
      </div>
    </header>
  )
}
