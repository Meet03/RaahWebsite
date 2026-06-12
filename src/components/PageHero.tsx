import { motion } from 'framer-motion'
import IdentityNetwork from './IdentityNetwork'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-ink pt-32 pb-20 text-white md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:32px_32px]" />
      <IdentityNetwork className="absolute inset-0 h-full w-full opacity-60" density={22000} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 max-w-3xl text-4xl font-bold text-balance md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg text-slate-300"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
