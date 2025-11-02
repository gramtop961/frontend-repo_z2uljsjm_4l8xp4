import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_500px_at_50%_0%,rgba(56,189,248,0.18),transparent),linear-gradient(to_bottom,#000,#030712)] text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Ready to Enter the Cage?
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/80"
        >
          Cold, clean and ruthless. Pre-order now and be the first to feel the new standard in energy.
        </motion.p>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-white text-black px-8 py-3 text-sm font-semibold shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 transition-transform hover:-translate-y-0.5"
          >
            Pre-Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
