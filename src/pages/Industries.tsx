import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { industries } from '../data/industries'

export default function Industries() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return industries
    return industries.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.summary.toLowerCase().includes(q) ||
        i.challenges.some((c) => c.toLowerCase().includes(q)),
    )
  }, [query])

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Identity expertise for your sector"
        subtitle="Every industry has unique identity challenges. We've solved them across all of these."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-md">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search industries or challenges…"
                aria-label="Search industries"
                className="w-full rounded-full border border-primary/15 bg-white py-3 pl-12 pr-5 text-sm text-ink shadow-sm outline-none transition-colors focus:border-accent dark:border-white/15 dark:bg-primary-800/60 dark:text-white"
              />
            </label>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="text-center text-slate-500">No industries match “{query}”.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((ind, i) => (
                <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
                  <div
                    id={ind.slug}
                    className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-primary/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8 dark:border-white/10 dark:bg-primary-800/60"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon name={ind.icon} className="h-6 w-6" />
                    </div>
                    <h2 className="text-lg font-bold text-primary dark:text-white">{ind.title}</h2>
                    <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-400">{ind.summary}</p>
                    <ul className="mt-5 space-y-2">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      Solve these challenges <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
