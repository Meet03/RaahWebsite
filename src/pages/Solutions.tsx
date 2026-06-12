import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Identity for every audience"
        subtitle="Workforce, customer, partner, and AI identity — secure every identity that touches your business."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <div
                id={s.slug}
                className="flex h-full scroll-mt-28 flex-col rounded-3xl border border-primary/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/8 dark:border-white/10 dark:bg-primary-800/60"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="text-xl font-bold text-primary dark:text-white">{s.title}</h2>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400">{s.summary}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{c}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  Discuss this solution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
