import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
  direction?: "next" | "back";
  variant?: "primary" | "ghost";
}

export function NavButton({
  to,
  children,
  direction = "next",
  variant = "primary",
}: Props) {
  const isPrimary = variant === "primary";
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.04] sm:px-8 sm:text-base ${
        isPrimary ? "font-display animate-glow" : "font-display"
      }`}
      style={
        isPrimary
          ? {
              background: "var(--gradient-gold)",
              color: "var(--maroon-deep)",
              boxShadow: "var(--shadow-gold)",
            }
          : {
              background: "color-mix(in oklab, var(--cream) 80%, transparent)",
              color: "var(--maroon)",
              border: "1px solid color-mix(in oklab, var(--gold) 50%, transparent)",
            }
      }
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      {direction === "back" && (
        <ArrowLeft className="relative h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      )}
      <span className="relative">{children}</span>
      {direction === "next" && (
        <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
