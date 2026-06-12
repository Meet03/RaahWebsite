import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  const t = testimonials[index]
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-800 p-8 text-white shadow-2xl shadow-primary/20 md:p-10"
    >
      <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
      <Quote className="h-8 w-8 text-accent" aria-hidden="true" />

      <div className="relative mt-5 min-h-[230px] sm:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-300">
              {t.tag}
            </span>
            <blockquote className="mt-4 leading-relaxed text-slate-200">"{t.quote}"</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-accent">— {t.source}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-accent' : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="rounded-full border border-white/15 p-2 transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="rounded-full border border-white/15 p-2 transition-colors hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
