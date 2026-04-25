import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface MusicContextValue {
  playing: boolean;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

// Royalty-free traditional Indian instrumental loop (sitar/flute style).
// Hosted on a public CDN so we don't ship audio binaries with the app.
const MUSIC_URL =
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_8b3e3b3e3b.mp3?filename=indian-sitar-meditation-110374.mp3";

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "none";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <MusicContext.Provider value={{ playing, toggle }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) return { playing: false, toggle: () => {} };
  return ctx;
}
