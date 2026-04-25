import { forwardRef } from "react";
import { motion } from "framer-motion";
import type {
  BorderStyle,
  InvitationData,
  Language,
  ThemePreset,
} from "@/lib/invitation-data";
import { BORDER_STYLES, THEME_PRESETS } from "@/lib/invitation-data";
import { FloatingFlorals } from "./FloatingFlorals";
import kalash from "@/assets/kalash.png";
import cornerFloral from "@/assets/corner-floral.png";
import halfSareeGirl from "@/assets/half-saree-girl.png";

interface Props {
  data: InvitationData;
  language: Language;
  theme: ThemePreset;
  borderStyle?: BorderStyle;
  showParticles?: boolean;
  printMode?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const InvitationCard = forwardRef<HTMLDivElement, Props>(
  (
    {
      data,
      language,
      theme,
      borderStyle = "ornate",
      showParticles = true,
      printMode = false,
    },
    ref,
  ) => {
    const t = THEME_PRESETS[theme];
    const b = BORDER_STYLES[borderStyle];
    const teluguMode = language === "te";
    const fontClass = teluguMode ? "font-telugu" : "font-display";

    const pick = (x?: { te?: string; en?: string } | null) => {
      if (!x) return "";
      return (teluguMode ? x.te : x.en) ?? x.en ?? x.te ?? "";
    };

    // In print mode disable Framer Motion (renders directly)
    const M = printMode
      ? {
          div: (props: React.HTMLAttributes<HTMLDivElement>) => (
            <div {...props} />
          ),
          p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
            <p {...props} />
          ),
        }
      : { div: motion.div, p: motion.p };

    const motionProps = printMode
      ? {}
      : {
          variants: fadeUp,
          initial: "hidden" as const,
          animate: "show" as const,
        };

    return (
      <div
        ref={ref}
        className="invitation-card relative mx-auto w-full max-w-[720px] overflow-hidden rounded-2xl shadow-elegant"
        style={{
          background: "var(--gradient-card)",
          ["--theme-primary" as string]: t.primary,
          ["--theme-accent" as string]: t.accent,
        }}
      >
        <div className="relative p-3 sm:p-4">
          <div
            className={`relative ${b.className}`}
            style={{
              borderColor: "color-mix(in oklab, var(--theme-accent) 65%, transparent)",
              boxShadow:
                "inset 0 0 0 1px color-mix(in oklab, var(--theme-accent) 35%, transparent), inset 0 0 0 6px var(--cream)",
            }}
          >
            {/* Floral corners */}
            {[
              "top-0 left-0",
              "top-0 right-0 scale-x-[-1]",
              "bottom-0 left-0 scale-y-[-1]",
              "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
            ].map((pos, i) => (
              <img
                key={i}
                src={cornerFloral}
                alt=""
                aria-hidden
                width={140}
                height={140}
                loading="lazy"
                className={`pointer-events-none absolute z-10 h-20 w-20 opacity-90 sm:h-28 sm:w-28 ${pos}`}
              />
            ))}

            {showParticles && !printMode && <FloatingFlorals count={10} />}

            <div className="relative z-20 px-5 py-9 sm:px-12 sm:py-14">
              {/* Mantra row */}
              <M.p
                {...motionProps}
                custom={0}
                className="text-center font-telugu text-xs tracking-[0.25em] sm:text-sm"
                style={{ color: "var(--maroon)" }}
              >
                ॥ శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు ॥
              </M.p>

              {/* Kalash at top */}
              <M.div
                {...motionProps}
                custom={1}
                className="mt-2 mb-1 flex justify-center"
              >
                <img
                  src={kalash}
                  alt="Sacred Kalash"
                  width={120}
                  height={120}
                  className="h-20 w-20 sm:h-24 sm:w-24"
                />
              </M.div>

              {/* Title */}
              <M.div {...motionProps} custom={2} className="mt-2 text-center">
                <h1
                  className={`${fontClass} text-3xl leading-tight font-bold sm:text-5xl`}
                  style={{ color: "var(--theme-primary)" }}
                >
                  {pick(data.title)}
                </h1>
                <p
                  className={`${teluguMode ? "font-display italic" : "font-telugu"} mt-2 text-base sm:text-lg`}
                  style={{ color: "var(--gold-deep)" }}
                >
                  {teluguMode ? data.title.en : data.title.te}
                </p>
                <p
                  className={`${fontClass} mt-3 text-sm tracking-wider sm:text-base`}
                  style={{ color: "var(--maroon)" }}
                >
                  {pick(data.subtitle)}
                </p>
              </M.div>

              <M.div {...motionProps} custom={3} className="divider-ornament my-6">
                <span className="text-lg">❋</span>
              </M.div>

              {/* Half Saree girl illustration */}
              <M.div
                {...motionProps}
                custom={4}
                className="mt-2 mb-4 flex justify-center"
              >
                <img
                  src={halfSareeGirl}
                  alt="Half Saree Ceremony"
                  width={120}
                  height={160}
                  className="h-20 w-auto sm:h-24"
                />
              </M.div>

              {/* Grandparents blessings */}
              <M.div {...motionProps} custom={5} className="text-center">
                <p
                  className={`${fontClass} text-xs tracking-[0.25em] uppercase`}
                  style={{ color: "var(--gold-deep)" }}
                >
                  {pick(data.grandparentsLabel)}
                </p>
                <p
                  className={`${fontClass} mt-1 text-base sm:text-lg`}
                  style={{ color: "var(--theme-primary)" }}
                >
                  {pick(data.grandparents)}
                </p>
              </M.div>

              {/* Parents */}
              <M.div {...motionProps} custom={5} className="mt-5 text-center">
                <p
                  className={`${fontClass} text-base font-semibold sm:text-lg`}
                  style={{ color: "var(--maroon)" }}
                >
                  {pick(data.parents)}
                </p>
                <p
                  className={`${fontClass} mt-1 text-xs sm:text-sm`}
                  style={{ color: "var(--gold-deep)" }}
                >
                  — {pick(data.parentsLabel)} —
                </p>
              </M.div>

              {/* Daughters */}
              <M.div {...motionProps} custom={6} className="mt-6 grid gap-4">
                {data.daughters.map((d, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl px-4 py-4 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--theme-accent) 14%, var(--cream)) 0%, var(--cream) 100%)",
                      border:
                        "1px solid color-mix(in oklab, var(--theme-accent) 40%, transparent)",
                    }}
                  >
                    <p
                      className={`${fontClass} text-xs tracking-[0.2em] uppercase sm:text-sm`}
                      style={{ color: "var(--gold-deep)" }}
                    >
                      {pick(d.ceremony)}
                    </p>
                    <h2
                      className={`${fontClass} mt-1 text-2xl leading-tight font-bold sm:text-3xl`}
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {pick(d.name)}
                    </h2>
                  </div>
                ))}
              </M.div>

              {/* Message */}
              <M.p
                {...motionProps}
                custom={7}
                className={`${fontClass} mx-auto mt-7 max-w-lg text-center text-sm leading-relaxed sm:text-[15px] sm:leading-loose`}
                style={{ color: "var(--foreground)" }}
              >
                {pick(data.message)}
              </M.p>

              {/* Event details card */}
              <M.div
                {...motionProps}
                custom={8}
                className="relative mt-8 rounded-xl p-5 sm:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--mango) 18%, var(--cream)) 0%, var(--cream) 100%)",
                  border:
                    "1px solid color-mix(in oklab, var(--gold) 45%, transparent)",
                }}
              >
                <img
                  src={kalash}
                  alt=""
                  aria-hidden
                  width={64}
                  height={64}
                  loading="lazy"
                  className="absolute -top-7 left-1/2 h-14 w-14 -translate-x-1/2"
                />
                <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-3">
                  <DetailBlock
                    label={teluguMode ? "తేదీ" : "Date"}
                    value={pick(data.date)}
                    fontClass={fontClass}
                  />
                  <DetailBlock
                    label={teluguMode ? "సమయం" : "Time"}
                    value={pick(data.time)}
                    fontClass={fontClass}
                  />
                  <DetailBlock
                    label={teluguMode ? "వేదిక" : "Venue"}
                    value={pick(data.venue)}
                    fontClass={fontClass}
                  />
                </div>

                <div
                  className="mx-auto my-4 h-px w-16"
                  style={{ background: "var(--gold)" }}
                />

                <p
                  className={`${fontClass} text-center text-sm font-semibold`}
                  style={{ color: "var(--theme-primary)" }}
                >
                  ✦ {pick(data.muhurtam)} ✦
                </p>
                <p
                  className={`${fontClass} mt-2 text-center text-xs leading-relaxed`}
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {pick(data.venueAddress)}
                </p>
              </M.div>

              {/* Location button */}
              <M.div
                {...motionProps}
                custom={9}
                className="mt-7 flex justify-center"
              >
                <a
                  href={data.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fontClass} group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.04] sm:text-base`}
                  style={{
                    background: "var(--gradient-gold)",
                    color: "var(--maroon-deep)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">{pick(data.locationButton)}</span>
                </a>
              </M.div>

              {/* Phone */}
              {data.phone && (
                <M.p
                  {...motionProps}
                  custom={10}
                  className="font-body mt-4 text-center text-xs sm:text-sm"
                  style={{ color: "var(--maroon)" }}
                >
                  📞 {data.phone}
                </M.p>
              )}

              {/* Blessing footer */}
              <M.p
                {...motionProps}
                custom={11}
                className={`${fontClass} mt-4 text-center text-xs italic sm:text-sm`}
                style={{ color: "var(--gold-deep)" }}
              >
                ❀ {pick(data.blessing)} ❀
              </M.p>

              {/* Credit - responsive auto-scaling, never overlaps */}
              <div className="mt-4 flex w-full justify-center pt-2">
                <p
                  className="block max-w-full truncate text-center tracking-wider opacity-60"
                  style={{
                    color: "var(--maroon)",
                    fontSize: "clamp(7px, 1.2vw, 11px)",
                    lineHeight: 1.4,
                  }}
                >
                  <a
                    href="https://gowthusaidatta.github.io/my_project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Created by Datta
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

InvitationCard.displayName = "InvitationCard";

function DetailBlock({
  label,
  value,
  fontClass,
}: {
  label: string;
  value: string;
  fontClass: string;
}) {
  return (
    <div className="text-center">
      <p
        className={`${fontClass} text-[10px] tracking-[0.25em] uppercase`}
        style={{ color: "var(--gold-deep)" }}
      >
        {label}
      </p>
      <p
        className={`${fontClass} mt-1 text-sm leading-snug font-medium`}
        style={{ color: "var(--maroon)" }}
      >
        {value}
      </p>
    </div>
  );
}
