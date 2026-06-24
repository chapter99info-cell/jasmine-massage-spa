import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HERO_VIDEO, NAV_ITEMS, NOISE_OVERLAY } from '../../constants';

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay"
          style={{ backgroundImage: NOISE_OVERLAY }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"
        />

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-6 rounded-b-2xl bg-black px-6 py-2 md:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-medium tracking-wide text-primary transition-opacity hover:opacity-70 sm:text-xs"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative z-10 flex h-full flex-col justify-end p-6 pb-10 md:p-10 md:pb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/70 sm:text-xs"
          >
            South West Rocks, NSW
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-3xl font-serif text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Slow down,
            <br />
            breathe a little <em className="not-italic">deeper</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-5 max-w-md text-sm leading-relaxed text-primary/75 md:text-base"
          >
            Traditional Thai and aromatherapy massage in the heart of South West Rocks — restoring
            calm, one session at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] sm:text-sm"
            >
              Book Now
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:border-primary/60 sm:text-sm"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
