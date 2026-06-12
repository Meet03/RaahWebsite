import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { platforms } from '../data/platforms'

const categories = ['All', ...Array.from(new Set(platforms.map((p) => p.category)))]

export default function Platforms() {
  const [category, setCategory] = useState('All')

  const filtered = useMemo(
    () => (category === 'All' ? platforms : platforms.filter((p) => p.category === category)),
    [category],
  )

  return (
    <>
      <PageHero
        eyebrow="Platforms"
        title="Certified across the identity ecosystem"
        subtitle="Deep, certified expertise in the platforms that power modern identity — so you get the right tool, implemented right."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-primary/5 text-primary hover:bg-primary/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15'
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <div
                  id={p.slug}
                  className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-primary/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl dark:border-white/10 dark:bg-primary-800/60"
                >
                  <span className="inline-block self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {p.category}
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-primary dark:text-white">{p.name}</h2>
                  <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-400">{p.summary}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    Ask about {p.name} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
