export interface Testimonial {
  quote: string
  source: string
  tag: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'RAAH Technologies has demonstrated its commitment to excellence in the field, investing heavily in Okta skills to deliver successful customer projects across regions — with impressive year-over-year growth.',
    source: 'Okta — AMER SI Partner of the Year 2024',
    tag: 'Partner award',
  },
  {
    quote:
      'A leading telecom company needed to unify workforce access and enhance customer engagement while protecting customer data. RAAH delivered a unified identity platform serving millions of users.',
    source: 'Telecommunications client',
    tag: 'Case study',
  },
  {
    quote:
      'A fast-growing fintech firm needed to secure a large number of APIs for partners and customers. RAAH implemented a flexible identity solution with a seamless, secure login experience.',
    source: 'Financial services client',
    tag: 'Case study',
  },
]
