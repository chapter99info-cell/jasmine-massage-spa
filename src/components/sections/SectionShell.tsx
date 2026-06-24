import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function SectionShell({ id, eyebrow, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60 sm:text-xs">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl text-primary md:text-5xl">{title}</h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary/65 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
