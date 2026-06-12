import { useCallback, useEffect, useState } from 'react'
import { palettes } from '../data/themes'

export type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function getInitialPalette(): string {
  const p = document.documentElement.getAttribute('data-palette')
  return p && palettes.some((x) => x.id === p) ? p : palettes[0].id
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [palette, setPalette] = useState<string>(getInitialPalette)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    localStorage.setItem('palette', palette)
  }, [palette])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme, palette, setPalette }
}
