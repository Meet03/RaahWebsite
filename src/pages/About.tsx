import { Link } from 'react-router-dom'
import { ArrowRight, Award, Fingerprint, Lightbulb, Target, Users2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const values = [
  {
    icon: Fingerprint,
    title: 'Identity-First',
    text: 'Identity is not one of the things we do — it is the only thing we do. That focus shows in every engagement.',
  },
  {
    icon: Target,
    title: 'Outcome-Driven',
    text: 'We measure success by your business outcomes: reduced risk, faster onboarding, happier users, passed audits.',
  },
  {
    icon: Users2,
    title: 'People-Powered',
    text: 'Certified architects, engineers, and analysts who treat your identity program like their own.',
  },
  {
    icon: Lightbulb,
    title: 'Future-Ready',
    text: 'From passwordless to AI agent governance, we keep you ahead of the identity curve, not chasing it.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The identity people"
        subtitle="RAAH Technologies is a specialized Identity & Access Management consultancy helping organizations secure every identity — workforce, customer, partner, and AI."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold text-primary dark:text-white">What identity means to us</h2>
              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
                At your workplace, the moment you are hired, an identity is created for you — a record
                in an HR system and a user directory. Your access to buildings, systems, and services
                flows from that identity. When identity is managed well, work just happens. When it
                isn't, everything from security to productivity suffers.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                Identity programs are central to an organization because they are involved in every
                part of it. Nothing ever gets done right in a silo — and working with the right people
                to spearhead an identity program is integral to its success. That is where we come in.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                Many of the people who choose to work with us are tech-savvy developers and managers
                who were elevated into identity roles and need a trusted guide on where to start. We
                meet you where you are — whether that's a first maturity assessment or a global,
                multi-platform identity transformation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-800 p-10 text-white shadow-2xl shadow-primary/20">
                <Award className="h-12 w-12 text-accent" />
                <h3 className="mt-5 text-2xl font-bold">Okta AMER SI Partner of the Year 2024</h3>
                <p className="mt-4 leading-relaxed text-slate-300">
                  "As the AMER SI Partner of the Year, RAAH Technologies has demonstrated its
                  commitment to excellence in the field, investing heavily in Okta skills to deliver
                  successful customer projects across regions. With impressive year-over-year growth,
                  RAAH Technologies has continued to support organizations in transforming their
                  identity strategies and enhancing their security frameworks."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary-50/60 py-24 dark:bg-primary-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="How we work" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm dark:bg-primary-800/70">
                  <v.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 font-semibold text-primary dark:text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-white">Want to meet the team?</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Start a conversation and we'll connect you with the right identity experts for your goals.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-xl shadow-accent/25 transition-transform hover:scale-105"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
