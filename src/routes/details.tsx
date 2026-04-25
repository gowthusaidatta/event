import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { NavButton } from "@/components/site/NextButton";
import { useLanguage } from "@/lib/language-context";
import { DEFAULT_INVITATION } from "@/lib/invitation-data";
import kalash from "@/assets/kalash.png";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "Event Details — Sunday, 3rd May 2026 · Rajahmundry" },
      {
        name: "description",
        content:
          "Sunday, 3rd May 2026, 12:00 PM — Srirastu Banquet Hall, Morampudi Junction, Rajahmundry. Koduri Family Invitation.",
      },
      { property: "og:title", content: "Event Details — Koduri Family" },
      {
        property: "og:description",
        content: "Sunday, 3rd May 2026 · 12:00 PM · Srirastu Banquet Hall, Rajahmundry.",
      },
    ],
  }),
  component: DetailsPage,
});

const fade = (i: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
});

function DetailsPage() {
  const { language, t } = useLanguage();
  const te = language === "te";
  const data = DEFAULT_INVITATION;

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-2xl text-center">
        <motion.p
          {...fade(0)}
          className={`${te ? "font-telugu" : "font-display"} mx-auto max-w-lg text-base leading-relaxed sm:text-lg`}
          style={{ color: "var(--maroon)" }}
        >
          {t(data.message)}
        </motion.p>

        <motion.div
          {...fade(1)}
          className="relative mx-auto mt-8 rounded-2xl border-2 p-6 shadow-elegant sm:p-8"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--mango) 18%, var(--cream)) 0%, var(--cream) 100%)",
            borderColor: "color-mix(in oklab, var(--gold) 50%, transparent)",
          }}
        >
          <img
            src={kalash}
            alt=""
            aria-hidden
            width={80}
            height={80}
            className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2"
          />

          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Detail
              label={te ? "తేదీ" : "Date"}
              value={t(data.date)}
              te={te}
            />
            <Detail
              label={te ? "సమయం" : "Time"}
              value={t(data.time)}
              te={te}
            />
          </div>

          <div
            className="mx-auto my-5 h-px w-20"
            style={{ background: "var(--gold)" }}
          />

          <p
            className={`${te ? "font-telugu" : "font-display"} text-base font-semibold sm:text-lg`}
            style={{ color: "var(--maroon-deep)" }}
          >
            ✦ {t(data.muhurtam)} ✦
          </p>

          <div
            className="mx-auto my-5 h-px w-20"
            style={{ background: "var(--gold)" }}
          />

          <p
            className={`${te ? "font-telugu" : "font-display"} text-xs tracking-[0.3em] uppercase`}
            style={{ color: "var(--gold-deep)" }}
          >
            {te ? "వేదిక" : "Venue"}
          </p>
          <p
            className={`${te ? "font-telugu" : "font-display"} mt-2 text-xl font-bold sm:text-2xl`}
            style={{ color: "var(--maroon-deep)" }}
          >
            {t(data.venue)}
          </p>
          <p
            className={`${te ? "font-telugu" : "font-display"} mt-2 text-sm leading-relaxed`}
            style={{ color: "var(--muted-foreground)" }}
          >
            {t(data.venueAddress)}
          </p>

          <a
            href={data.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold sm:text-base"
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
            <MapPin className="relative h-4 w-4" />
            <span className="relative">
              {te ? "Google Maps లో చూడండి" : "View on Google Maps"}
            </span>
          </a>

          {data.phone && (
            <p
              className="font-body mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm"
              style={{ color: "var(--maroon)" }}
            >
              <Phone className="h-3.5 w-3.5" />
              {data.phone}
            </p>
          )}
        </motion.div>

        <motion.p
          {...fade(2)}
          className={`${te ? "font-telugu" : "font-display"} mt-8 text-sm italic sm:text-base`}
          style={{ color: "var(--gold-deep)" }}
        >
          ❀ {t(data.blessing)} ❀
        </motion.p>

        <motion.div
          {...fade(3)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <NavButton to="/venuhya" direction="back" variant="ghost">
            {te ? "వెనుకకు" : "Back"}
          </NavButton>
          <NavButton to="/">{te ? "మొదటికి" : "Home"}</NavButton>
        </motion.div>

        <p
          className="mt-8 text-center tracking-wider opacity-60"
          style={{
            color: "var(--maroon)",
            fontSize: "clamp(8px, 1.2vw, 11px)",
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
    </PageShell>
  );
}

function Detail({
  label,
  value,
  te,
}: {
  label: string;
  value: string;
  te: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className="font-display text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "var(--gold-deep)" }}
      >
        {label}
      </p>
      <p
        className={`${te ? "font-telugu" : "font-display"} mt-1 text-base font-medium sm:text-lg`}
        style={{ color: "var(--maroon)" }}
      >
        {value}
      </p>
    </div>
  );
}
