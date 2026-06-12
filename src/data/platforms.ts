export interface Platform {
  slug: string
  name: string
  category: string
  summary: string
}

export const platforms: Platform[] = [
  {
    slug: 'okta',
    name: 'Okta',
    category: 'Workforce & Customer Identity',
    summary:
      'As Okta’s AMER SI Partner of the Year 2024, we deliver workforce IAM, OIG, and Auth0-powered CIAM deployments with certified experts and proven delivery.',
  },
  {
    slug: 'cyberark',
    name: 'CyberArk',
    category: 'Privileged Access Management',
    summary:
      'Vault, rotate, and monitor privileged credentials with the market-leading PAM platform — deployed and managed by RAAH specialists.',
  },
  {
    slug: 'saviynt',
    name: 'Saviynt',
    category: 'Identity Governance',
    summary:
      'Cloud-native IGA for access certification, lifecycle automation, and audit compliance across your enterprise applications.',
  },
  {
    slug: 'ping',
    name: 'Ping Identity',
    category: 'Enterprise Federation & Access',
    summary:
      'Enterprise-grade SSO, federation, and API access security for complex hybrid environments.',
  },
  {
    slug: 'microsoft',
    name: 'Microsoft Entra',
    category: 'Cloud Identity',
    summary:
      'Maximize your Microsoft investment with Entra ID architecture, conditional access, and hybrid identity integration.',
  },
  {
    slug: 'gigya',
    name: 'SAP CDC (Gigya)',
    category: 'Customer Identity',
    summary:
      'Customer data cloud implementations connecting consent-driven identity to your marketing and commerce stack.',
  },
  {
    slug: 'delinea',
    name: 'Delinea',
    category: 'Privileged Access Management',
    summary:
      'Modern PAM with seamless directory integration for credential vaulting, elevation, and session control.',
  },
  {
    slug: 'omada',
    name: 'Omada',
    category: 'Identity Governance',
    summary:
      'Standards-based IGA delivering provisioning, attestation, and role-based access control at enterprise scale.',
  },
  {
    slug: 'radiant-logic',
    name: 'Radiant Logic',
    category: 'Identity Data Fabric',
    summary:
      'Unify fragmented identity data into a single authoritative source powering authentication and governance.',
  },
  {
    slug: 'servicenow',
    name: 'ServiceNow',
    category: 'Workflow & ITSM Integration',
    summary:
      'Connect identity workflows to enterprise service management for seamless access requests and fulfillment.',
  },
  {
    slug: 'wso2',
    name: 'WSO2',
    category: 'Open-Source IAM & API',
    summary:
      'Open-source identity and API management for organizations that need flexibility and full control.',
  },
]
