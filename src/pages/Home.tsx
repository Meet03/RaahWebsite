import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Globe2, ShieldCheck, Sparkles } from 'lucide-react'
import Icon from '../components/Icon'
import IdentityNetwork from '../components/IdentityNetwork'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'
import { solutions } from '../data/solutions'
import { industries } from '../data/industries'
import { platforms } from '../data/platforms'

const stats = [
  { label: 'Identity Projects Delivered', value: '200+' },
  { label: 'Certified Identity Experts', value: '50+' },
  { label: 'Platform Partnerships', value: '11' },
  { label: 'Industries Served', value: '10+' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-ink pt-32 pb-24 text-white md:pt-44 md:pb-36">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:32px_32px]" />
        <IdentityNetwork className="absolute inset-0 h-full w-full opacity-70" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm backdrop-blur"
            >
              <Award className="h-4 w-4 text-accent" />
              Okta AMER SI Partner of the Year 2024
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight text-balance md:text-6xl"
            >
              Your trusted partner at every point in your{' '}
              <span className="bg-gradient-to-r from-accent to-accent-300 bg-clip-text text-transparent">
                identity journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl"
            >
              RAAH Technologies delivers IAM, IGA, PAM, and CIAM solutions that secure your workforce,
              delight your customers, and keep you ahead of what's next — including AI identity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-xl shadow-accent/30 transition-transform hover:scale-105"
              >
                Book a Free Workshop
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-white/15"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-primary/10 shadow-2xl shadow-primary/10 backdrop-blur dark:bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 text-center dark:bg-primary-800">
              <div className="text-3xl font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end identity services"
            subtitle="From strategy to staffing — comprehensive IAM services including Advisory, Professional, Managed, and Staffing services."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services#${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 dark:border-white/10 dark:bg-primary-800/60"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary dark:text-white">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-primary-50/60 py-24 dark:bg-primary-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions"
            title="Identity for every audience"
            subtitle="Workforce, customers, partners — and now AI agents. We secure every identity that touches your business."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  to={`/solutions#${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 dark:bg-primary-800/70"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary dark:bg-white/10 dark:text-accent">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-primary group-hover:text-accent dark:text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{s.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries marquee-style grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Deep expertise across your industry"
            subtitle="Identity challenges differ by sector. Our solutions don't come from a template — they come from experience."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.slice(0, 8).map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.05}>
                <Link
                  to={`/industries#${ind.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-primary/10 bg-white px-5 py-4 transition-all hover:border-accent/40 hover:shadow-lg dark:border-white/10 dark:bg-primary-800/60"
                >
                  <Icon name={ind.icon} className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-primary group-hover:text-accent dark:text-slate-200">
                    {ind.title}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 font-semibold text-accent hover:underline">
              View all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-primary py-24 text-white dark:bg-primary-800/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform Partners"
            title="Certified across the identity ecosystem"
            subtitle="We hold deep, certified expertise in the platforms that power modern identity."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link
                  to={`/platforms#${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-accent hover:bg-accent/20"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {p.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why RAAH */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Why RAAH</span>
              <h2 className="mt-3 text-3xl font-bold text-primary dark:text-white md:text-4xl">
                Identity isn't one of the things we do. It's the only thing we do.
              </h2>
              <p className="mt-5 text-slate-600 dark:text-slate-400">
                Identity programs are central to an organization because they touch every part of it.
                Working with the right people to spearhead your identity program is integral to its
                success — and that's exactly what we bring.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, text: 'Identity-only focus: IAM, IGA, PAM, CIAM, and AI identity' },
                  { icon: Award, text: 'Award-winning delivery, recognized by our platform partners' },
                  { icon: Globe2, text: 'Experience across 10+ industries and every major platform' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary-800 p-10 text-white shadow-2xl shadow-primary/20">
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
                <img src="/logo-icon.png" alt="" className="h-16 w-16" width={64} height={64} />
                <blockquote className="mt-6 text-lg leading-relaxed">
                  "RAAH Technologies has demonstrated its commitment to excellence in the field,
                  investing heavily in Okta skills to deliver successful customer projects across
                  regions."
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-accent">
                  — Okta, AMER SI Partner of the Year 2024
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-accent-500 to-accent px-8 py-16 text-center text-white shadow-2xl shadow-accent/25">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to start your identity journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Book a free advisory workshop — a high-level discovery, use case assessment, and gap
            analysis of your current identity environment.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-accent-600 shadow-lg transition-transform hover:scale-105"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
