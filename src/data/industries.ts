export interface Industry {
  slug: string
  title: string
  icon: string
  summary: string
  challenges: string[]
}

export const industries: Industry[] = [
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: 'Landmark',
    summary:
      'As financial services evolve, secure identity solutions are paramount to meet increasing customer expectations and regulatory demands.',
    challenges: [
      'Regulatory compliance (SOX, PCI-DSS, GLBA)',
      'Fraud detection and account takeover prevention',
      'Secure customer onboarding and KYC',
      'Privileged access for critical financial systems',
    ],
  },
  {
    slug: 'healthcare-and-insurance',
    title: 'Healthcare & Insurance',
    icon: 'HeartPulse',
    summary:
      'Protect patient data and streamline caregiver access while meeting HIPAA and industry compliance requirements.',
    challenges: [
      'HIPAA-compliant access controls',
      'Clinician single sign-on across systems',
      'Patient and member identity experiences',
      'Third-party and vendor access governance',
    ],
  },
  {
    slug: 'government-and-public-sector',
    title: 'Government & Public Sector',
    icon: 'Building2',
    summary:
      'Ensure government employees and contractors have appropriate access based on their roles, reducing the risk of data breaches.',
    challenges: [
      'Citizen identity and digital service access',
      'Zero-trust mandates and compliance frameworks',
      'Contractor lifecycle management',
      'Legacy system modernization',
    ],
  },
  {
    slug: 'retail-and-e-commerce',
    title: 'Retail & E-Commerce',
    icon: 'ShoppingBag',
    summary:
      'A seamless customer experience improves satisfaction, increases engagement, and builds brand loyalty across every channel.',
    challenges: [
      'Frictionless registration and checkout',
      'Social login and unified customer profiles',
      'Loyalty and promotion abuse prevention',
      'Seasonal scale and peak-traffic resilience',
    ],
  },
  {
    slug: 'technology-and-telecommunications',
    title: 'Technology & Telecom',
    icon: 'Cpu',
    summary:
      'Unify workforce access and enhance customer engagement while protecting customer data at carrier scale.',
    challenges: [
      'API security and access control at scale',
      'B2B2C and multi-tenant identity models',
      'Developer and partner ecosystem access',
      'Subscriber identity management',
    ],
  },
  {
    slug: 'energy-and-utilities',
    title: 'Energy & Utilities',
    icon: 'Zap',
    summary:
      'Innovative IAM, IGA, PAM, and federated identity solutions to safeguard energy infrastructure and ensure reliable services for the community.',
    challenges: [
      'OT/IT convergence and critical infrastructure protection',
      'NERC-CIP and regulatory compliance',
      'Field workforce and contractor access',
      'Privileged access to control systems',
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    icon: 'GraduationCap',
    summary:
      'Manage remote access, protect student and faculty data, and provide secure access for third-party partners.',
    challenges: [
      'Student lifecycle from applicant to alumni',
      'Faculty and staff access governance',
      'Research collaboration and federation',
      'Protecting minors’ data and privacy',
    ],
  },
  {
    slug: 'manufacturing-and-supply-chain',
    title: 'Manufacturing & Supply Chain',
    icon: 'Factory',
    summary:
      'Secure identities across plants, partners, and supply chains — from the shop floor to the boardroom.',
    challenges: [
      'Supplier and partner federation',
      'Shop-floor and shared-device authentication',
      'IP protection and least-privilege access',
      'Global workforce lifecycle automation',
    ],
  },
  {
    slug: 'media-and-entertainment',
    title: 'Media & Entertainment',
    icon: 'Clapperboard',
    summary:
      'Ensure artists, producers, and distributors have appropriate access to content and tools based on their roles.',
    challenges: [
      'Subscriber identity and entitlement management',
      'Content protection and rights management',
      'Federation with content creators and developers',
      'Audience data privacy and consent',
    ],
  },
  {
    slug: 'gaming',
    title: 'Gaming',
    icon: 'Gamepad2',
    summary:
      'Ensure developers, moderators, and administrators have appropriate access to game systems — while players enjoy seamless, secure login.',
    challenges: [
      'Player identity across platforms and devices',
      'Cheating, fraud, and account takeover prevention',
      'Studio and publisher workforce access',
      'Community and moderator role management',
    ],
  },
  {
    slug: 'legal-and-professional-services',
    title: 'Legal & Professional Services',
    icon: 'Scale',
    summary:
      'Protect privileged client information with rigorous access controls and audit-ready governance.',
    challenges: [
      'Client-matter confidentiality and ethical walls',
      'Document and knowledge system access control',
      'Audit-ready compliance reporting',
      'Secure client collaboration portals',
    ],
  },
]
