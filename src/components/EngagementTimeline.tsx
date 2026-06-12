import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Icon from './Icon'
import { processSteps } from '../data/process'

export default function EngagementTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref}>
      {/* Desktop: horizontal stepper with self-drawing line */}
      <div className="relative hidden md:block">
        <motion.div
          className="absolute left-[10%] right-[10%] top-6 h-0.5 origin-left bg-accent/40"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <div className="grid grid-cols-5 gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.2 }}
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-center font-semibold text-primary dark:text-white">{s.title}</h3>
              <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <ol className="relative space-y-8 border-l-2 border-accent/30 pl-8 md:hidden">
        {processSteps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
            className="relative"
          >
            <span className="absolute -left-[49px] flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
              <Icon name={s.icon} className="h-4 w-4" />
            </span>
            <h3 className="font-semibold text-primary dark:text-white">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
