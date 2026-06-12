import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hub: boolean
}

interface Pulse {
  x: number
  y: number
  r: number
}

interface IdentityNetworkProps {
  className?: string
  /** Square pixels of canvas area per node — lower = denser */
  density?: number
}

/**
 * Animated "identity network" background: drifting nodes (identities) linked by
 * proximity lines, with expanding pulse rings that evoke authentication events.
 */
export default function IdentityNetwork({ className, density = 16000 }: IdentityNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    let raf = 0
    let lastPulse = 0
    let accent = '#fd5f0d'
    let glow = '#8d7aff'

    const readColors = () => {
      const style = getComputedStyle(document.documentElement)
      accent = style.getPropertyValue('--color-accent').trim() || accent
      glow = style.getPropertyValue('--color-primary-300').trim() || glow
    }
    readColors()
    // Re-read brand colors when the palette or dark mode changes
    const observer = new MutationObserver(readColors)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-palette', 'class'],
    })

    const seed = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(80, Math.floor((width * height) / density))
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
        hub: i % 9 === 0,
      }))
    }

    const draw = (time: number) => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      // Links
      const linkDist = 140
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < linkDist) {
            ctx.globalAlpha = (1 - d / linkDist) * 0.22
            ctx.strokeStyle = glow
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.globalAlpha = n.hub ? 0.9 : 0.55
        ctx.fillStyle = n.hub ? accent : glow
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.hub ? n.r + 1.4 : n.r, 0, Math.PI * 2)
        ctx.fill()
        if (n.hub) {
          ctx.globalAlpha = 0.35
          ctx.strokeStyle = accent
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2)
          ctx.stroke()
        }
        n.x += n.vx
        n.y += n.vy
        if (n.x < -10) n.x = width + 10
        if (n.x > width + 10) n.x = -10
        if (n.y < -10) n.y = height + 10
        if (n.y > height + 10) n.y = -10
      }

      // Authentication pulses
      if (time - lastPulse > 2200 && nodes.length > 0) {
        const origin = nodes[Math.floor(Math.random() * nodes.length)]
        pulses.push({ x: origin.x, y: origin.y, r: 0 })
        lastPulse = time
      }
      pulses = pulses.filter((p) => p.r < 150)
      for (const p of pulses) {
        p.r += 1.1
        ctx.globalAlpha = Math.max(0, 1 - p.r / 150) * 0.5
        ctx.strokeStyle = accent
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const loop = (time: number) => {
      if (!document.hidden) draw(time)
      raf = requestAnimationFrame(loop)
    }

    seed()
    if (reduced) {
      // Static render for users who prefer reduced motion
      draw(0)
    } else {
      raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(seed)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      observer.disconnect()
    }
  }, [density])

  return <canvas ref={canvasRef} className={`pointer-events-none ${className ?? ''}`} aria-hidden="true" />
}
