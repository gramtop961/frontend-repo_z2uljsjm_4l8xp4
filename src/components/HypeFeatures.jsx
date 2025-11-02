import React from 'react';
import { Flame, Zap, Droplets, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HypeFeatures() {
  const features = [
    {
      icon: Flame,
      title: 'Thermo Surge',
      text: 'A crisp ignition that fuels intense training blocks and fight-night sprints.',
    },
    {
      icon: Zap,
      title: 'Clean Voltage',
      text: 'High output without the jitter. Razor focus, steady hands, perfect timing.',
    },
    {
      icon: Droplets,
      title: 'Cold Condensation',
      text: 'Ultra-cold feel with micro-fizz that snaps you awake without the crash.',
    },
    {
      icon: Shield,
      title: 'Pro-Grade Formula',
      text: 'Built around what elite MMA and UFC athletes demand in the cage.',
    },
  ];

  return (
    <section id="features" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Engineered for Combat Sports</h2>
          <p className="text-white/70 mt-3 max-w-2xl">From warmup to final bell — performance you can feel and control.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  {React.createElement(f.icon, { className: 'h-6 w-6 text-white' })}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/75">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
