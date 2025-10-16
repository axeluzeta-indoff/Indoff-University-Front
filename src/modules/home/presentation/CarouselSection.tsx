import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { uploads } from "../../../utils/constants";

export default function CarouselSection() {
  const { t } = useTranslation();

  // Autoplay 4s, pausa al hover / interacción
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  // Embla con loop
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [autoplay.current]
  );

  const [selected, setSelected] = useState(0);
  const slides = [0, 1];

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <section id="nosotros" className="scroll-mt-24 py-16">
      {/* Título y subtítulo */}
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#FF6600" }}>
            {t("carousel.credentials.title")}
          </h1>
          <p className="lead text-lg text-gray-700">
            {t("carousel.credentials.subtitle")}
          </p>
        </header>
      </div>

      {/* ===== Carrusel full-bleed ===== */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Track */}
          <div className="flex">
            {/* ========= SLIDE 1: Sobre Nosotros ========= */}
            <div className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Misión */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <h5 className="text-center font-semibold mb-4" style={{ color: "#FF6600" }}>
                      {t("carousel.about.mission.title")}
                    </h5>
                    <p className="text-center text-gray-700">
                      {t("carousel.about.mission.body")}
                    </p>
                    <img
                      src={uploads("Mision.webp")}
                      alt={t("carousel.about.mission.img_alt")}
                      className="mt-4 w-full h-48 object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Visión */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <h5 className="text-center font-semibold mb-4" style={{ color: "#FF6600" }}>
                      {t("carousel.about.vision.title")}
                    </h5>
                    <p className="text-center text-gray-700">
                      {t("carousel.about.vision.body")}
                    </p>
                    <img
                      src={uploads("Vision.webp")}
                      alt={t("carousel.about.vision.img_alt")}
                      className="mt-4 w-full h-48 object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ========= SLIDE 2: Credenciales ========= */}
            <div className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  {/* Card 1 */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <img
                      src={uploads("dc5.webp")}
                      alt={t("carousel.credentials.dc5.img_alt")}
                      className="mx-auto mb-4 h-40 object-contain"
                      loading="lazy"
                    />
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#FF6600" }}>
                      {t("carousel.credentials.dc5.title")}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {t("carousel.credentials.dc5.body")}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={uploads("pdfs/ACUSE_DE_RECIBO_DC5_INDOFF_UNIVERSITY.pdf")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-black text-white px-4 py-2 hover:bg-gray-900 transition"
                      >
                        {t("carousel.common.view_pdf")}
                      </a>
                      <a
                        href={uploads("pdfs/ACUSE_DE_RECIBO_DC5_INDOFF_UNIVERSITY.pdf")}
                        download="ACUSE_DE_RECIBO_DC5_INDOFF_UNIVERSITY.pdf"
                        className="inline-block rounded-md border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition"
                      >
                        {t("carousel.common.download")}
                      </a>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <img
                      src={uploads("STPS.webp")}
                      alt={t("carousel.credentials.stps.img_alt")}
                      className="mx-auto mb-4 h-40 object-contain"
                      loading="lazy"
                    />
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#FF6600" }}>
                      {t("carousel.credentials.stps.title")}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {t("carousel.credentials.stps.body")}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={uploads("pdfs/REGISTRO_STPS_INDOFF_UNIVERSITY.pdf")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-black text-white px-4 py-2 hover:bg-gray-900 transition"
                      >
                        {t("carousel.common.view_pdf")}
                      </a>
                      <a
                        href={uploads("pdfs/REGISTRO_STPS_INDOFF_UNIVERSITY.pdf")}
                        download="REGISTRO_STPS_INDOFF_UNIVERSITY.pdf"
                        className="inline-block rounded-md border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition"
                      >
                        {t("carousel.common.download")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ========= /slides ========= */}
          </div>
        </div>

        {/* Controles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto max-w-7xl h-full relative">
            <button
              aria-label={t("carousel.common.prev")}
              onClick={prev}
              className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 text-4xl text-black hover:scale-110 transition-transform select-none"
            >
              ‹
            </button>
            <button
              aria-label={t("carousel.common.next")}
              onClick={next}
              className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 text-4xl text-black hover:scale-110 transition-transform select-none"
            >
              ›
            </button>
          </div>
        </div>

        {/* Indicadores */}
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center gap-2 pt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={t("carousel.common.go_to_slide", { n: i + 1 })}
                className={[
                  "h-2.5 w-2.5 rounded-full ring-1 ring-black/20",
                  selected === i ? "bg-orange-500" : "bg-white/50 hover:bg-white/70",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ===== /full-bleed ===== */}
    </section>
  );
}
