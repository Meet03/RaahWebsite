import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, XCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

// Free form backend (https://web3forms.com) — set VITE_WEB3FORMS_KEY in .env to activate.
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!FORM_KEY) {
      // Demo mode: no backend key configured yet
      setStatus('sending')
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      form.reset()
      return
    }

    setStatus('sending')
    data.append('access_key', FORM_KEY)
    data.append('subject', 'New inquiry from raahtech.com')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent dark:border-white/15 dark:bg-primary-800/60 dark:text-white placeholder:text-slate-400'

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk identity"
        subtitle="Book a free advisory workshop or just ask a question — we'll get back to you within one business day."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary dark:text-white">Get in touch</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Whether you're starting your first identity assessment or scaling a global program, our
              experts are ready to help.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-white">Email</p>
                  <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-accent dark:text-slate-400">
                    {site.email}
                  </a>
                  <br />
                  <a
                    href={`mailto:${site.solutionsEmail}`}
                    className="text-sm text-slate-600 hover:text-accent dark:text-slate-400"
                  >
                    {site.solutionsEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-white">Phone</p>
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}
                    className="text-sm text-slate-600 hover:text-accent dark:text-slate-400"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-white">Headquarters</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">United States</p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl shadow-primary/5 dark:border-white/10 dark:bg-primary-800/50 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary dark:text-slate-200">
                    Full name *
                  </label>
                  <input id="name" name="name" required placeholder="John Smith" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary dark:text-slate-200">
                    Work email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="johnsmith@workemail.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-primary dark:text-slate-200">
                    Company
                  </label>
                  <input id="company" name="company" placeholder="Acme Corp" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-primary dark:text-slate-200">
                    I'm interested in
                  </label>
                  <select id="topic" name="topic" className={inputCls} defaultValue="Advisory Workshop">
                    <option>Advisory Workshop</option>
                    <option>Workforce IAM</option>
                    <option>Identity Governance (IGA)</option>
                    <option>Privileged Access (PAM)</option>
                    <option>Customer Identity (CIAM)</option>
                    <option>AI / Non-Human Identity</option>
                    <option>Staffing</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary dark:text-slate-200">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your identity challenges…"
                    className={inputCls}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-xl shadow-accent/25 transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent — we'll be in
                    touch within one business day.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                    <XCircle className="h-4 w-4" /> Something went wrong. Please email us directly at{' '}
                    {site.email}.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
