'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/anim/Reveal'

const SERVICES = [
  {
    id: 'counselling',
    title: 'Counselling',
    description:
      'Individual, confidential counselling to help you process emotions, understand patterns and move forward with greater clarity, peace of mind and renewed hope.',
    image: '/images/counselling.png',
    alt: 'Compassionate counselling session in a warm, welcoming space',
    tag: 'For Individuals',
  },
  {
    id: 'life-coaching',
    title: 'Life Coaching',
    description:
      'Goal-focused, empowering sessions designed to help you identify what you truly want, overcome obstacles and build a life genuinely aligned with your values and vision.',
    image: '/images/life-coaching.png',
    alt: 'Empowering life coaching session with natural light',
    tag: 'For Individuals',
  },
  {
    id: 'empowerment',
    title: 'Personal Empowerment',
    description:
      'Rebuild your confidence, rediscover your strengths and develop the resilience and self-belief you need to face life\'s challenges with renewed purpose and direction.',
    image: '/images/empowerment.png',
    alt: 'Person feeling confident and empowered in nature',
    tag: 'For Individuals',
  },
  {
    id: 'healthcare-staffing',
    title: 'Healthcare Staffing',
    description:
      'Reliable, compassionate healthcare assistants and support workers placed with care homes, mental-health organisations and healthcare providers across the UK.',
    image: '/images/healthcare.png',
    alt: 'Compassionate healthcare support worker with a client',
    tag: 'For Organisations',
  },
  {
    id: 'group-workshops',
    title: 'Group Workshops',
    description:
      'Supportive group sessions exploring mindfulness, resilience and personal wellbeing — a safe, welcoming community space to learn, share and grow together.',
    image: '/images/counselling.png',
    alt: 'Supportive group wellbeing workshop',
    tag: 'For Groups',
  },
]

export default function ServicesCarousel() {
  const [activeIdx, setActiveIdx] = useState(1)

  const prev = () =>
    setActiveIdx((i) => (i - 1 + SERVICES.length) % SERVICES.length)
  const next = () =>
    setActiveIdx((i) => (i + 1) % SERVICES.length)

  const visibleIndices = [0, 1, 2, 3].map(
    (offset) => (activeIdx - 1 + offset + SERVICES.length) % SERVICES.length,
  )

  return (
    <section
      id="services"
      aria-label="Our wellbeing services"
      className="bg-[#d1decb] py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-32">
        {/* Section heading */}
        <Reveal variant="rise" className="text-center mb-14">
          <p className="text-sage-dark text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">
            How We Can Help
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
            Our Wellbeing Services
          </h2>
        </Reveal>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={prev}
            id="carousel-prev-btn"
            aria-label="Previous service"
            className="absolute -left-5 lg:-left-7 top-[38%] -translate-y-1/2 z-10 w-10 h-10 bg-[#2a2a26] hover:bg-sage rounded-full flex items-center justify-center text-cream/70 hover:text-cream transition-all duration-200 shadow-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards */}
          <Reveal stagger className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 items-start">
            {visibleIndices.map((serviceIdx, slotIdx) => {
              const service = SERVICES[serviceIdx]
              const isFeatured = slotIdx === 1

              return (
                <div
                  key={`${service.id}-slot${slotIdx}`}
                  className={`anim-card rounded-2xl overflow-hidden flex flex-col ${
                    isFeatured
                      ? 'bg-cream shadow-2xl shadow-black/50 ring-1 ring-tan/20'
                      : 'bg-[#4a5744]'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    {!isFeatured && <div className="absolute inset-0 bg-black/20" />}
                    {/* Tag pill */}
                    <span className={`absolute top-3 left-3 text-[10px] font-medium px-2.5 py-0.5 rounded-full ${
                      isFeatured ? 'bg-sage text-cream' : 'bg-black/40 text-cream/80 backdrop-blur-sm'
                    }`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col">
                    <h3
                      className={`font-serif text-lg leading-snug mb-2 ${
                        isFeatured ? 'text-charcoal' : 'text-cream'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mb-4 ${
                        isFeatured ? 'text-charcoal/60' : 'text-cream/45 line-clamp-2'
                      }`}
                    >
                      {service.description}
                    </p>
                    <Link
                      href={`#${service.id}`}
                      id={`service-link-${service.id}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 w-fit group ${
                        isFeatured
                          ? 'bg-sage text-cream hover:bg-sage-dark'
                          : 'bg-sage/10 text-sage-light border border-sage/20 hover:bg-sage hover:text-cream hover:border-sage'
                      }`}
                    >
                      Learn More
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </Reveal>

          {/* Right arrow */}
          <button
            onClick={next}
            id="carousel-next-btn"
            aria-label="Next service"
            className="absolute -right-5 lg:-right-7 top-[38%] -translate-y-1/2 z-10 w-10 h-10 bg-[#2a2a26] hover:bg-sage rounded-full flex items-center justify-center text-cream/70 hover:text-cream transition-all duration-200 shadow-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Service slides">
          {SERVICES.map((service, i) => (
            <button
              key={service.id}
              onClick={() => setActiveIdx(i)}
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`View ${service.title}`}
              id={`carousel-dot-${service.id}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx ? 'bg-sage-dark w-6 h-2' : 'bg-charcoal/20 w-2 h-2 hover:bg-charcoal/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
