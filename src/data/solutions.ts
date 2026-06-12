export interface Capability {
  text: string
  icon: string
}

export interface Solution {
  slug: string
  title: string
  shortTitle: string
  icon: string
  summary: string
  capabilities: Capability[]
}

export const solutions: Solution[] = [
  {
    slug: 'workforce-iam',
    title: 'Workforce IAM',
    shortTitle: 'Workforce IAM',
    icon: 'BadgeCheck',
    summary:
      'Give employees and contractors seamless, secure access to the tools they need — SSO, MFA, adaptive and passwordless authentication across your enterprise.',
    capabilities: [
      { text: 'Single Sign-On across cloud and on-prem applications', icon: 'LogIn' },
      { text: 'Multi-factor and passwordless authentication', icon: 'Fingerprint' },
      { text: 'Adaptive authentication based on real-time context and risk', icon: 'Radar' },
      { text: 'Directory integration and identity federation', icon: 'FolderSync' },
    ],
  },
  {
    slug: 'identity-governance',
    title: 'Identity Governance & Administration (IGA)',
    shortTitle: 'Governance (IGA)',
    icon: 'ClipboardCheck',
    summary:
      'Automate the creation, modification, and removal of user identities, ensuring users have appropriate access throughout their lifecycle.',
    capabilities: [
      { text: 'Automated joiner-mover-leaver lifecycle management', icon: 'UserPlus' },
      { text: 'Access certification and attestation campaigns', icon: 'ClipboardCheck' },
      { text: 'Access request and workflow automation', icon: 'Workflow' },
      { text: 'Separation-of-duties and audit compliance', icon: 'FileCheck' },
    ],
  },
  {
    slug: 'privileged-access',
    title: 'Privileged Access Management (PAM)',
    shortTitle: 'Privileged (PAM)',
    icon: 'KeyRound',
    summary:
      'Protect your most powerful accounts. Vault credentials, monitor sessions, and enforce least privilege for administrators and high-risk users.',
    capabilities: [
      { text: 'Credential vaulting and rotation', icon: 'Lock' },
      { text: 'Just-in-time privileged elevation with approval workflows', icon: 'Timer' },
      { text: 'Administrator and high-risk user session monitoring', icon: 'Eye' },
      { text: 'Privileged task automation', icon: 'Settings' },
    ],
  },
  {
    slug: 'customer-identity',
    title: 'Customer Identity (CIAM)',
    shortTitle: 'Customer (CIAM)',
    icon: 'HeartHandshake',
    summary:
      'Deliver seamless registration, login, and self-service experiences that improve customer satisfaction, increase engagement, and build brand loyalty.',
    capabilities: [
      { text: 'Frictionless registration and progressive profiling', icon: 'UserCheck' },
      { text: 'Social login and federated identities', icon: 'Share2' },
      { text: 'Account recovery and identity assurance', icon: 'LifeBuoy' },
      { text: 'Consent, privacy, and marketing platform integrations', icon: 'FileLock' },
    ],
  },
  {
    slug: 'b2b-identity',
    title: 'B2B & Partner Identity',
    shortTitle: 'B2B & Partner',
    icon: 'Network',
    summary:
      'Accelerate partner onboarding without sacrificing security or control. Automate partner lifecycle management for speed, security, and scale.',
    capabilities: [
      { text: 'Delegated administration for partner organizations', icon: 'Building2' },
      { text: 'Federation with partner identity providers', icon: 'Link2' },
      { text: 'Partner entitlement management and attestation', icon: 'ListChecks' },
      { text: 'Multi-tenant isolation and governance', icon: 'Layers' },
    ],
  },
  {
    slug: 'ai-identity',
    title: 'AI & Non-Human Identity',
    shortTitle: 'AI Identity',
    icon: 'Bot',
    summary:
      'Bring your AI agents and automations under full identity governance — with attribution, guardrails, and posture scoring to detect drift and anomalies.',
    capabilities: [
      { text: 'AI agent registration, ownership, and attribution', icon: 'ScanFace' },
      { text: 'Deterministic permission scoping for autonomous systems', icon: 'SlidersHorizontal' },
      { text: 'Short-lived credentials replacing static keys and tokens', icon: 'RefreshCcw' },
      { text: 'AI identity posture management and continuous scoring', icon: 'Activity' },
    ],
  },
]
