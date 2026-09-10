import Reveal from '@/components/anim/Reveal'

export default function OurApproach() {
  return (
    <section
      id="about"
      aria-label="Our approach to wellbeing"
      className="bg-pale-green py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Large serif heading */}
          <Reveal variant="left">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3rem] text-charcoal leading-[1.1]">
              Compassionate<br />
              support,{' '}
              <span className="text-sage italic">personalised</span>
              <br />
              <span className="text-charcoal">for you.</span>
            </h2>

            {/* Decorative line */}
            <div className="mt-6 w-16 h-[1px] bg-sage/40" />
          </Reveal>

          {/* Right: Description */}
          <Reveal variant="right" delay={120} className="space-y-5">
            <p className="text-charcoal/70 leading-[1.85] text-[13px]">
              We understand that asking for help can feel like the hardest first step.
              At Wellness Renew, we create a safe, non-judgmental space where you are
              truly heard, understood and empowered to grow at your own pace.
            </p>
            <p className="text-charcoal/70 leading-[1.85] text-[13px]">
              Whether you are working through emotional challenges, seeking clarity in
              a difficult season of life, or ready to transform your future — our
              qualified practitioners are here to walk alongside you with warmth,
              professionalism and genuine care.
            </p>
            <div className="pt-2">
              <a
                href="#services"
                id="approach-explore-btn"
                className="inline-flex items-center gap-2 text-sage-dark text-sm font-medium hover:text-sage transition-colors duration-200 group"
              >
                See how we can help
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
