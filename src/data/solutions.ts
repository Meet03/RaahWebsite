export interface Solution {
  slug: string
  title: string
  icon: string
  summary: string
  capabilities: string[]
}

export const solutions: Solution[] = [
  {
    slug: 'workforce-iam',
    title: 'Workforce IAM',
    icon: 'BadgeCheck',
    summary:
      'Give employees and contractors seamless, secure access to the tools they need — SSO, MFA, adaptive and passwordless authentication across your enterprise.',
    capabilities: [
      'Single Sign-On across cloud and on-prem applications',
      'Multi-factor and passwordless authentication',
      'Adaptive authentication based on real-time context and risk',
      'Directory integration and identity federation',
    ],
  },
  {
    slug: 'identity-governance',
    title: 'Identity Governance & Administration (IGA)',
    icon: 'ClipboardCheck',
    summary:
      'Automate the creation, modification, and removal of user identities, ensuring users have appropriate access throughout their lifecycle.',
    capabilities: [
      'Automated joiner-mover-leaver lifecycle management',
      'Access certification and attestation campaigns',
      'Access request and workflow automation',
      'Separation-of-duties and audit compliance',
    ],
  },
  {
    slug: 'privileged-access',
    title: 'Privileged Access Management (PAM)',
    icon: 'KeyRound',
    summary:
      'Protect your most powerful accounts. Vault credentials, monitor sessions, and enforce least privilege for administrators and high-risk users.',
    capabilities: [
      'Credential vaulting and rotation',
      'Just-in-time privileged elevation with approval workflows',
      'Administrator and high-risk user session monitoring',
      'Privileged task automation',
    ],
  },
  {
    slug: 'customer-identity',
    title: 'Customer Identity (CIAM)',
    icon: 'HeartHandshake',
    summary:
      'Deliver seamless registration, login, and self-service experiences that improve customer satisfaction, increase engagement, and build brand loyalty.',
    capabilities: [
      'Frictionless registration and progressive profiling',
      'Social login and federated identities',
      'Account recovery and identity assurance',
      'Consent, privacy, and marketing platform integrations',
    ],
  },
  {
    slug: 'b2b-identity',
    title: 'B2B & Partner Identity',
    icon: 'Network',
    summary:
      'Accelerate partner onboarding without sacrificing security or control. Automate partner lifecycle management for speed, security, and scale.',
    capabilities: [
      'Delegated administration for partner organizations',
      'Federation with partner identity providers',
      'Partner entitlement management and attestation',
      'Multi-tenant isolation and governance',
    ],
  },
  {
    slug: 'ai-identity',
    title: 'AI & Non-Human Identity',
    icon: 'Bot',
    summary:
      'Bring your AI agents and automations under full identity governance — with attribution, guardrails, and posture scoring to detect drift and anomalies.',
    capabilities: [
      'AI agent registration, ownership, and attribution',
      'Deterministic permission scoping for autonomous systems',
      'Short-lived credentials replacing static keys and tokens',
      'AI identity posture management and continuous scoring',
    ],
  },
]
