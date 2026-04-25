import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Language } from "@/lib/invitation-data";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
  t: <T extends { te: string; en: string }>(value: T) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "koduri-invite-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("te");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "te" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggle = () => setLanguage(language === "te" ? "en" : "te");

  const t = <T extends { te: string; en: string }>(value: T) =>
    language === "te" ? value.te : value.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe SSR fallback — defaults to Telugu
    return {
      language: "te" as Language,
      setLanguage: () => {},
      toggle: () => {},
      t: <T extends { te: string; en: string }>(v: T) => v.te,
    };
  }
  return ctx;
}
