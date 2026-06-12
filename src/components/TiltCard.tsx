import { useRef, type ReactNode, type MouseEvent } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  max?: number
}

/** Subtle 3D tilt following the cursor. Desktop pointers only; respects reduced motion. */
export default function TiltCard({ children, className, max = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    if (matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`transition-transform duration-200 will-change-transform ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
