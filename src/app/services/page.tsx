import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'
import BookingButton from '@/components/ui/BookingButton'

export const metadata: Metadata = {
  title: 'Our Services | Wellness Renew',
  description: 'Explore our bespoke wellbeing services, from personal counselling to healthcare staffing.',
}

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f4f0] min-h-screen">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-32 overflow-hidden selection:bg-charcoal selection:text-white">
        
        {/* ── INTRO CLUSTER ─────────────────────────────────── */}
        <div className="relative max-w-7xl mx-auto px-8 lg:px-16 min-h-[40vh] mb-20 lg:mb-40 flex items-center">
          
          {/* Scattered Text */}
          <div className="absolute top-10 left-8 lg:left-16 text-charcoal/40 text-[8px] tracking-[0.4em] uppercase leading-[2]">
            <p>01 / 04</p>
            <p>Discover</p>
            <p>Your Center</p>
          </div>

          <div className="absolute bottom-0 right-10 lg:right-32 text-charcoal/40 text-[8px] tracking-[0.4em] uppercase text-right leading-[2] hidden md:block">
            <p>Every piece</p>
            <p>of you matters</p>
            <p>until the rest</p>
            <p>you find.</p>
          </div>

          {/* Main Title */}
          <div className="z-10 mt-20 lg:mt-0 lg:ml-24 max-w-2xl">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] text-charcoal leading-[0.9] tracking-tight">
              Bespoke<br />
              <span className="text-sage italic ml-10 lg:ml-20">Wellbeing</span>
            </h1>
            
            <div className="mt-12 lg:mt-20 lg:ml-32 max-w-sm">
              <p className="text-charcoal/70 text-xs leading-[2] uppercase tracking-[0.15em] font-medium mb-6">
                A tailored approach to healing.
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                We believe in transforming ordinary spaces into extraordinary experiences of self-discovery. Explore our core pillars of support.
              </p>
            </div>
          </div>

          {/* Decorative Abstract Image (Top Right) */}
          <div className="absolute -top-10 right-0 lg:right-10 w-64 h-80 opacity-20 pointer-events-none hidden lg:block">
            <Image src="/images/hero-nature.jpg" alt="" fill className="object-cover rounded-full blur-[2px]" />
          </div>
        </div>

        {/* ── COLLAGE GRID ──────────────────────────────────── */}
        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          
          {/* Vertical joining line (decorative) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal/5 hidden lg:block" />

          {/* SERVICE 01: COUNSELLING */}
          <section className="relative grid lg:grid-cols-12 gap-8 items-center mb-32 lg:mb-64">
            
            {/* Collage Image Cluster */}
            <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full">
              {/* Background abstract */}
              <div className="absolute bottom-10 left-0 w-3/4 h-3/4 opacity-40 grayscale sepia">
                <Image src="/images/hero-nature-new.png" alt="" fill className="object-cover rounded-3xl" />
              </div>
              
              {/* Main Polaroid */}
              <div className="absolute top-10 right-0 w-4/5 h-[80%] bg-white p-3 shadow-2xl z-10 rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="relative w-full h-full overflow-hidden">
                  <Image src="/images/counselling.png" alt="Counselling Session" fill className="object-cover" />
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -left-4 top-1/3 w-32 h-40 bg-charcoal p-1 shadow-xl z-20 -rotate-6">
                <div className="relative w-full h-full overflow-hidden grayscale">
                  <Image src="/images/hero-room.png" alt="" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="lg:col-span-4 lg:col-start-9 relative z-20">
              <span className="block font-serif text-charcoal/20 text-8xl leading-none absolute -top-16 -left-10 select-none">01</span>
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-semibold mb-4">Therapy</p>
              <h2 className="font-serif text-4xl text-charcoal mb-6">Compassionate<br />Counselling</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                A safe, non-judgemental space to explore your thoughts and feelings. Our person-centred approach ensures you are heard, validated, and supported at every step of your journey.
              </p>
              <BookingButton className="group inline-flex items-center gap-4">
                <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal">Book a session</span>
              </BookingButton>
            </div>
          </section>

          {/* SERVICE 02: LIFE COACHING */}
          <section className="relative grid lg:grid-cols-12 gap-8 items-center mb-32 lg:mb-64">
            
            {/* Text Block (Left on Desktop) */}
            <div className="lg:col-span-4 lg:col-start-2 relative z-20 order-2 lg:order-1 text-right lg:text-left">
              <span className="block font-serif text-charcoal/20 text-8xl leading-none absolute -top-16 -right-10 lg:-right-0 lg:left-32 select-none">02</span>
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-semibold mb-4">Guidance</p>
              <h2 className="font-serif text-4xl text-charcoal mb-6">Strategic<br />Life Coaching</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                Bridge the gap between where you are and where you want to be. We help you identify roadblocks, set actionable goals, and build the confidence to achieve them.
              </p>
              <BookingButton className="group inline-flex items-center gap-4 flex-row-reverse lg:flex-row">
                <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal">Find your path</span>
              </BookingButton>
            </div>

            {/* Collage Image Cluster */}
            <div className="lg:col-span-6 lg:col-start-7 relative h-[60vh] lg:h-[75vh] w-full order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-full h-[90%] bg-[#d1decb] rounded-t-full overflow-hidden shadow-xl">
                <Image src="/images/life-coaching.png" alt="Life Coaching" fill className="object-cover mix-blend-multiply opacity-80" />
              </div>
              
              {/* Scattered Text near image */}
              <div className="absolute bottom-10 -left-20 text-charcoal/40 text-[8px] tracking-[0.4em] uppercase leading-[2] hidden lg:block">
                <p>Clarity.</p>
                <p>Focus.</p>
                <p>Direction.</p>
              </div>
            </div>
          </section>

          {/* SERVICE 03: PERSONAL EMPOWERMENT */}
          <section className="relative grid lg:grid-cols-12 gap-8 items-center mb-32 lg:mb-64">
            
            <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full">
              {/* Main Image */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[85%] h-[85%] shadow-2xl z-10">
                <Image src="/images/empowerment.png" alt="Personal Empowerment" fill className="object-cover" />
              </div>

              {/* Texture Overlay */}
              <div className="absolute -top-10 right-10 w-48 h-64 bg-sage-dark/10 p-2 shadow-sm z-0 translate-x-12 rotate-3">
                <div className="relative w-full h-full border border-charcoal/10" />
              </div>
              
              <div className="absolute -bottom-8 right-20 w-32 h-32 rounded-full overflow-hidden shadow-xl z-20">
                <Image src="/images/deep-tissue.png" alt="" fill className="object-cover grayscale" />
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 relative z-20">
              <span className="block font-serif text-charcoal/20 text-8xl leading-none absolute -top-16 -left-10 select-none">03</span>
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-semibold mb-4">Strength</p>
              <h2 className="font-serif text-4xl text-charcoal mb-6">Personal<br />Empowerment</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                Reclaim your narrative. Through dedicated workshops and one-on-one sessions, we help you uncover your innate strength and build profound self-reliance.
              </p>
              <BookingButton className="group inline-flex items-center gap-4">
                <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal">Take Control</span>
              </BookingButton>
            </div>
          </section>

          {/* SERVICE 04: HEALTHCARE STAFFING */}
          <section className="relative grid lg:grid-cols-12 gap-8 items-center mb-20 lg:mb-32">
            
            <div className="lg:col-span-4 lg:col-start-2 relative z-20 order-2 lg:order-1 text-right lg:text-left">
              <span className="block font-serif text-charcoal/20 text-8xl leading-none absolute -top-16 -right-10 lg:-right-0 lg:left-32 select-none">04</span>
              <p className="text-sage text-[9px] tracking-[0.3em] uppercase font-semibold mb-4">Organisational</p>
              <h2 className="font-serif text-4xl text-charcoal mb-6">Healthcare<br />Staffing</h2>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                Providing skilled, compassionate professionals to healthcare organisations. We ensure your team is supported by individuals who truly understand the demands of care.
              </p>
              <BookingButton className="group inline-flex items-center gap-4 flex-row-reverse lg:flex-row">
                <span className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal">Enquire Now</span>
              </BookingButton>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 relative h-[60vh] lg:h-[70vh] w-full order-1 lg:order-2">
              <div className="absolute inset-0 bg-charcoal p-2 shadow-2xl -rotate-2 hover:rotate-1 transition-transform duration-700 z-10">
                <div className="relative w-full h-full">
                  <Image src="/images/healthcare.png" alt="Healthcare Staffing" fill className="object-cover opacity-90" />
                </div>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-24 text-[#d1decb] leading-none z-0 pointer-events-none opacity-30 select-none"
                style={{ fontFamily: '"Alex Brush", cursive', fontSize: 'clamp(150px, 20vw, 300px)' }}
              >W</div>
            </div>
          </section>

        </div>

        {/* ── FOOTER SCATTER CTA ────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-8 py-32 text-center relative">
          <div className="absolute top-10 left-10 text-charcoal/40 text-[8px] tracking-[0.4em] uppercase hidden md:block">
            <p>Ready to</p>
            <p>Begin?</p>
          </div>
          <div className="absolute bottom-20 right-10 text-charcoal/40 text-[8px] tracking-[0.4em] uppercase hidden md:block">
            <p>Your journey</p>
            <p>awaits.</p>
          </div>

          <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-10">
            Let&apos;s piece it all together.
          </h3>
          
          <BookingButton className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-charcoal hover:bg-[#2a2a24] text-[#f5f4f0] text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-xl hover:scale-105">
            Book your consultation
          </BookingButton>
        </div>

      </main>

      <Footer />
    </div>
  )
}
