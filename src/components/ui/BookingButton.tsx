'use client'

import { useBooking } from '@/context/BookingContext'
import { ReactNode } from 'react'

interface BookingButtonProps {
  className?: string
  id?: string
  children: ReactNode
}

export default function BookingButton({ className, id, children }: BookingButtonProps) {
  const { open } = useBooking()
  return (
    <button onClick={open} id={id} className={className}>
      {children}
    </button>
  )
}
