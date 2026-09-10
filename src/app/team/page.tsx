import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/anim/Reveal'

export const metadata: Metadata = {
  title: 'Our Team | Wellness Renew',
  description: 'Meet the compassionate and highly accredited practitioners at Wellness Renew.',
}

const TEAM = [
  {
    id: 'eleanor',
    name: 'Dr. Eleanor Vance',
    role: 'Clinical Lead & Psychologist',
    image: '/images/team-eleanor.jpg',
    bio: 'With over two decades of clinical experience, Eleanor specialises in trauma-informed therapy and deep cognitive restructuring. She believes in creating a profound space of safety where true healing can unfold.',
    accreditations: 'PhD, HCPC Registered, BPS Chartered',
  },
  {
    id: 'james',
    name: 'James Sterling',
    role: 'Strategic Life Coach',
    image: '/images/team-james.jpg',
    bio: 'James brings a grounded, strategic approach to personal growth. Coming from a background in corporate leadership, he now dedicates his time to helping individuals find clarity, purpose, and actionable direction in their lives.',
    accreditations: 'ICF Professional Certified Coach',
  },
  {
    id: 'maya',
    name: 'Dr. Maya Patel',
    role: 'Holistic Therapist',
    image: '/images/team-maya.jpg',
    bio: 'Integrating traditional psychotherapeutic methods with somatic and holistic practices, Maya helps clients bridge the gap between mind and body, addressing anxiety and burnout at their root.',
    accreditations: 'DClinPsy, BACP Accredited',
  },
]

export default function TeamPage() {
  return (
    <div className="bg-[#f5f4f0] min-h-screen">
      <Navbar />

      <main className="pt-32 lg:pt-40 pb-32">
        {/* ── HEADER ──────────────────────────────────────────── */}
        <Reveal stagger className="max-w-7xl mx-auto px-8 lg:px-16 mb-20 lg:mb-32 text-center">
          <p className="text-sage text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
            The Practitioners
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] text-charcoal leading-[1.0] tracking-tight mb-8">
            Guided by <em>expertise</em>.<br />
            Rooted in <em>empathy</em>.
          </h1>
          <p className="max-w-2xl mx-auto text-charcoal/60 text-[15px] leading-[1.9]">
            We are a collective of highly accredited psychologists, therapists, and coaches dedicated to one common goal: providing compassionate, evidence-based support that truly transforms lives.
          </p>
        </Reveal>

        {/* ── TEAM GRID ───────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <Reveal stagger childY={40} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {TEAM.map((member, i) => (
              <div
                key={member.id}
                className={`anim-card group ${i === 1 ? 'lg:mt-24' : ''}`} // Offset the middle item on large screens
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl mb-8 bg-charcoal/5">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <p className="text-sage-dark text-[9px] tracking-[0.2em] uppercase font-bold mb-2">
                    {member.role}
                  </p>
                  <h2 className="font-serif text-3xl text-charcoal mb-4">
                    {member.name}
                  </h2>
                  <div className="w-8 h-[1px] bg-charcoal/20 mx-auto mb-5" />
                  <p className="text-charcoal/65 text-[13px] leading-[1.8] mb-5 line-clamp-4">
                    {member.bio}
                  </p>
                  <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.1em] font-medium">
                    {member.accreditations}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-8 mt-32 lg:mt-48 text-center">
          <Reveal variant="image" className="inline-block p-10 lg:p-16 rounded-[3rem] bg-[#d1decb] w-full relative overflow-hidden">
             {/* Decorative W in background */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="anim-sway block text-sage-dark/10 leading-none select-none"
                style={{ fontFamily: '"Alex Brush", cursive', fontSize: '300px' }}
              >W</span>
             </div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4">
                Ready to find your match?
              </h3>
              <p className="text-charcoal/70 text-sm mb-8 max-w-md mx-auto">
                Book a free initial consultation and we will pair you with the practitioner best suited to your needs.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center px-10 py-4 rounded-full bg-charcoal hover:bg-[#2a2a24] text-[#f5f4f0] text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-xl hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>

      </main>

      <Footer />
    </div>
  )
}
