import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import jasmine from "@/assets/jasmine.png";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
}

export function FloatingFlorals({ count = 12 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 18 + Math.random() * 28,
        duration: 16 + Math.random() * 14,
        delay: Math.random() * 12,
        drift: (Math.random() - 0.5) * 80,
        rotate: Math.random() * 360,
      })),
    );
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={jasmine}
          alt=""
          width={64}
          height={64}
          loading="lazy"
          className="absolute opacity-60"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            top: "100%",
          }}
          animate={{
            y: ["0vh", "-115vh"],
            x: [0, p.drift, -p.drift / 2, p.drift / 3, 0],
            rotate: [0, p.rotate, p.rotate * 1.5],
            opacity: [0, 0.65, 0.65, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
