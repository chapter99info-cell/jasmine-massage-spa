export const HERO_VIDEO =
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/Jasmine%20Massage%20&%20Spa/VDO/Hero%20cover/jasman_cover.mp4';

export const NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export const NAV_ITEMS = [
  { label: 'บริการ', href: '#services' },
  { label: 'ราคา', href: '#pricing' },
  { label: 'ทีมงาน', href: '#team' },
  { label: 'นวดแผนไทย', href: '#thai-massage' },
  { label: 'จองนัด', href: '#book' },
] as const;
