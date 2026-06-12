import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Fingerprint, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'

function Floating({
  children,
  delay,
  className,
}: {
  children: ReactNode
  delay: number
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const cardCls =
  'rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/20 backdrop-blur-md'

const RING = 2 * Math.PI * 26

export default function HeroCards() {
  return (
    <div className="relative hidden h-[440px] lg:block" aria-hidden="true">
      {/* Access approved toast */}
      <Floating delay={0.4} className="absolute right-4 top-6 w-64">
        <div className={`${cardCls} flex items-center gap-4`}>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Access approved</p>
            <p className="text-xs text-slate-300">SSO · Workforce</p>
          </div>
        </div>
      </Floating>

      {/* MFA verified card */}
      <Floating delay={0.6} className="absolute left-0 top-40 w-60">
        <div className={`${cardCls} flex items-center gap-4`}>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-300">
            <Fingerprint className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">MFA verified</p>
            <p className="text-xs text-slate-300">Push notification · 2s</p>
          </div>
        </div>
      </Floating>

      {/* Posture score gauge */}
      <Floating delay={0.8} className="absolute bottom-6 right-10 w-60">
        <div className={`${cardCls} flex items-center gap-4`}>
          <span className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center">
            <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
              <motion.circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={RING}
                initial={{ strokeDashoffset: RING }}
                animate={{ strokeDashoffset: RING * 0.02 }}
                transition={{ duration: 1.4, delay: 1, ease: 'easeOut' }}
              />
            </svg>
            <span className="absolute text-sm font-bold text-white">98</span>
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Posture score</p>
            <p className="text-xs text-slate-300">Continuous scoring</p>
          </div>
        </div>
      </Floating>

      {/* AI agent chip */}
      <Floating delay={1.0} className="absolute bottom-32 left-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
          <Bot className="h-4 w-4 text-accent-300" />
          <span className="text-xs font-medium text-white">AI agent · governed</span>
        </div>
      </Floating>
    </div>
  )
}
