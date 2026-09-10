'use client'

import { useState, useEffect, useCallback } from 'react'
import { useBooking } from '@/context/BookingContext'

/* ── helpers ───────────────────────────────────────────────── */
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]
const DAYS = ['S','M','T','W','T','F','S']

const TIME_SLOTS = [
  '9:00 AM','10:00 AM','11:00 AM',
  '12:00 PM','1:00 PM','2:00 PM',
  '3:00 PM','4:00 PM','5:00 PM',
]

const SERVICES = [
  'Counselling',
  'Life Coaching',
  'Personal Empowerment',
  'Healthcare Staffing',
  'Not sure yet — I need guidance',
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}
function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
}
function generateMeetLink() {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  const seg = (n: number) => Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `https://meet.google.com/${seg(3)}-${seg(4)}-${seg(3)}`
}

type Step = 'date' | 'time' | 'details' | 'confirm'

export default function BookingModal() {
  const { isOpen, close } = useBooking()

  const today = new Date()
  const [step, setStep] = useState<Step>('date')
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [meetLink] = useState(generateMeetLink())
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('date'); setSelectedDate(null); setSelectedTime(null)
        setForm({ name: '', email: '', service: '', message: '' }); setErrors({})
      }, 350)
    }
  }, [isOpen])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }, [close])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const isDisabled = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    const dow = d.getDay()
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate()) || dow === 0 || dow === 6
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.service) e.service = 'Please select one'
    setErrors(e); return Object.keys(e).length === 0
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth)
  const calCells = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Free Consultation"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={close} />

      {/* Modal — no scroll, fits viewport */}
      <div className="relative bg-[#f5f4f0] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">

        {/* ── HEADER (compact) ──────────────────────── */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-charcoal/8">
          <div>
            <p className="text-sage text-[8px] tracking-[0.35em] uppercase font-semibold mb-0.5">Wellness Renew</p>
            <h2 className="font-serif text-xl text-charcoal leading-tight">Book Your Free Consultation</h2>
          </div>
          <button
            onClick={close}
            id="booking-modal-close"
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-charcoal/8 hover:bg-charcoal/15 flex items-center justify-center transition-colors shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* ── PROGRESS ──────────────────────────────── */}
        {step !== 'confirm' && (
          <div className="flex items-center gap-0 px-6 pt-3 pb-2">
            {(['date','time','details'] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`flex items-center gap-1.5 ${i < (['date','time','details'] as Step[]).indexOf(step) ? 'cursor-pointer' : ''}`}
                  onClick={() => i < (['date','time','details'] as Step[]).indexOf(step) ? setStep(s) : undefined}
                >
                  <div className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center transition-all ${
                    step === s ? 'bg-[#d1decb] text-charcoal' :
                    (['date','time','details'] as Step[]).indexOf(step) > i ? 'bg-charcoal text-[#f5f4f0]' :
                    'bg-charcoal/10 text-charcoal/35'
                  }`}>{(['date','time','details'] as Step[]).indexOf(step) > i ? '✓' : i+1}</div>
                  <span className={`text-[9px] tracking-[0.08em] uppercase font-medium ${step === s ? 'text-charcoal' : 'text-charcoal/30'}`}>
                    {s === 'date' ? 'Date' : s === 'time' ? 'Time' : 'Details'}
                  </span>
                </div>
                {i < 2 && <div className="w-6 h-px bg-charcoal/12 mx-2" />}
              </div>
            ))}
          </div>
        )}

        <div className="px-6 pb-6 pt-2">

          {/* ── STEP 1: DATE ─────────────────────────── */}
          {step === 'date' && (
            <div>
              {/* Month nav */}
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={prevMonth}
                  disabled={viewYear === today.getFullYear() && viewMonth === today.getMonth()}
                  className="w-7 h-7 rounded-full bg-charcoal/8 hover:bg-charcoal/15 disabled:opacity-25 flex items-center justify-center transition-colors"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <span className="font-serif text-base text-charcoal">{MONTHS[viewMonth]} {viewYear}</span>
                <button onClick={nextMonth} className="w-7 h-7 rounded-full bg-charcoal/8 hover:bg-charcoal/15 flex items-center justify-center transition-colors">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-1">
                {DAYS.map((d, i) => (
                  <div key={`${d}-${i}`} className="text-center text-[9px] font-semibold text-charcoal/30 uppercase py-1">{d}</div>
                ))}
              </div>

              {/* Calendar grid — compact cells */}
              <div className="grid grid-cols-7 gap-y-0.5">
                {calCells.map((day, i) => {
                  if (!day) return <div key={`empty-${i}`} />
                  const d = new Date(viewYear, viewMonth, day)
                  const disabled = isDisabled(day)
                  const isSelected = selectedDate && isSameDay(d, selectedDate)
                  const isToday = isSameDay(d, today)
                  return (
                    <button
                      key={day}
                      onClick={() => !disabled && setSelectedDate(d)}
                      disabled={disabled}
                      className={`
                        mx-auto w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium transition-all duration-150
                        ${disabled ? 'text-charcoal/18 cursor-not-allowed' :
                          isSelected ? 'bg-charcoal text-[#f5f4f0] shadow-md' :
                          isToday ? 'bg-[#d1decb] text-charcoal font-semibold' :
                          'text-charcoal hover:bg-[#d1decb]/50 cursor-pointer'}
                      `}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>

              <p className="text-charcoal/30 text-[10px] mt-2 text-center">Mon – Fri only</p>

              <button
                onClick={() => selectedDate && setStep('time')}
                disabled={!selectedDate}
                id="booking-next-date"
                className="mt-4 w-full py-3.5 rounded-full bg-charcoal hover:bg-[#2a2a24] disabled:opacity-30 disabled:cursor-not-allowed text-[#f5f4f0] text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                {selectedDate
                  ? `Continue — ${selectedDate.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}`
                  : 'Select a date to continue'}
              </button>
            </div>
          )}

          {/* ── STEP 2: TIME ─────────────────────────── */}
          {step === 'time' && (
            <div>
              <p className="text-charcoal/50 text-xs mb-4">
                Available for{' '}
                <strong className="text-charcoal">
                  {selectedDate?.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                </strong>
              </p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {TIME_SLOTS.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 rounded-xl text-[13px] font-medium transition-all duration-200 border ${
                      selectedTime === slot
                        ? 'bg-charcoal text-[#f5f4f0] border-charcoal shadow-md scale-[1.02]'
                        : 'bg-white border-charcoal/10 text-charcoal hover:border-[#d1decb] hover:bg-[#d1decb]/20'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#d1decb]/30 border border-[#d1decb] mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-sage shrink-0">
                  <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.894L15 14"/>
                  <rect x="3" y="6" width="12" height="12" rx="2"/>
                </svg>
                <p className="text-charcoal/65 text-[11px]">Session via <strong>Google Meet</strong> · link sent to your email</p>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setStep('date')} className="flex-1 py-3.5 rounded-full border border-charcoal/15 text-charcoal text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-charcoal/5 transition-all">Back</button>
                <button
                  onClick={() => selectedTime && setStep('details')}
                  disabled={!selectedTime}
                  id="booking-next-time"
                  className="flex-[2] py-3.5 rounded-full bg-charcoal hover:bg-[#2a2a24] disabled:opacity-30 disabled:cursor-not-allowed text-[#f5f4f0] text-[10px] font-bold tracking-[0.15em] uppercase transition-all"
                >
                  {selectedTime ? `Continue — ${selectedTime}` : 'Select a time'}
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: DETAILS ──────────────────────── */}
          {step === 'details' && (
            <div>
              <div className="space-y-3 mb-4">
                {/* Name */}
                <div>
                  <label htmlFor="booking-name" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-1">Full Name</label>
                  <input
                    id="booking-name" type="text" value={form.name} placeholder="Your name"
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 transition-all ${errors.name ? 'border-red-400' : 'border-charcoal/10'}`}
                  />
                  {errors.name && <p className="text-red-400 text-[10px] mt-0.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="booking-email" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-1">Email Address</label>
                  <input
                    id="booking-email" type="email" value={form.email} placeholder="hello@example.com"
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 transition-all ${errors.email ? 'border-red-400' : 'border-charcoal/10'}`}
                  />
                  {errors.email && <p className="text-red-400 text-[10px] mt-0.5">{errors.email}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="booking-service" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-1">Area of Interest</label>
                  <select
                    id="booking-service" value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-charcoal text-sm outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 transition-all appearance-none cursor-pointer ${errors.service ? 'border-red-400' : 'border-charcoal/10'} ${!form.service ? 'text-charcoal/35' : ''}`}
                  >
                    <option value="" disabled>Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-400 text-[10px] mt-0.5">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="booking-message" className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-1">
                    Anything else? <span className="text-charcoal/25 normal-case tracking-normal font-normal text-[9px]">optional</span>
                  </label>
                  <textarea
                    id="booking-message" rows={2} value={form.message} placeholder="Share as much or as little as you like..."
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-charcoal/10 text-charcoal text-sm placeholder:text-charcoal/25 outline-none focus:border-[#d1decb] focus:ring-2 focus:ring-[#d1decb]/25 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Summary pill */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal/5 border border-charcoal/6 mb-4">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-sage shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <p className="text-charcoal/55 text-[11px]">
                  <strong className="text-charcoal">{selectedDate?.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</strong> at <strong className="text-charcoal">{selectedTime}</strong> · Google Meet
                </p>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setStep('time')} className="flex-1 py-3.5 rounded-full border border-charcoal/15 text-charcoal text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-charcoal/5 transition-all">Back</button>
                <button
                  onClick={() => { if (validate()) setStep('confirm') }}
                  id="booking-confirm-btn"
                  className="flex-[2] py-3.5 rounded-full bg-[#d1decb] hover:bg-[#c0ceb9] text-charcoal text-[10px] font-bold tracking-[0.15em] uppercase transition-all hover:shadow-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 4: CONFIRM ──────────────────────── */}
          {step === 'confirm' && (
            <div className="text-center py-3">
              <div className="w-16 h-16 rounded-full bg-[#d1decb] flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">You&apos;re all set, {form.name.split(' ')[0]}!</h3>
              <p className="text-charcoal/50 text-sm leading-relaxed max-w-xs mx-auto mb-5">
                Confirmation & Google Meet link sent to <strong className="text-charcoal">{form.email}</strong>.
              </p>

              <div className="text-left bg-white rounded-xl border border-charcoal/8 divide-y divide-charcoal/6 mb-5 shadow-sm">
                {[
                  { icon: '📅', label: 'Date & Time', value: `${selectedDate?.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })} at ${selectedTime}` },
                  { icon: '🎯', label: 'Service', value: form.service },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 px-4 py-3">
                    <span className="text-base">{icon}</span>
                    <div>
                      <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-charcoal/35 mb-0.5">{label}</p>
                      <p className="text-charcoal text-[13px] font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={meetLink} target="_blank" rel="noopener noreferrer" id="booking-meet-link"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-charcoal hover:bg-[#2a2a24] text-[#f5f4f0] text-[10px] font-bold tracking-[0.18em] uppercase transition-all hover:shadow-xl mb-3"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.894L15 14"/>
                  <rect x="3" y="6" width="12" height="12" rx="2"/>
                </svg>
                Join Google Meet
              </a>

              <button onClick={close} className="block mx-auto text-charcoal/35 text-[11px] hover:text-charcoal transition-colors underline underline-offset-4">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
