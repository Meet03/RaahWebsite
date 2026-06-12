import { platforms } from '../data/platforms'

export default function LogoMarquee() {
  const items = [...platforms, ...platforms]
  return (
    <section aria-label="Platform partners" className="group relative overflow-hidden py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-ink" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-ink" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((p, i) => (
          <span
            key={`${p.slug}-${i}`}
            aria-hidden={i >= platforms.length}
            className="mr-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/10 bg-primary-50/60 px-6 py-2.5 text-sm font-semibold text-primary/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {p.name}
          </span>
        ))}
      </div>
    </section>
  )
}
