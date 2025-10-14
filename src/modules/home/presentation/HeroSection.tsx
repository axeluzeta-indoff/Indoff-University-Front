import { useEffect, useRef, useState } from "react";
import YouTube, { type YouTubeEvent, type YouTubeProps } from "react-youtube";

const YT_STATE = { ENDED: 0 } as const;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubeEvent["target"] | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const onReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    if (event.data === YT_STATE.ENDED) {
      event.target.seekTo(0);
      event.target.playVideo();
    }
  };

  const onError: YouTubeProps["onError"] = (e) => {
    console.warn("YouTube embed error:", e.data);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const p = playerRef.current;
        if (!p) return;
        if (entry.isIntersecting) p.playVideo();
        else p.pauseVideo();
      },
      { threshold: 0.5 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const handleUnmute = () => {
    const p = playerRef.current;
    if (!p) return;
    p.unMute();
    p.playVideo();
    setOverlayVisible(false);
  };

  return (
    <section id="inicio" className="scroll-mt-24 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center mx-auto max-w-7xl px-4">
        {/* Video */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-lg shadow-xl"
          aria-label="Video de portada"
        >
          <div className="aspect-video relative">
            <YouTube
              videoId="FNoG1YLnYUs"
              className="absolute inset-0 w-full h-full"
              iframeClassName="w-full h-full rounded-lg"
              onReady={onReady}
              onStateChange={onStateChange}
              onError={onError}
              opts={{
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  mute: 1,
                  loop: 1,
                  playlist: "FNoG1YLnYUs",
                  modestbranding: 1,
                  rel: 0,
                  playsinline: 1,
                  origin: window.location.origin,
                },
              }}
            />
          </div>

          {overlayVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
              <button
                onClick={handleUnmute}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 active:scale-95 transition-all shadow-lg"
                aria-label="Activar sonido del video"
              >
                Activar Sonido
              </button>
            </div>
          )}
        </div>

        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "#FF6600" }}>
            Educación profesional<br />certificada
          </h1>
          <p className="mt-6 text-gray-800 text-base leading-7">
            Indoff University S.C. fue creada en 2018 por Indoff de México, una empresa con más de 30 años de
            experiencia en la implementación de proyectos de integración de ingeniería en el área de manejo de
            materiales, que ha capacitado a su equipo de trabajo como instructores para transmitir su conocimiento.
          </p>
          <a href="/#cursos" className="mt-6 inline-block rounded-md bg-black text-white px-5 py-2 hover:bg-gray-900 transition">
            Ver Cursos
          </a>
        </div>
      </div>
    </section>
  );
}
