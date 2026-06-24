import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { BUSINESS } from '../../constants';

export default function Book() {
  return (
    <section id="book" className="px-4 pb-24 pt-8 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-primary/15 bg-gradient-to-b from-primary/10 to-black p-8 text-center md:rounded-[2rem] md:p-14">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60">
            Book Your Visit
          </p>
          <h2 className="font-serif text-3xl text-primary md:text-5xl">Ready to relax?</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary/70">
            {BUSINESS.address}
            <br />
            {BUSINESS.hours}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:border-primary/60 sm:text-sm"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call to Book
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] sm:text-sm"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Find Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <p className="mt-6 text-xs text-primary/45">
            Online booking coming soon — call us to reserve your session today.
          </p>
        </div>
      </div>
    </section>
  );
}
