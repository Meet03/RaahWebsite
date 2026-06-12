export interface Service {
  slug: string
  title: string
  icon: string
  summary: string
  description: string
  highlights: string[]
}

export const services: Service[] = [
  {
    slug: 'advisory-assessment',
    title: 'Advisory & Assessment Services',
    icon: 'Compass',
    summary: 'Accelerate maturity, align business and identity, and reduce risk.',
    description:
      'Our advisory and discovery workshops include a high-level discovery, use case assessment, and a gap analysis to help you assess your current identity environment and chart a pragmatic roadmap forward.',
    highlights: [
      'IAM maturity assessments and strategy roadmaps',
      'CIAM use case assessment and gap analysis',
      'Platform selection guidance across the identity landscape',
      'Architecture reviews aligned to business outcomes',
    ],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    icon: 'Wrench',
    summary: 'Design, implement, and integrate identity platforms with certified experts.',
    description:
      'From greenfield deployments to complex migrations, our certified engineers deliver IAM, IGA, PAM, and CIAM implementations that are secure, scalable, and built for the modern enterprise.',
    highlights: [
      'Implementation and integration of leading identity platforms',
      'Seamless user and authentication data migrations',
      'Custom federation, SSO, MFA, and passwordless rollouts',
      'API security and access control engineering',
    ],
  },
  {
    slug: 'managed-services',
    title: 'Managed Support Services',
    icon: 'ShieldCheck',
    summary: 'Keep your identity environment healthy, optimized, and always-on.',
    description:
      'Our managed support team monitors, maintains, and continuously improves your identity stack — so your team can focus on the business while we keep access secure and reliable.',
    highlights: [
      '24/7 monitoring and incident response',
      'Platform upgrades, patches, and health checks',
      'Continuous optimization and policy tuning',
      'Dedicated identity operations expertise',
    ],
  },
  {
    slug: 'staffing-services',
    title: 'Staffing Services',
    icon: 'Users',
    summary: 'Add certified identity talent to your team for short-term or long-term success.',
    description:
      'Access vetted identity professionals across strategy, engineering, operations, and governance roles. Architects, engineers, and analysts who can design, maintain, and scale IAM solutions for your environment.',
    highlights: [
      'Vetted, certified IAM professionals',
      'Flexible short-term and long-term engagement models',
      'Strategy, engineering, operations, and governance roles',
      'Rapid onboarding into your existing teams',
    ],
  },
]
