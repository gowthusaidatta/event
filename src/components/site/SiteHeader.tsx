import { Link } from "@tanstack/react-router";
import { Languages, Music2, VolumeX, Share2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useMusic } from "./MusicProvider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const { playing, toggle: toggleMusic } = useMusic();

  const share = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.origin;
    const text =
      language === "te"
        ? "కోడూరి వారి ఆహ్వాన పత్రిక — దయచేసి తెరవండి"
        : "Koduri Family Invitation — please open";
    if (navigator.share) {
      try {
        await navigator.share({ title: "Koduri Invitation", text, url });
        return;
      } catch {
        /* user cancelled */
      }
    }
    const wa = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    try {
      await navigator.clipboard.writeText(url);
      toast.success(language === "te" ? "లింక్ కాపీ అయింది" : "Link copied");
    } catch {
      /* ignore */
    }
  };

  return (
    <header className="no-print fixed top-0 right-0 left-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
        <Link
          to="/"
          className="font-display rounded-full bg-card/85 px-3 py-1.5 text-xs font-semibold tracking-wider shadow-soft backdrop-blur sm:text-sm"
          style={{ color: "var(--maroon)" }}
        >
          ❋ Koduri
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 rounded-full border border-border/60 bg-card/90 p-1 shadow-soft backdrop-blur">
            <button
              type="button"
              onClick={() => setLanguage("te")}
              aria-label="Telugu"
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs ${
                language === "te"
                  ? "bg-gradient-maroon text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Languages className="h-3 w-3" />
              <span className="font-telugu">తెలుగు</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="English"
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs ${
                language === "en"
                  ? "bg-gradient-maroon text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-display">EN</span>
            </button>
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={toggleMusic}
            aria-label={playing ? "Mute music" : "Play music"}
            className="h-9 w-9 rounded-full bg-card/90 backdrop-blur"
          >
            {playing ? (
              <Music2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={share}
            aria-label="Share"
            className="h-9 w-9 rounded-full bg-card/90 backdrop-blur"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
