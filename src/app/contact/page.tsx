'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/anim/Reveal'
import { useState } from 'react'

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email Us',
    value: 'hello@wellnessrenew.co.uk',
    href: 'mailto:hello@wellnessrenew.co.uk',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.29a2 2 0 0 1 1.96-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Call Us',
    value: '+44 (0) 20 0000 0000',
    href: 'tel:+442000000000',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Based In',
    value: 'United Kingdom',
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Hours',
    value: 'Mon – Fri: 9am – 6pm\nSat: 10am – 2pm',
    href: null,
  },
]

const SOCIALS = [
  { label: 'Facebook', letter: 'F', href: '#' },
  { label: 'Instagram', letter: 'I', href: '#' },
  { label: 'LinkedIn', letter: 'in', href: '#' },
]

const SERVICES_OPTIONS = [
  'Counselling',
  'Life Coaching',
  'Personal Empowerment',
  'Healthcare Staffing',
  'Group Workshops',
  'General Enquiry',
]

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          id="contact-hero"
          aria-label="Contact hero"
          className="relative h-[55vh] min-h-[420px] flex items-end bg-charcoal"
        >
          {/* Background layer: overflow-hidden so image/overlays stay clipped */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/contact-hero.jpg"
              alt="A warm, calming wellness space"
              fill priority
              className="object-cover object-center anim-kenburns"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          <Reveal stagger className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-14 lg:pb-20">
            <p className="text-[#d1decb] text-[10px] tracking-[0.4em] uppercase font-medium mb-3">Get In Touch</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight">
              Let&apos;s start a<br />conversation.
            </h1>
          </Reveal>

          {/* Decorative W - lives outside overflow-hidden */}
          <div
            className="anim-drift absolute pointer-events-none select-none text-[#d1decb] leading-none z-20"
            style={{ fontFamily: '"Alex Brush", cursive', fontSize: 'clamp(200px, 28vw, 400px)', bottom: '-24vh', right: '6vw', opacity: 0.75 }}
          >W</div>
        </section>

        {/* ── MAIN CONTENT: INFO + FORM ─────────────────────── */}
        <section
          id="contact-main"
          aria-label="Contact information and form"
          className="bg-[#f5f4f0] py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">

            {/* Left: Contact info */}
            <Reveal variant="left">
              <p className="text-sage text-[10px] tracking-[0.35em] uppercase font-medium mb-4">Reach Out</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal leading-[1.15] mb-10">
                We&apos;d love to<br />hear from you.
              </h2>

              <div className="space-y-7 mb-12">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#d1decb] flex items-center justify-center text-sage-dark shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-charcoal/40 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-charcoal text-sm font-medium hover:text-sage-dark transition-colors leading-relaxed whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-charcoal text-sm font-medium leading-relaxed whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-charcoal/10 mb-8" />

              {/* Socials */}
              <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-charcoal/40 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ label, letter, href }) => (
                  <a
                    key={label} href={href} aria-label={label}
                    className="anim-lift w-10 h-10 rounded-full border border-charcoal/15 hover:border-[#d1decb] hover:bg-[#d1decb] flex items-center justify-center text-charcoal/50 hover:text-charcoal text-[11px] font-bold transition-all duration-300"
                  >
                    {letter}
                  </a>
                ))}
              </div>

              {/* Green accent block */}
              <div className="mt-10 p-6 rounded-2xl bg-[#d1decb] border border-[#c0ceb9]">
                <p className="font-serif text-xl text-charcoal mb-2">Prefer to book directly?</p>
                <p className="text-charcoal/60 text-[13px] leading-relaxed mb-4">
                  Skip the form — book your free initial consultation in minutes.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-charcoal hover:text-sage-dark transition-colors"
                >
                  Learn about our process
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal variant="right" delay={120} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-charcoal/5 border border-charcoal/5">
              {!submitted ? (
                <>
                  <p className="text-sage text-[10px] tracking-[0.35em] uppercase font-medium mb-2">Send a Message</p>
                  <h3 className="font-serif text-2xl text-charcoal mb-7">Let&apos;s work together.</h3>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-first-name" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/45 mb-1.5">
                          First Name <span className="text-sage">*</span>
                        </label>
                        <input
                          id="contact-first-name" type="text" value={form.firstName} placeholder="Jane"
                          onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                          className={`w-full px-4 py-3 rounded-xl bg-[#f5f4f0] border text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 focus:bg-white transition-all ${errors.firstName ? 'border-red-400' : 'border-charcoal/10'}`}
                        />
                        {errors.firstName && <p className="text-red-400 text-[10px] mt-0.5">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-last-name" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/45 mb-1.5">
                          Last Name <span className="text-sage">*</span>
                        </label>
                        <input
                          id="contact-last-name" type="text" value={form.lastName} placeholder="Doe"
                          onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                          className={`w-full px-4 py-3 rounded-xl bg-[#f5f4f0] border text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 focus:bg-white transition-all ${errors.lastName ? 'border-red-400' : 'border-charcoal/10'}`}
                        />
                        {errors.lastName && <p className="text-red-400 text-[10px] mt-0.5">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/45 mb-1.5">
                          Email <span className="text-sage">*</span>
                        </label>
                        <input
                          id="contact-email" type="email" value={form.email} placeholder="hello@you.com"
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className={`w-full px-4 py-3 rounded-xl bg-[#f5f4f0] border text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 focus:bg-white transition-all ${errors.email ? 'border-red-400' : 'border-charcoal/10'}`}
                        />
                        {errors.email && <p className="text-red-400 text-[10px] mt-0.5">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/45 mb-1.5">Phone <span className="text-charcoal/25 font-normal normal-case tracking-normal">optional</span></label>
                        <input
                          id="contact-phone" type="tel" value={form.phone} placeholder="+44 000 000 0000"
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-[#f5f4f0] border border-charcoal/10 text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/45 mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        id="contact-service" value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f5f4f0] border border-charcoal/10 text-charcoal text-sm outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 focus:bg-white transition-all appearance-none cursor-pointer ${!form.service ? 'text-charcoal/35' : ''}`}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/45 mb-1.5">
                        Message <span className="text-sage">*</span>
                      </label>
                      <textarea
                        id="contact-message" rows={5} value={form.message}
                        placeholder="Tell us a little about what you're looking for. There's no pressure — just share as much as you feel comfortable with."
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f5f4f0] border text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 focus:bg-white transition-all resize-none ${errors.message ? 'border-red-400' : 'border-charcoal/10'}`}
                      />
                      {errors.message && <p className="text-red-400 text-[10px] mt-0.5">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="anim-lift w-full py-4 rounded-full bg-charcoal hover:bg-[#2a2a24] text-[#f5f4f0] text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-xl group flex items-center justify-center gap-3"
                    >
                      Send Your Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <p className="text-center text-charcoal/30 text-[11px]">
                      We respond within 1–2 business days · All enquiries are confidential
                    </p>
                  </form>
                </>
              ) : (
                /* Success state */
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#d1decb] flex items-center justify-center mx-auto mb-6">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal mb-3">Thank you, {form.firstName}!</h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                    Your message has been received. We&apos;ll be in touch within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }) }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-charcoal/15 text-charcoal text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-charcoal/5 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section
          id="contact-testimonials"
          aria-label="Client testimonials"
          className="bg-[#d1decb] py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <Reveal variant="rise" className="text-center mb-14">
              <p className="text-sage-dark text-[10px] tracking-[0.35em] uppercase font-medium mb-3">Kind Words</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">What our clients say.</h2>
            </Reveal>

            <Reveal stagger className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Working with Wellness Renew completely transformed how I approach my own mental health. I felt heard, supported, and genuinely cared for from our very first conversation.",
                  name: "Sarah M.",
                  role: "Counselling Client",
                },
                {
                  quote: "The life coaching sessions gave me the clarity and confidence I'd been searching for. I left every session feeling energised and focused on what truly matters.",
                  name: "James T.",
                  role: "Life Coaching Client",
                },
                {
                  quote: "As an organisation, we couldn't be happier with the healthcare staffing support. Professional, compassionate, and incredibly well-matched to our team's needs.",
                  name: "Dr. Priya K.",
                  role: "Healthcare Organisation",
                },
              ].map(({ quote, name, role }) => (
                <div key={name} className="anim-card bg-white rounded-2xl p-7 shadow-sm border border-charcoal/5 flex flex-col">
                  <div className="text-[#d1decb] font-serif text-5xl leading-none mb-4 text-charcoal/20">&ldquo;</div>
                  <p className="text-charcoal/70 text-sm leading-relaxed flex-1 mb-6 italic font-serif">
                    {quote}
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-charcoal/8">
                    <div className="w-9 h-9 rounded-full bg-[#d1decb] flex items-center justify-center text-charcoal font-bold text-[10px]">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-charcoal text-sm font-semibold">{name}</p>
                      <p className="text-charcoal/40 text-[11px]">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
