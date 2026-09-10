'use client'

import { useEffect, useRef } from 'react'

/**
 * Drives the scroll-reveal motion layer.
 *
 * Returns a ref to attach to the element you want to animate. While the
 * element is inside the viewport the hook keeps an `.is-inview` class on
 * it; when it scrolls fully out, the class is removed so the entrance
 * transition replays on the next re-entry.
 *
 * Behaviour is downgraded gracefully:
 *   • `prefers-reduced-motion` or no `IntersectionObserver` → the element
 *     is revealed immediately and never hidden again.
 *   • A failsafe timer reveals the element after 1.6s even if the
 *     observer never reports it, so content is never stuck hidden.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Signals that the JS motion layer is alive, which disables the
    // pure-CSS "rescue" reveal (see globals.css). If hydration never
    // runs, that CSS fallback un-hides everything after a few seconds.
    document.documentElement.classList.add('anim-live')

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-inview')
      return
    }

    const failsafe = window.setTimeout(() => {
      el.classList.add('is-inview')
    }, 1600)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-inview')
            window.clearTimeout(failsafe)
          } else {
            el.classList.remove('is-inview')
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(el)

    return () => {
      window.clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])

  return ref
}
