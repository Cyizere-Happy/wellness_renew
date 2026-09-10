'use client'

import { useBooking } from '@/context/BookingContext'

export default function StickyBookingButton() {
  const { open } = useBooking()

  return (
    <button
      onClick={open}
      id="sticky-booking-btn"
      aria-label="Book a free consultation"
      className="group fixed bottom-6 right-6 z-50 flex items-center p-4 rounded-full bg-[#4a5744] hover:bg-[#3f4a39] text-[#f5f4f0] shadow-2xl transition-all duration-300 border border-[#5c6b56]/30 hover:scale-105"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-in-out text-[11px] font-bold tracking-[0.1em] uppercase">
        Book a Free Consultation
      </span>
    </button>
  )
}
