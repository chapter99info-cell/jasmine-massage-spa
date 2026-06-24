import { Flower2, Sparkles } from 'lucide-react';
import SectionShell from './SectionShell';

const services = [
  {
    icon: Sparkles,
    tag: 'Relax & Restore',
    title: 'Aromatherapy Massage',
    description:
      'Light to medium pressure with calming essential oils — ideal for stress relief and deep relaxation.',
    image: '/images/gallery/aromatherapy-oils.png',
  },
  {
    icon: Flower2,
    tag: 'Traditional Technique',
    title: 'Thai Massage',
    description:
      'Authentic stretching and pressure-point work to release tension and restore natural mobility.',
    image: '/images/gallery/thai-massage-room.png',
  },
];

export default function Services() {
  return (
    <SectionShell
      id="services"
      eyebrow="Our Treatments"
      title="Massage & wellness"
      subtitle="Two signature treatments tailored to how much time you have — every session is unhurried and personal."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden rounded-2xl border border-primary/10 bg-primary/5"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/50">
                {service.tag}
              </p>
              <h3 className="mb-3 font-serif text-2xl text-primary">{service.title}</h3>
              <p className="text-sm leading-relaxed text-primary/70">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
