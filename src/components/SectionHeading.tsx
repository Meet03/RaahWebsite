import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-3xl mb-12 ${alignCls}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-balance">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
