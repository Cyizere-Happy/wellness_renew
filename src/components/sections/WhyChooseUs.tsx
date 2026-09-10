const FEATURES = [
  {
    id: 'qualified',
    number: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: 'Qualified Practitioners',
    description:
      'Our counsellors and coaches hold recognised professional qualifications and bring extensive experience across a wide range of emotional wellbeing and life challenges.',
  },
  {
    id: 'confidential',
    number: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Safe & Confidential',
    description:
      'Your privacy matters deeply. All sessions take place in a secure, confidential environment where you can speak openly, be heard without judgement and feel genuinely safe.',
  },
  {
    id: 'personalised',
    number: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Personalised Approach',
    description:
      'No two journeys are the same. We tailor every session to your individual goals, circumstances and pace — because real progress comes from support that truly fits you.',
  },
  {
    id: 'ongoing',
    number: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Ongoing Support',
    description:
      'We are committed to your long-term wellbeing, providing continuity of care and flexible support that evolves as your needs, circumstances and goals change over time.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why choose Wellness Renew"
      className="bg-pale-green py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-32">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-24 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sage-dark text-[10px] tracking-[0.35em] uppercase mb-4 font-bold">
              Wellness Renew
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-charcoal leading-[1.1] mb-6">
              Why Choose<br />
              Wellness&nbsp;Renew?
            </h2>
            <div className="w-12 h-[2px] bg-sage/40 mb-6" />
            <p className="text-charcoal/70 leading-[1.85] text-[13px] max-w-xs">
              We believe everyone deserves access to compassionate, professional
              support. Our approach is warm, personalised and grounded in
              evidence-based practice — because your wellbeing is worth it.
            </p>

            {/* Free consultation CTA */}
            <a
              href="#contact"
              id="why-us-cta-btn"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white border border-charcoal/10 hover:border-charcoal/30 text-charcoal text-xs font-semibold rounded-full transition-all duration-200 hover:shadow-md group"
            >
              Book a Free Consultation
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right column */}
          <div className="space-y-0 divide-y divide-charcoal/10">
            {FEATURES.map((feature) => (
              <div key={feature.id} id={`feature-${feature.id}`} className="flex gap-5 py-8 group">
                <div className="shrink-0 w-11 h-11 rounded-full bg-white shadow-sm border border-charcoal/5 group-hover:border-sage/40 group-hover:bg-pale-green flex items-center justify-center text-sage-dark transition-all duration-300 mt-0.5">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sage text-[11px] font-mono font-bold tabular-nums">{feature.number}</span>
                    <h3 className="font-serif text-lg text-charcoal leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-charcoal/70 text-[13px] leading-[1.8]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
