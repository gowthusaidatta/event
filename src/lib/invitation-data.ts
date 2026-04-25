export type Language = "te" | "en";

export type ThemePreset = "classic" | "peacock" | "mango" | "gold";
export type BorderStyle = "ornate" | "double" | "simple" | "scalloped";

export interface Bilingual {
  te: string;
  en: string;
}

export interface Daughter {
  name: Bilingual;
  ceremony: Bilingual;
}

export interface InvitationData {
  title: Bilingual;
  subtitle: Bilingual;
  grandparents: Bilingual;
  grandparentsLabel: Bilingual;
  parents: Bilingual;
  parentsLabel: Bilingual;
  daughters: Daughter[];
  message: Bilingual;
  date: Bilingual;
  time: Bilingual;
  muhurtam: Bilingual;
  venue: Bilingual;
  venueAddress: Bilingual;
  blessing: Bilingual;
  hostsLabel: Bilingual;
  phone: string;
  locationUrl: string;
  locationButton: Bilingual;
}

export const DEFAULT_INVITATION: InvitationData = {
  title: {
    te: "కోడూరి వారి ఆహ్వానము",
    en: "Koduri Family Invitation",
  },
  subtitle: {
    te: "పుష్పాలంకరణ పేరంటము & ఓణీల వేడుక",
    en: "Pushpalankarana & Half Saree Ceremony",
  },
  grandparentsLabel: {
    te: "మా ఆత్మీయ తల్లిదండ్రులు",
    en: "With the blessings of",
  },
  grandparents: {
    te: "శ్రీ తాతారావు గారు & శ్రీమతి భాగ్యలక్ష్మి గార్ల ఆశీస్సులతో",
    en: "Sri Tatarao garu & Smt. Bhagyalakshmi garu",
  },
  parentsLabel: {
    te: "దంపతుల వ్రాయు శుభలేఖార్థములు",
    en: "Cordially invited by",
  },
  parents: {
    te: "కోడూరి శ్రీనివాస రావు - శ్రీమతి నిర్మల",
    en: "Koduri Srinivasa Rao & Smt. Nirmala",
  },
  hostsLabel: {
    te: "తల్లిదండ్రులు",
    en: "Proud Parents",
  },
  daughters: [
    {
      name: { te: "గాయత్రి", en: "Gayatri" },
      ceremony: {
        te: "మొదటి కుమార్తె చి||సౌ|| — పుష్పాలంకరణ పేరంటము",
        en: "Eldest daughter — Pushpalankarana Ceremony",
      },
    },
    {
      name: { te: "వేణుహ్య శ్రీ", en: "Venuhya Sri" },
      ceremony: {
        te: "రెండో కుమార్తె చి||సౌ|| — ఓణీల వేడుక ఆహ్వానం",
        en: "Younger daughter — Half Saree (Langa Voni) Ceremony",
      },
    },
  ],
  message: {
    te: "కావున తామెల్లరు తప్పక విచ్చేసి మా కుమార్తెలను ఆశీర్వదించ ప్రార్థన.",
    en: "We humbly request your gracious presence to bless our beloved daughters on this auspicious occasion.",
  },
  date: {
    te: "ది. 03-05-2026, ఆదివారం",
    en: "Sunday, 3rd May 2026",
  },
  time: {
    te: "మ|| 12:00 గంటలకు",
    en: "12:00 PM Onwards",
  },
  muhurtam: {
    te: "విందు: 12:00 PM",
    en: "Lunch: 12:00 PM",
  },
  venue: {
    te: "శ్రీరస్తు బాంక్వెట్ హాల్",
    en: "Srirastu Banquet Hall",
  },
  venueAddress: {
    te: "LIC ఆఫీసు ఎదురుగా, మొరంపూడి జంక్షన్, రాజమహేంద్రవరం, ఆంధ్రప్రదేశ్ 533103",
    en: "Opp. LIC Office, Morampudi Junction, Rajahmundry, Andhra Pradesh 533103",
  },
  blessing: {
    te: "మీ ఆశీస్సులు మాకు అత్యంత ముఖ్యం",
    en: "Your blessings mean the world to us",
  },
  phone: "+91 98445 84695, +91 83414 43364",
  locationUrl: "https://maps.app.goo.gl/JbntC42GKUhJP1xr5?g_st=ac",
  locationButton: {
    te: "📍 ప్రదేశం చూడండి",
    en: "📍 View Location",
  },
};

export const THEME_PRESETS: Record<
  ThemePreset,
  { name: string; primary: string; accent: string; bg: string; swatch: string }
> = {
  classic: {
    name: "Maroon & Gold",
    primary: "var(--maroon)",
    accent: "var(--gold)",
    bg: "var(--cream)",
    swatch: "linear-gradient(135deg, var(--maroon) 0%, var(--gold) 100%)",
  },
  peacock: {
    name: "Peacock & Gold",
    primary: "var(--peacock-deep)",
    accent: "var(--gold)",
    bg: "var(--cream)",
    swatch: "linear-gradient(135deg, var(--peacock-deep) 0%, var(--gold) 100%)",
  },
  mango: {
    name: "Mango & Maroon",
    primary: "var(--maroon)",
    accent: "var(--mango)",
    bg: "var(--cream)",
    swatch: "linear-gradient(135deg, var(--mango) 0%, var(--maroon) 100%)",
  },
  gold: {
    name: "Royal Gold",
    primary: "var(--gold-deep)",
    accent: "var(--maroon)",
    bg: "var(--cream)",
    swatch: "linear-gradient(135deg, var(--gold-light) 0%, var(--gold-deep) 100%)",
  },
};

export const BORDER_STYLES: Record<
  BorderStyle,
  { name: string; className: string; preview: string }
> = {
  ornate: {
    name: "Ornate",
    className: "border-2 rounded-xl",
    preview: "border-2 rounded-md",
  },
  double: {
    name: "Double",
    className: "border-4 border-double rounded-xl",
    preview: "border-4 border-double rounded-md",
  },
  simple: {
    name: "Simple",
    className: "border rounded-lg",
    preview: "border rounded",
  },
  scalloped: {
    name: "Scalloped",
    className: "border-2 border-dashed rounded-2xl",
    preview: "border-2 border-dashed rounded-lg",
  },
};
