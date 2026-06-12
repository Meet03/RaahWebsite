import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
}

export default function Reveal({ children, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
