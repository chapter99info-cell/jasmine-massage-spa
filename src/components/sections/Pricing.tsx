import SectionShell from './SectionShell';
import { PRICING } from '../../constants';

const menus = [
  { title: 'Aromatherapy Massage', note: 'Essential oils · gentle to medium pressure' },
  { title: 'Thai Massage', note: 'Stretching · acupressure · deep muscle work' },
];

export default function Pricing() {
  return (
    <SectionShell
      id="pricing"
      eyebrow="Menu & Pricing"
      title="Choose your duration"
      subtitle="Walk-ins welcome. Online booking coming soon."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {menus.map((menu) => (
          <div
            key={menu.title}
            className="rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/10 to-transparent p-6 md:p-8"
          >
            <h3 className="mb-1 font-serif text-2xl text-primary">{menu.title}</h3>
            <p className="mb-6 text-xs text-primary/55">{menu.note}</p>
            <ul className="space-y-0">
              {PRICING.map((row, index) => (
                <li
                  key={row.duration}
                  className={`flex items-center justify-between py-4 text-sm ${
                    index < PRICING.length - 1 ? 'border-b border-primary/10' : ''
                  }`}
                >
                  <span className="text-primary/70">{row.duration}</span>
                  <span className="font-bold text-primary">{row.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
