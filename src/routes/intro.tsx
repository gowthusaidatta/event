import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { NavButton } from "@/components/site/NextButton";
import { useLanguage } from "@/lib/language-context";
import ganesh from "@/assets/ganesh-icon.png";
import kalash from "@/assets/kalash.png";

export const Route = createFileRoute("/intro")({
  head: () => ({
    meta: [
      { title: "Invitation — Koduri Family" },
      {
        name: "description",
        content:
          "Pushpalankarana (Gayatri) & Half Saree Ceremony (Venuhya) — with the blessings of Sri Tatarao garu & Smt. Bhagyalakshmi garu.",
      },
      { property: "og:title", content: "Koduri Family — Invitation" },
      {
        property: "og:description",
        content: "Pushpalankarana (Gayatri) & Half Saree Ceremony (Venuhya) invitation.",
      },
    ],
  }),
  component: IntroPage,
});

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
});

function IntroPage() {
  const { language } = useLanguage();
  const te = language === "te";

  return (
    <PageShell>
      <div
        className="relative mx-auto w-full max-w-xl rounded-3xl border-2 px-6 py-10 text-center shadow-elegant sm:px-10 sm:py-14"
        style={{
          background: "var(--gradient-card)",
          borderColor: "color-mix(in oklab, var(--gold) 60%, transparent)",
          boxShadow:
            "var(--shadow-elegant), inset 0 0 0 6px var(--cream)",
        }}
      >
        <motion.img
          {...stagger(0)}
          src={ganesh}
          alt="Lord Ganesha"
          width={140}
          height={140}
          className="mx-auto h-20 w-20 sm:h-24 sm:w-24"
        />

        <motion.h1
          {...stagger(1)}
          className="font-telugu mt-4 text-3xl leading-tight font-bold sm:text-4xl"
          style={{ color: "var(--maroon)" }}
        >
          {te ? "కోడూరి వారి ఆహ్వానము" : "Koduri Family Invitation"}
        </motion.h1>
        <motion.p
          {...stagger(2)}
          className="font-display mt-1 text-base italic sm:text-lg"
          style={{ color: "var(--gold-deep)" }}
        >
          {te ? "Koduri Family Invitation" : "కోడూరి వారి ఆహ్వానము"}
        </motion.p>

        <motion.div {...stagger(3)} className="divider-ornament my-6">
          <span className="text-lg">❋</span>
        </motion.div>

        <motion.div
          {...stagger(4)}
          className="font-display text-base font-semibold tracking-wide sm:text-lg"
          style={{ color: "var(--maroon)" }}
        >
          {te
            ? (
                <div className="mx-auto w-full max-w-md font-telugu">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-x-2 text-center text-sm font-medium sm:gap-x-3 sm:text-base">
                    <span>గాయత్రి</span>
                    <span aria-hidden>&nbsp;</span>
                    <span>వేణుహ్య</span>
                  </div>
                  <div className="mt-1 grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 text-center sm:gap-x-3">
                    <span>పుష్పాలంకరణ పేరంటము</span>
                    <span>&</span>
                    <span>ఓణీల వేడుక</span>
                  </div>
                </div>
              )
            : (
                <div className="mx-auto w-full max-w-md">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-x-3 text-center text-sm font-medium sm:gap-x-4 sm:text-base">
                    <span><b>Gayatri</b></span>
                    <span aria-hidden>&nbsp;</span>
                    <span><b>Venuhya Sri</b></span>
                  </div>
                  <div className="mt-1 grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 text-center sm:gap-x-4">
                    <span>Pushpalankarana</span>
                    <span>&</span>
                    <span>Half Saree Ceremony</span>
                  </div>
                </div>
              )}
        </motion.div>

        <motion.div {...stagger(5)} className="my-6 flex justify-center">
          <img src={kalash} alt="" aria-hidden width={80} height={80} className="h-14 w-14" />
        </motion.div>

        <motion.p
          {...stagger(6)}
          className="font-display text-xs tracking-[0.3em] uppercase sm:text-sm"
          style={{ color: "var(--gold-deep)" }}
        >
          {te ? "మా ఆత్మీయ తల్లిదండ్రుల ఆశీస్సులతో" : "With the blessings of"}
        </motion.p>
        <motion.p
          {...stagger(7)}
          className={`${te ? "font-telugu" : "font-display"} mt-2 text-base sm:text-lg`}
          style={{ color: "var(--maroon)" }}
        >
          {te
            ? "శ్రీ తాతారావు గారు & శ్రీమతి భాగ్యలక్ష్మి గారు"
            : "Sri Tatarao garu & Smt. Bhagyalakshmi garu"}
        </motion.p>

        <motion.div
          {...stagger(8)}
          className="mx-auto my-5 h-px w-20"
          style={{ background: "var(--gold)" }}
        />

        <motion.p
          {...stagger(9)}
          className="font-display text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--gold-deep)" }}
        >
          {te ? "హృదయపూర్వకంగా ఆహ్వానించువారు" : "Cordially invited by"}
        </motion.p>
        <motion.p
          {...stagger(10)}
          className={`${te ? "font-telugu" : "font-display"} mt-2 text-lg font-semibold sm:text-xl`}
          style={{ color: "var(--maroon-deep)" }}
        >
          {te
            ? "కోడూరి శ్రీనివాస రావు & శ్రీమతి నిర్మల"
            : "Koduri Srinivasa Rao & Smt. Nirmala"}
        </motion.p>
      </div>

      <motion.div
        {...stagger(11)}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <NavButton to="/" direction="back" variant="ghost">
          {te ? "వెనుకకు" : "Back"}
        </NavButton>
        <NavButton to="/gayatri">{te ? "తరువాత" : "Next"}</NavButton>
      </motion.div>
    </PageShell>
  );
}
