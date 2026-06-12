import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end identity services"
        subtitle="Advisory, Professional, Managed, and Staffing services — everything you need to plan, build, run, and grow your identity program."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                id={s.slug}
                className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary dark:text-white md:text-3xl">{s.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                  >
                    Talk to an expert <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="rounded-3xl border border-primary/10 bg-primary-50/60 p-8 dark:border-white/10 dark:bg-primary-800/40">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-slate-300">
                    What's included
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
