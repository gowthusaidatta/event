import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { NavButton } from "@/components/site/NextButton";
import { useLanguage } from "@/lib/language-context";
import ganesh from "@/assets/ganesh-icon.png";
import cornerFloral from "@/assets/corner-floral.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koduri Family Invitation — కోడూరి వారి ఆహ్వాన పత్రిక" },
      {
        name: "description",
        content:
          "Pushpalankarana & Half Saree Ceremony invitation for Gayatri & Venuhya Sri — Sunday, 3rd May 2026 at Srirastu Banquet Hall, Rajahmundry.",
      },
      { property: "og:title", content: "Koduri Family Invitation" },
      {
        property: "og:description",
        content: "Please join us to bless our daughters on this auspicious day.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { language } = useLanguage();

  return (
    <PageShell>
      {/* Decorative top corners on the landing */}
      {["top-0 left-0", "top-0 right-0 scale-x-[-1]"].map((pos, i) => (
        <img
          key={i}
          src={cornerFloral}
          alt=""
          aria-hidden
          width={200}
          height={200}
          className={`pointer-events-none absolute z-0 h-32 w-32 opacity-50 sm:h-48 sm:w-48 ${pos}`}
        />
      ))}

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.img
          src={ganesh}
          alt="Lord Ganesha"
          width={200}
          height={200}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-2 h-24 w-24 sm:h-32 sm:w-32"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-telugu text-xs tracking-[0.3em] sm:text-sm"
          style={{ color: "var(--maroon)" }}
        >
          ॥ శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు ॥
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="font-telugu mt-5 text-4xl leading-tight font-bold sm:text-6xl"
          style={{ color: "#9d174d" }}
        >
          {language === "te"
            ? "కోడూరి వారి ఆహ్వాన పత్రిక"
            : "Koduri Family"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="font-display mt-3 text-xl tracking-wide italic sm:text-3xl"
          style={{ color: "var(--maroon)" }}
        >
          {language === "te" ? "Koduri Family Invitation" : "Invitation Card"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="divider-ornament mt-7 w-full max-w-sm"
        >
          <span className="text-lg">❋</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="font-display mt-5 max-w-md text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--muted-foreground)" }}
        >
          {language === "te"
            ? "మా కుమార్తెల పుష్పాలంకరణ & ఓణీల వేడుక సందర్భంగా మిమ్మల్ని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము."
            : "We warmly invite you to the Pushpalankarana & Half Saree Ceremony of our beloved daughters."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-10"
        >
          <NavButton to="/intro">
            {language === "te" ? "ఆహ్వానం తెరవండి" : "Open Invitation"}
          </NavButton>
        </motion.div>
      </div>
    </PageShell>
  );
}
