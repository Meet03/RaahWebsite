import { useEffect, useRef, useState, type ReactNode } from 'react'

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
  /** Stagger offset in ms so cards take turns flipping */
  delay?: number
  className?: string
}

/**
 * 3D flip card that periodically flips to its back face, then returns.
 * Pauses while hovered; disabled entirely under prefers-reduced-motion.
 */
export default function FlipCard({ front, back, delay = 0, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)
  const paused = useRef(false)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let interval: number | undefined
    let hold: number | undefined
    const tick = () => {
      if (paused.current || document.hidden) return
      setFlipped(true)
      hold = window.setTimeout(() => setFlipped(false), 3200)
    }
    const first = window.setTimeout(() => {
      tick()
      interval = window.setInterval(tick, 16000)
    }, 4500 + delay)
    return () => {
      clearTimeout(first)
      if (interval) clearInterval(interval)
      if (hold) clearTimeout(hold)
    }
  }, [delay])

  return (
    <div
      className={`[perspective:1200px] ${className ?? ''}`}
      onMouseEnter={() => {
        paused.current = true
      }}
      onMouseLeave={() => {
        paused.current = false
      }}
    >
      <div
        className="relative h-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="h-full [backface-visibility:hidden]">{front}</div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  )
}
