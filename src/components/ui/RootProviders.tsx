'use client'

import { BookingProvider } from '@/context/BookingContext'
import BookingModal from '@/components/ui/BookingModal'
import { ReactNode } from 'react'

export default function RootProviders({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
    </BookingProvider>
  )
}
