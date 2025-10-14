import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselSection() {
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
      {/* Título y subtítulo dentro del contenedor estándar */}
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#FF6600" }}>Credenciales</h1>
          <p className="lead text-lg text-gray-700">
            Cursos inscritos en STPS y emitimos constancia DC-3.
          </p>
        </header>
      </div>

      {/* ===== Carrusel full-bleed (ocupa todo el ancho de la pantalla) ===== */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Track */}
          <div className="flex">
            {/* ========= SLIDE 1: Sobre Nosotros ========= */}
            <div className="min-w-0 shrink-0 grow-0 basis-full">
              {/* Contenido del slide limitado/centrado */}
              <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Misión */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <h5
                      className="text-center font-semibold mb-4"
                      style={{ color: "#FF6600" }}
                    >
                      Nuestra Misión
                    </h5>
                    <p className="text-center text-gray-700">
                      Nuestra misión es fortalecer el capital humano de la industria
                      manufacturera en Tijuana, B.C. mediante formación de alta calidad
                      en seguridad, ingeniería, recursos humanos y optimización de
                      procesos. Promovemos la excelencia operativa, el cumplimiento
                      normativo y la innovación para un crecimiento sostenible.
                    </p>
                    <img
                      src="/images/Mision.png"
                      alt="Misión"
                      className="mt-4 w-full h-48 object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Visión */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <h5
                      className="text-center font-semibold mb-4"
                      style={{ color: "#FF6600" }}
                    >
                      Nuestra Visión
                    </h5>
                    <p className="text-center text-gray-700">
                      Para 2029, seremos líderes en capacitación industrial en Tijuana,
                      B.C., siendo un puente entre las necesidades del sector y las
                      mejores prácticas globales. Impulsamos un ecosistema seguro,
                      eficiente y sostenible que fortalezca la competitividad y la
                      responsabilidad social de las empresas manufactureras.
                    </p>
                    <img
                      src="/images/Vision.png"
                      alt="Visión"
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
                      src="/images/acusedc5.png"
                      alt="Acuse de Recibo DC5"
                      className="mx-auto mb-4 h-40 object-contain"
                      loading="lazy"
                    />
                    <h3
                      className="text-base font-semibold mb-2"
                      style={{ color: "#FF6600" }}
                    >
                      Acuse de Recibo DC5
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Documento que certifica el registro de Indoff University ante las
                      autoridades correspondientes.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="/pdfs/ACUSE_DE_RECIBO_DC5_INDOFF_UNIVERSITY.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-black text-white px-4 py-2 hover:bg-gray-900 transition"
                      >
                        Ver PDF
                      </a>
                      <a
                        href="/pdfs/ACUSE_DE_RECIBO_DC5_INDOFF_UNIVERSITY.pdf"
                        download="ACUSE_DE_RECIBO_DC5_INDOFF_UNIVERSITY.pdf"
                        className="inline-block rounded-md border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6">
                    <img
                      src="/images/STPSIU.png"
                      alt="Registro STPS"
                      className="mx-auto mb-4 h-40 object-contain"
                      loading="lazy"
                    />
                    <h3
                      className="text-base font-semibold mb-2"
                      style={{ color: "#FF6600" }}
                    >
                      Registro STPS
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Certificado oficial que acredita a Indoff University como una
                      institución registrada ante la STPS.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="/pdfs/REGISTRO_STPS_INDOFF_UNIVERSITY.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-black text-white px-4 py-2 hover:bg-gray-900 transition"
                      >
                        Ver PDF
                      </a>
                      <a
                        href="/pdfs/REGISTRO_STPS_INDOFF_UNIVERSITY.pdf"
                        download="REGISTRO_STPS_INDOFF_UNIVERSITY.pdf"
                        className="inline-block rounded-md border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ========= /slides ========= */}
          </div>
        </div>

        {/* Controles alineados al ancho del contenido */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto max-w-7xl h-full relative">
            <button
              aria-label="Anterior"
              onClick={prev}
              className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 text-4xl text-black hover:scale-110 transition-transform select-none"
            >
              ‹
            </button>
            <button
              aria-label="Siguiente"
              onClick={next}
              className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 text-4xl text-black hover:scale-110 transition-transform select-none"
            >
              ›
            </button>
          </div>
        </div>

        {/* Indicadores centrados al ancho del contenido */}
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center gap-2 pt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
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
