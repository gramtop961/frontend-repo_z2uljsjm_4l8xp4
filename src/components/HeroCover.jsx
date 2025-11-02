import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroCover() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle radial vignette to push focus to center */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            UNLEASH RAW POWER
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-white/80"
          >
            Ice-cold energy brewed for fighters. Built for focus, speed, and explosive strength.
          </motion.p>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.35 } }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#showcase"
              className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 transition-transform hover:-translate-y-0.5"
            >
              Experience the Rush
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 backdrop-blur"
            >
              Why Fighters Choose Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
