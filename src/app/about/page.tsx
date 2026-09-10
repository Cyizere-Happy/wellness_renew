import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'About Us | Wellness Renew',
  description:
    'Learn about Wellness Renew — our mission, our founder, and our compassionate approach to counselling, life coaching and personal wellbeing support.',
}

const VALUES = [
  {
    number: '01',
    title: 'Compassion First',
    body: 'Every interaction begins with genuine care. We meet you exactly where you are, without judgement, without pressure.',
  },
  {
    number: '02',
    title: 'Evidence-Informed',
    body: 'Our practitioners blend clinical expertise with holistic wisdom, ensuring every session is both grounded and transformative.',
  },
  {
    number: '03',
    title: 'Lasting Change',
    body: 'We are not interested in quick fixes. We help you build sustainable habits, patterns and beliefs that last a lifetime.',
  },
  {
    number: '04',
    title: 'Human Connection',
    body: 'Real change happens in relationship. Our approach prioritises authentic connection as the foundation for healing.',
  },
]

const STATS = [
  { value: '500+', label: 'Lives Transformed' },
  { value: '8+', label: 'Years of Practice' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4', label: 'Core Services' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          id="about-hero"
          aria-label="About hero"
          className="relative h-[75vh] min-h-[560px] flex items-end bg-charcoal"
        >
          {/* Background layer: overflow-hidden so image/overlays stay clipped */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/about-hero.jpg"
              alt="A compassionate wellness consultation in a warm, beautifully designed space"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          {/* Hero text anchored to bottom-left */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-16 lg:pb-24">
            <p className="text-[#d1decb] text-[10px] tracking-[0.4em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight max-w-3xl">
              Wellbeing rooted<br />in compassion.
            </h1>
          </div>

          {/* Decorative signature W — lives OUTSIDE overflow-hidden, bleeds into next section */}
          <div
            className="absolute pointer-events-none select-none text-[#d1decb] leading-none z-20"
            style={{
              fontFamily: '"Alex Brush", cursive',
              fontSize: 'clamp(200px, 28vw, 400px)',
              bottom: '-24vh',
              right: '6vw',
              opacity: 0.75,
            }}
          >
            W
          </div>
        </section>

        {/* ── MISSION STATEMENT ────────────────────────────────────── */}
        <section
          id="about-mission"
          aria-label="Our mission"
          className="bg-[#f5f4f0] py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sage text-[10px] tracking-[0.35em] uppercase font-medium mb-5">
                What We Stand For
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-8">
                Transforming lives through<br />
                <em>genuine human connection.</em>
              </h2>
              <div className="w-12 h-[1.5px] bg-[#d1decb] mb-8" />
              <p className="text-charcoal/60 text-[15px] leading-[1.9] mb-6">
                Wellness Renew was founded on a simple but powerful belief: that every person deserves access to compassionate, professional wellbeing support — without the stigma, without the complexity, and without feeling like a number.
              </p>
              <p className="text-charcoal/60 text-[15px] leading-[1.9]">
                We are a modern wellbeing platform built around the understanding that healing is not linear, and that lasting transformation requires patience, expertise, and above all — a genuine human connection.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-charcoal/10 rounded-2xl overflow-hidden shadow-xl">
              {STATS.map(({ value, label }) => (
                <div key={label} className="bg-white p-10 flex flex-col justify-center">
                  <span
                    className="font-serif text-5xl text-charcoal mb-2"
                    style={{ color: '#3b5238' }}
                  >
                    {value}
                  </span>
                  <span className="text-charcoal/50 text-xs tracking-[0.15em] uppercase font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER ──────────────────────────────────────────────── */}
        <section
          id="about-founder"
          aria-label="Our founder"
          className="bg-[#d1decb] py-20 lg:py-28 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-2xl">
                <Image
                  src="/images/about-founder.jpg"
                  alt="Wellness Renew founder in a natural garden setting"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              {/* Floating credential card */}
              <div className="absolute -bottom-5 -right-4 lg:right-4 bg-white rounded-xl px-6 py-4 shadow-xl max-w-[200px]">
                <p className="text-charcoal text-xs font-bold tracking-wide mb-1">Accredited Practitioner</p>
                <p className="text-charcoal/50 text-[10px] leading-relaxed">BACP Member · CIPD Certified · 8+ Years Experience</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sage-dark text-[10px] tracking-[0.35em] uppercase font-medium mb-5">
                Meet the Founder
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-6">
                A passion for helping<br />people truly <em>flourish.</em>
              </h2>
              <div className="w-12 h-[1.5px] bg-charcoal/30 mb-8" />
              <p className="text-charcoal/70 text-[15px] leading-[1.9] mb-5">
                With over eight years of clinical and coaching experience, our founder created Wellness Renew after recognising a fundamental gap in the market: professional wellbeing support that actually feels <em>human.</em>
              </p>
              <p className="text-charcoal/70 text-[15px] leading-[1.9] mb-10">
                Holding accreditations from the BACP and CIPD, and with a background spanning private therapy, corporate wellness and community support, she brings a rare breadth of experience to every client relationship — whether individual, group or organisational.
              </p>
              <blockquote className="border-l-2 border-charcoal/30 pl-6 italic font-serif text-xl text-charcoal/80 leading-relaxed mb-10">
                "I started Wellness Renew because I believe that wellbeing is not a luxury. It is a right — and I am committed to making it accessible, effective, and genuinely life-changing."
              </blockquote>
              <Link
                href="#contact"
                id="about-founder-cta"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal hover:bg-[#2a2a24] text-[#f5f4f0] text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-xl"
              >
                Work With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────────── */}
        <section
          id="about-values"
          aria-label="Our values"
          className="bg-white py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-xl mb-16">
              <p className="text-sage text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
                Our Principles
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-[1.1]">
                The values that guide<br />everything we do.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8 rounded-2xl overflow-hidden">
              {VALUES.map(({ number, title, body }) => (
                <div
                  key={number}
                  className="bg-white p-8 lg:p-10 group hover:bg-[#d1decb] transition-colors duration-500"
                >
                  <span className="font-serif text-4xl text-[#d1decb] group-hover:text-white/60 transition-colors duration-500 mb-6 block">
                    {number}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal mb-4 leading-snug">
                    {title}
                  </h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
