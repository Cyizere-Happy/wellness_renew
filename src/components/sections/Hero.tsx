import Image from 'next/image'
import BookingButton from '@/components/ui/BookingButton'
import Reveal from '@/components/anim/Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative h-screen min-h-[700px] flex items-center bg-charcoal"
    >
      {/* Background Layer: Contains image, gradients, and SVG.
          Uses overflow-hidden so they don't bleed out, allowing the W to escape the section. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background image - FULL WIDTH */}
      <Image
        src="/images/hero-meditation.jpg"
        alt="A calm, welcoming wellbeing consultation space"
        fill
        priority
        className="object-cover object-center anim-kenburns"
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0" />

      {/* ── The Architectural Swoop (The Thick Connecting Line) ──
          Moved slightly inward from the right edge as requested. */}
      <svg
        className="absolute top-0 right-[4vw] h-[105%] w-[30vw] text-[#f5f4f0] fill-current z-10 pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Slants down-left */}
        <path d="M70,0 L100,0 C100,30 60,70 30,100 L0,100 C40,70 70,30 70,0 Z" />
      </svg>
      </div>

      {/* ── The Signature Mark (W) ──
          Positioned to heavily overlay the white line. Padding added to prevent
          cursive font from clipping on the right edge of its bounding box. */}
      <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block overflow-visible">
        <div
          className="absolute select-none text-[#d1decb] pr-20 anim-drift"
          style={{
            fontFamily: '"Alex Brush", cursive',
            fontSize: 'clamp(180px, 28vw, 380px)',
            lineHeight: 0.8,
            bottom: '-12vh',
            right: '12vw', // Moved right to clearly overlap the white line
          }}
        >
          W
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-24">
        <div className="max-w-[600px]">
          {/* Main heading */}
          <Reveal
            as="h1"
            variant="rise"
            delay={120}
            className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] text-white leading-[1.1] tracking-tight mb-10"
          >
            Luxury wellbeing.<br />
            Transform your life.
          </Reveal>

          {/* CTA Button */}
          <Reveal variant="rise" delay={280}>
          <BookingButton
              id="hero-book-btn"
              className="anim-lift inline-flex items-center px-10 py-4 rounded-full bg-[#d1decb] hover:bg-[#c0ceb9] text-charcoal text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-200 shadow-xl"
            >
              Let&apos;s Begin
            </BookingButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
