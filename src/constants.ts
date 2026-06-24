export const HERO_VIDEO =
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/Jasmine%20Massage%20&%20Spa/VDO/Hero%20cover/jasman_cover.mp4';

export const NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'Thai Massage', href: '#thai-massage' },
  { label: 'Book', href: '#book' },
] as const;

export const PRICING = [
  { duration: '30 minutes', price: '$55' },
  { duration: '45 minutes', price: '$85' },
  { duration: '60 minutes', price: '$95' },
  { duration: '90 minutes', price: '$145' },
  { duration: '120 minutes', price: '$190' },
] as const;

export const BUSINESS = {
  name: 'Jasmine Massage & Spa',
  address: 'Shop 5/12 Gregory Street, South West Rocks, NSW 2431',
  hours: 'Monday – Sunday · 9:00 AM – 5:00 PM',
  phone: '+61000000000',
} as const;
