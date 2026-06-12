export interface Palette {
  id: string
  label: string
  description: string
  /** Swatch colors shown in the theme picker */
  swatch: [string, string]
}

export const palettes: Palette[] = [
  {
    id: 'classic',
    label: 'RAAH Classic',
    description: 'Brand navy & signal orange',
    swatch: ['#0d0042', '#fd5f0d'],
  },
  {
    id: 'cyber',
    label: 'Cyber Ops',
    description: 'Deep ocean blue & neon cyan',
    swatch: ['#062a4a', '#00b3d6'],
  },
  {
    id: 'aurora',
    label: 'Aurora',
    description: 'Midnight violet & aurora pink',
    swatch: ['#2b0a52', '#d22b70'],
  },
]
