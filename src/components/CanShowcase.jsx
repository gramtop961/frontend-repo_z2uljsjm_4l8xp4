import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import ParticleField from './ParticleField';
import Spline from '@splinetool/react-spline';

// Positions the can takes per section (viewport-wide panels)
const CAN_STATES = [
  { x: -160, y: -40, rotate: -8, scale: 0.9 },
  { x: 100, y: -10, rotate: 6, scale: 1.0 },
  { x: -40, y: 80, rotate: -2, scale: 1.08 },
  { x: 140, y: -90, rotate: 12, scale: 0.95 },
];

export default function CanShowcase() {
  const sectionsRef = useRef([]);
  const [active, setActive] = useState(0);

  const x = useSpring(useMotionValue(CAN_STATES[0].x), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(CAN_STATES[0].y), { stiffness: 120, damping: 20 });
  const rotate = useSpring(useMotionValue(CAN_STATES[0].rotate), { stiffness: 120, damping: 20 });
  const scale = useSpring(useMotionValue(CAN_STATES[0].scale), { stiffness: 120, damping: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActive(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const state = CAN_STATES[active] || CAN_STATES[0];
    x.set(state.x);
    y.set(state.y);
    rotate.set(state.rotate);
    scale.set(state.scale);
  }, [active, x, y, rotate, scale]);

  const panels = useMemo(() => [
    {
      title: 'Precision Focus',
      text: 'Ultra-clean energy that locks you in. Sharper reactions, faster reads, deadly calm.',
      accent: 'from-cyan-400/40 to-blue-600/30',
    },
    {
      title: 'Explosive Strength',
      text: 'Stacked with ingredients athletes trust for real power and endurance.',
      accent: 'from-rose-500/40 to-orange-500/30',
    },
    {
      title: 'Cold-Brewed Cool',
      text: 'Ice-cooled sensation with a pristine finish. No crash. All control.',
      accent: 'from-indigo-400/40 to-fuchsia-500/30',
    },
    {
      title: 'Fight Night Ready',
      text: 'Designed with the pace of UFC and MMA in mind. Go all rounds.',
      accent: 'from-emerald-400/40 to-teal-500/30',
    },
  ], []);

  return (
    <section id="showcase" className="relative bg-gradient-to-b from-black via-[#06080C] to-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32">
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Built for Fighters</h2>
          <p className="text-white/70 mt-3 max-w-2xl">Scroll to feel the can move as your story unfolds — each section locks a new stance like a fighter switching angles.</p>
        </header>

        {/* Layout: sticky 3D can + scrolling content panels */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Sticky visual area */}
          <div className="relative h-[80vh] lg:h-[120vh] lg:sticky lg:top-24 rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
            <ParticleField />
            <motion.div
              style={{
                x,
                y,
                rotate,
                scale,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
            >
              {/* Using the same Spline can inside a framed area for consistency */}
              <div className="relative w-[420px] h-[420px]">
                <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.15),transparent_50%)]" />
              </div>
            </motion.div>

            {/* cinematic light sweeps */}
            <div className="pointer-events-none absolute -left-1/3 top-1/4 h-40 w-[120%] rotate-[8deg] bg-gradient-to-r from-cyan-400/10 via-white/10 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute -right-1/3 bottom-1/4 h-40 w-[120%] -rotate-[12deg] bg-gradient-to-r from-fuchsia-500/10 via-white/10 to-transparent blur-2xl" />
          </div>

          {/* Scroll panels */}
          <div className="space-y-24">
            {panels.map((p, i) => (
              <article
                key={i}
                ref={(el) => (sectionsRef.current[i] = el)}
                data-index={i}
                className="min-h-[60vh] flex flex-col justify-center"
              >
                <div className={`rounded-3xl p-8 border border-white/10 bg-gradient-to-br ${p.accent}`}>
                  <motion.h3
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold"
                  >
                    {p.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-4 text-white/80"
                  >
                    {p.text}
                  </motion.p>

                  {/* small stat chips */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Zero Crash', 'Fast Uptake', 'Clean Feel', 'Thermo Chill'].map((chip) => (
                      <span key={chip} className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
