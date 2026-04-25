import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FloatingFlorals } from "@/components/invitation/FloatingFlorals";

interface Props {
  children: ReactNode;
  particles?: boolean;
}

export function PageShell({ children, particles = true }: Props) {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--mango) 22%, transparent), transparent 60%), radial-gradient(circle at 80% 100%, color-mix(in oklab, var(--peacock) 16%, transparent), transparent 55%), var(--cream-deep)",
      }}
    >
      {particles && <FloatingFlorals count={8} />}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28"
      >
        {children}
      </motion.div>
    </main>
  );
}
