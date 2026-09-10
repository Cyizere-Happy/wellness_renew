'use client'

import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from './useReveal'

export type RevealVariant =
  | 'fade'
  | 'rise'
  | 'rise-sm'
  | 'left'
  | 'right'
  | 'image'
  | 'zoom'

interface RevealProps {
  /** Element to render. Defaults to `div`. Use `h2`, `p`, `section`, `ul`… to avoid extra wrappers. */
  as?: ElementType
  /** Entrance style. Ignored when `stagger` is set. */
  variant?: RevealVariant
  /** Reveal the direct children in sequence instead of the element itself. */
  stagger?: boolean
  /** Extra delay in milliseconds before this element animates in. */
  delay?: number
  /** Travel distance for staggered children, in pixels. */
  childY?: number
  className?: string
  style?: CSSProperties
  id?: string
  role?: string
  'aria-label'?: string
  children?: ReactNode
}

/**
 * Scroll-reveal wrapper. Renders a real element (`as`) with the motion
 * hooks attached — no layout-affecting wrapper div — so it can stand in
 * for headings, paragraphs, sections, grids and lists directly.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'rise',
  stagger = false,
  delay,
  childY,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useReveal<HTMLElement>()

  const mergedStyle: CSSProperties = { ...style }
  const vars = mergedStyle as Record<string, string | number>
  if (delay != null) vars['--anim-delay'] = `${delay}ms`
  if (childY != null) vars['--anim-child-y'] = `${childY}px`

  return (
    <Tag
      ref={ref}
      className={className}
      style={mergedStyle}
      data-anim={stagger ? undefined : variant}
      data-anim-stagger={stagger ? '' : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
