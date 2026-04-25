import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { NavButton } from "@/components/site/NextButton";
import { useLanguage } from "@/lib/language-context";
import portrait from "@/assets/daughter-venuhya.jpg";

export const Route = createFileRoute("/venuhya")({
  head: () => ({
    meta: [
      { title: "Venuhya Sri — Half Saree Ceremony" },
      {
        name: "description",
        content:
          "Younger daughter Venuhya Sri's Half Saree (Langa Voni) Ceremony — Koduri Family Invitation.",
      },
      { property: "og:title", content: "Venuhya Sri — Half Saree Ceremony" },
      {
        property: "og:description",
        content: "Join us in blessing Venuhya Sri on her Half Saree ceremony.",
      },
    ],
  }),
  component: VenuhyaPage,
});

function VenuhyaPage() {
  const { language } = useLanguage();
  const te = language === "te";

  return (
    <PageShell>
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[11px] tracking-[0.4em] uppercase sm:text-xs"
          style={{ color: "var(--gold-deep)" }}
        >
          {te ? "రెండవ కుమార్తె" : "Younger Daughter"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className={`${te ? "font-telugu" : "font-display"} mt-2 text-2xl font-semibold sm:text-3xl`}
          style={{ color: "var(--maroon)" }}
        >
          {te ? "ఓణీల వేడుక" : "Half Saree Ceremony"}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6"
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full opacity-70 blur-xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              border: "6px solid var(--gold)",
              boxShadow: "var(--shadow-gold), 0 0 0 3px var(--cream) inset",
              width: "min(72vw, 280px)",
              height: "min(72vw, 280px)",
            }}
          >
            <img
              src={portrait}
              alt="Venuhya Sri"
              width={768}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className={`${te ? "font-telugu" : "font-display"} mt-7 text-4xl font-bold text-gold-gradient sm:text-5xl`}
          style={{ color: "#dc2626" }}
        >
          {te ? "వేణుహ్య శ్రీ" : "Venuhya Sri"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display mt-1 text-base italic sm:text-lg"
          style={{ color: "var(--maroon)" }}
        >
          {te ? "Venuhya Sri" : "వేణుహ్య శ్రీ"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <NavButton to="/gayatri" direction="back" variant="ghost">
            {te ? "వెనుకకు" : "Back"}
          </NavButton>
          <NavButton to="/details">{te ? "వివరాలు" : "Event Details"}</NavButton>
        </motion.div>
      </div>
    </PageShell>
  );
}
