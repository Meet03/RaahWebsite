import { Link } from 'react-router-dom'
import { Award, BadgeCheck, Layers, Mail, Phone } from 'lucide-react'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  )
}
import { nav, site } from '../data/site'
import { solutions } from '../data/solutions'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo-white.png" alt="RAAH Technologies" className="h-12 w-auto" width={135} height={48} />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-2.5 transition-colors hover:bg-accent hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.twitter}
                aria-label="Twitter / X"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-2.5 transition-colors hover:bg-accent hover:text-white"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-2.5 transition-colors hover:bg-accent hover:text-white"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Solutions</h3>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link to={`/solutions#${s.slug}`} className="text-sm transition-colors hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-sm hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2.5 text-sm hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" /> {site.phone}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
            <Award className="h-4 w-4 text-accent" /> Okta AMER SI Partner of the Year 2024
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
            <BadgeCheck className="h-4 w-4 text-accent" /> 50+ certified identity experts
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
            <Layers className="h-4 w-4 text-accent" /> 11 platform partnerships
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
