import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Animated particle dust/magic field used as a subtle atmospheric layer
export default function ParticleField({ count = 80, color = 'rgba(255,255,255,0.7)' }) {
  const particles = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
      driftX: (Math.random() - 0.5) * 30,
      driftY: (Math.random() - 0.5) * 20,
      blur: Math.random() * 4 + 1,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{
            x: `${p.x}%`,
            y: `${p.y}%`,
            opacity: 0,
          }}
          animate={{
            x: [`${p.x}%`, `${p.x + p.driftX}%`, `${p.x}%`],
            y: [`${p.y}%`, `${p.y + p.driftY}%`, `${p.y}%`],
            opacity: [0, 1, 0.6, 1, 0],
            filter: [`blur(${p.blur}px)`, `blur(${p.blur + 1}px)`, `blur(${p.blur}px)`],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            background: color,
            borderRadius: 9999,
          }}
        />
      ))}
    </div>
  );
}
