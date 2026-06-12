import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Menu, Moon, Palette, Sun, X } from 'lucide-react'
import { nav } from '../data/site'
import { palettes } from '../data/themes'
import type { Theme } from '../hooks/useTheme'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
  palette: string
  setPalette: (id: string) => void
}

export default function Navbar({ theme, toggleTheme, palette, setPalette }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const paletteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!paletteOpen) return
    const close = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) setPaletteOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [paletteOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Every page hero is dark navy, so an unscrolled (transparent) navbar always sits on dark
  const overDark = !scrolled

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-accent'
        : overDark
          ? 'text-white/85 hover:text-white'
          : 'text-primary/80 hover:text-primary dark:text-slate-300 dark:hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-ink/85 backdrop-blur-md shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="RAAH Technologies home">
          <img
            src={overDark || theme === 'dark' ? '/logo-white.png' : '/logo-color.png'}
            alt="RAAH Technologies"
            className="h-12 w-auto"
            width={135}
            height={48}
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkCls} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme palette picker */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              aria-label="Choose color theme"
              aria-expanded={paletteOpen}
              className={`rounded-full p-2 transition-colors ${
                overDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-primary hover:bg-primary/10 dark:text-slate-200 dark:hover:bg-white/10'
              }`}
            >
              <Palette className="h-5 w-5" />
            </button>
            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-3 w-60 overflow-hidden rounded-2xl border border-primary/10 bg-white p-2 shadow-2xl shadow-primary/15 dark:border-white/10 dark:bg-primary-800"
                >
                  <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Color Theme
                  </p>
                  {palettes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setPalette(p.id)
                        setPaletteOpen(false)
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                    >
                      <span className="flex shrink-0 -space-x-1.5">
                        <span
                          className="h-5 w-5 rounded-full border-2 border-white dark:border-primary-800"
                          style={{ background: p.swatch[0] }}
                        />
                        <span
                          className="h-5 w-5 rounded-full border-2 border-white dark:border-primary-800"
                          style={{ background: p.swatch[1] }}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-primary dark:text-white">
                          {p.label}
                        </span>
                        <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                          {p.description}
                        </span>
                      </span>
                      {palette === p.id && <Check className="h-4 w-4 shrink-0 text-accent" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className={`rounded-full p-2 transition-colors ${
              overDark
                ? 'text-white hover:bg-white/10'
                : 'text-primary hover:bg-primary/10 dark:text-slate-200 dark:hover:bg-white/10'
            }`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105 lg:inline-block"
          >
            Let's Talk
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className={`rounded-full p-2 lg:hidden ${
              overDark
                ? 'text-white hover:bg-white/10'
                : 'text-primary hover:bg-primary/10 dark:text-slate-200 dark:hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-primary/10 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-ink/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-primary hover:bg-primary/5 dark:text-slate-200 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-base font-semibold text-white"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
