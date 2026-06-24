import SectionShell from './SectionShell';

export default function Team() {
  return (
    <SectionShell
      id="team"
      eyebrow="Our Team"
      title="Skilled, caring therapists"
      subtitle="Every therapist at Jasmine is trained in traditional Thai techniques and aromatherapy — focused on your comfort from the moment you arrive."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { name: 'Senior Therapist', role: 'Thai Massage Specialist' },
          { name: 'Wellness Therapist', role: 'Aromatherapy & Relaxation' },
          { name: 'Spa Therapist', role: 'Deep Tissue & Stretch' },
        ].map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-primary/10 bg-primary/5 p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-black text-2xl font-serif text-primary">
              J
            </div>
            <h3 className="font-serif text-xl text-primary">{member.name}</h3>
            <p className="mt-2 text-xs text-primary/60">{member.role}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
