import Link from 'next/link'
import BookingButton from '@/components/ui/BookingButton'

const SERVICES_LIST = [
  'Counselling',
  'Life Coaching',
  'Personal Empowerment',
  'Healthcare Staffing',
  'Group Workshops',
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" aria-label="Site footer" className="bg-[#1f291d]">
      {/* CTA band */}
      <div className="bg-[#d1decb] py-14">
        <div className="max-w-7xl mx-auto px-10 lg:px-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-sage-dark text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
              Take the First Step
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl text-charcoal leading-tight mb-2">
              Ready to begin your wellbeing journey?
            </h2>
            <p className="text-charcoal/70 text-xs font-medium">
              Your free initial consultation is waiting. No pressure, no commitment — just a conversation.
            </p>
          </div>
          <BookingButton
            id="footer-book-btn"
            className="shrink-0 px-8 py-3.5 bg-[#0b0f0a] hover:bg-[#1a2217] text-[#f5f4f0] text-[11px] font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Book a Free Consultation
          </BookingButton>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-10 lg:px-32 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-cream text-[10px] font-bold select-none">
              WR
            </span>
            <div>
              <span className="text-cream text-sm font-medium tracking-wide block">Wellness Renew</span>
              <span className="text-cream/35 text-[11px]">Refresh · Restore · Renew</span>
            </div>
          </div>
          <p className="text-cream/38 text-[13px] leading-[1.85] max-w-[280px]">
            A modern wellbeing platform offering compassionate counselling, life
            coaching, personal empowerment support and healthcare staffing services
            for individuals and organisations.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-6">
            {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                id={`social-${social.toLowerCase()}`}
                className="w-8 h-8 rounded-full bg-cream/8 hover:bg-sage/30 flex items-center justify-center text-cream/40 hover:text-cream transition-all duration-200"
              >
                <span className="text-[10px] font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-cream text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">Services</h3>
          <ul className="space-y-3">
            {SERVICES_LIST.map((s) => (
              <li key={s}>
                <Link
                  href="#services"
                  className="text-cream/38 text-[13px] hover:text-cream/70 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-sage/50 group-hover:bg-sage transition-colors shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-cream text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">Contact</h3>
          <address className="not-italic space-y-4 text-cream/38 text-[13px]">
            <div className="flex items-start gap-2">
              <svg className="mt-0.5 shrink-0 text-sage/60" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>United Kingdom</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="shrink-0 text-sage/60" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hello@wellnessrenew.co.uk" className="hover:text-cream/70 transition-colors">
                hello@wellnessrenew.co.uk
              </a>
            </div>
            <div className="flex items-start gap-2">
              <svg className="mt-0.5 shrink-0 text-sage/60" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Mon – Fri: 9am – 6pm<br />Sat: 10am – 2pm</span>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/8 px-10 lg:px-32 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs">
            © {currentYear} Wellness Renew Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <Link key={item} href="#" className="text-cream/25 text-xs hover:text-cream/50 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
