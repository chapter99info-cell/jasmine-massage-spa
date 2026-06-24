import SectionShell from './SectionShell';

export default function ThaiMassage() {
  return (
    <SectionShell
      id="thai-massage"
      eyebrow="Traditional Thai"
      title="Authentic Thai massage"
      subtitle="Rooted in centuries of healing tradition — combining rhythmic pressure, assisted stretching, and mindful breathwork."
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-primary/10">
          <img
            src="/images/gallery/hot-stone-setup.png"
            alt="Thai massage treatment at Jasmine Spa"
            className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-[420px]"
            loading="lazy"
          />
        </div>
        <div className="space-y-5 text-sm leading-relaxed text-primary/75">
          <p>
            Thai massage at Jasmine uses traditional techniques passed down through generations —
            working energy lines, releasing blockages, and restoring your body&apos;s natural flow.
          </p>
          <p>
            Sessions range from a quick 30-minute refresh to a full 120-minute experience. Wear
            comfortable clothing — no oils required for traditional Thai work.
          </p>
          <ul className="space-y-3 border-t border-primary/10 pt-5 text-primary/85">
            <li>✦ Full-body stretching &amp; joint mobilisation</li>
            <li>✦ Pressure-point release for tired muscles</li>
            <li>✦ Ideal for desk workers, travellers &amp; active lifestyles</li>
          </ul>
          <a
            href="#book"
            className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:border-primary/60"
          >
            Book Thai Massage
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
