import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Icon from '../components/Icon'
import IdentityOrbit from '../components/IdentityOrbit'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { solutions } from '../data/solutions'

function slugFromHash(hash: string) {
  const slug = hash.replace('#', '')
  return solutions.some((s) => s.slug === slug) ? slug : solutions[0].slug
}

export default function Solutions() {
  const location = useLocation()
  const [active, setActive] = useState(() => slugFromHash(location.hash))

  // Follow deep links like /solutions#privileged-access (footer, home cards)
  useEffect(() => {
    if (location.hash) setActive(slugFromHash(location.hash))
  }, [location.hash])

  const solution = solutions.find((s) => s.slug === active) ?? solutions[0]

  function select(slug: string) {
    setActive(slug)
    history.replaceState(null, '', `#${slug}`)
  }

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Identity for every audience"
        subtitle="Workforce, customer, partner, and AI identity — secure every identity that touches your business."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Identity orbit — every solution revolves around identity */}
          <Reveal className="mb-14 flex justify-center">
            <IdentityOrbit active={active} onSelect={select} />
          </Reveal>

          {/* Solution selector */}
          <Reveal
            className="flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Solution areas"
          >
            {solutions.map((s) => {
              const isActive = s.slug === active
              return (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${s.slug}`}
                  onClick={() => select(s.slug)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                      : 'border border-primary/15 bg-white text-primary hover:border-accent/50 hover:text-accent dark:border-white/15 dark:bg-primary-800/60 dark:text-slate-200 dark:hover:text-accent'
                  }`}
                >
                  <Icon name={s.icon} className="h-4 w-4 shrink-0" />
                  {s.shortTitle}
                </button>
              )
            })}
          </Reveal>

          {/* Active solution panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={solution.slug}
              id={`panel-${solution.slug}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mt-12 grid items-start gap-10 lg:grid-cols-5"
            >
              {/* Overview */}
              <div className="lg:col-span-2">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon name={solution.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-balance text-primary dark:text-white md:text-3xl">
                  {solution.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                  {solution.summary}
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105"
                >
                  Discuss this solution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Capability grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
                {solution.capabilities.map((c, i) => (
                  <motion.div
                    key={c.text}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 + i * 0.06 }}
                  >
                    <TiltCard className="flex h-full min-w-0 items-start gap-4 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm hover:shadow-lg hover:shadow-primary/8 dark:border-white/10 dark:bg-primary-800/60">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon name={c.icon} className="h-5 w-5" />
                      </span>
                      <p className="min-w-0 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {c.text}
                      </p>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
