import type { CSSProperties } from 'react'
import { Fingerprint } from 'lucide-react'
import Icon from './Icon'
import { solutions } from '../data/solutions'

interface IdentityOrbitProps {
  active: string
  onSelect: (slug: string) => void
}

/**
 * Solutions orbit slowly around a central identity hub. Hover pauses the ring;
 * clicking a satellite selects that solution's tab.
 */
export default function IdentityOrbit({ active, onSelect }: IdentityOrbitProps) {
  const step = 360 / solutions.length

  return (
    <div className="group relative h-[320px] w-[320px]">
      <div className="absolute inset-8 rounded-full border-2 border-dashed border-primary-300/40 dark:border-primary-300/25" />

      {/* Hub */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-br from-primary to-primary-800 text-white shadow-xl shadow-primary/30">
        <Fingerprint className="h-7 w-7 text-accent" aria-hidden="true" />
        <span className="text-center text-xs font-semibold leading-tight">
          Every
          <br />
          identity
        </span>
      </div>

      {/* Rotating ring */}
      <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {solutions.map((s, i) => {
          const angle = i * step
          const isActive = s.slug === active
          return (
            <div
              key={s.slug}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translateY(-128px)` }}
            >
              <button
                onClick={() => onSelect(s.slug)}
                aria-label={`Show ${s.title}`}
                style={{ '--a': `${angle}deg` } as CSSProperties}
                className={`-ml-9 -mt-9 flex h-18 w-18 animate-orbit-item flex-col items-center justify-center gap-0.5 rounded-full border bg-white text-[10px] font-semibold shadow-lg transition-colors group-hover:[animation-play-state:paused] motion-reduce:animate-none dark:bg-primary-800 ${
                  isActive
                    ? 'border-accent text-accent ring-2 ring-accent/40'
                    : 'border-primary/10 text-slate-600 hover:border-accent/60 hover:text-accent dark:border-white/15 dark:text-slate-300'
                }`}
              >
                <Icon name={s.icon} className="h-5 w-5 text-accent" />
                {s.shortTitle.split(' ')[0]}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
