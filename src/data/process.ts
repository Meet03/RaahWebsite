export interface ProcessStep {
  title: string
  icon: string
  text: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    icon: 'Compass',
    text: 'A free workshop to map your identity landscape, stakeholders, and goals.',
  },
  {
    title: 'Assess',
    icon: 'ClipboardCheck',
    text: 'Use case assessment and gap analysis of your current environment.',
  },
  {
    title: 'Design',
    icon: 'PenTool',
    text: 'A pragmatic architecture and roadmap aligned to business outcomes.',
  },
  {
    title: 'Deploy',
    icon: 'Rocket',
    text: 'Certified engineers implement, integrate, and migrate with zero drama.',
  },
  {
    title: 'Operate',
    icon: 'ShieldCheck',
    text: 'Managed support, continuous optimization, and staffing as you scale.',
  },
]
