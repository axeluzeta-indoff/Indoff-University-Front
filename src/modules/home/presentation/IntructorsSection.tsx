import InstructorFeatured from "../../../components/InstructorFeatured";
import InstructorCard from "../../../components/IntructorCard";

export default function InstructorsSection() {
  // Sube tus imágenes reales a InMotion/CDN y reemplaza las URLs
  const featured = {
    photo: "/images/steve_bloom.jpg",
    name: "Ing. Steve D. Bloom",
    title: "Rector & Fundador",
    email: "steve.bloom@indoff.com",
    phone: "(664) 412 2989",
    bullets: [
      "Se unió a Indoff en 1994, fundó Indoff de México en 2008 e Indoff University en 2018.",
      "Estudios en California State University y University of Wisconsin, Madison.",
      "Reconocido por la STPS (Secretaría del Trabajo y Previsión Social).",
      "37+ años de experiencia en automatización, robótica y manejo de materiales.",
      "Mentor de más de 100 estudiantes de UTT, UABC, TEC y CETYS."
    ],
  };

  const others = [
    {
      photo: "/images/victoria_bloom.jpg",
      name: "Ing. Victoria Bloom",
      role: "Instructora",
      bullets: [
        "Especialista en Lean Manufacturing y productividad.",
        "12+ años de experiencia en industria manufacturera.",
        "Egresada de CETYS, cursa MBA.",
      ],
      email: "victoria.bloom@indoff.com",
      phone: "(663) 109 8054",
    },
    {
      photo: "/images/carlos_calles.jpg",
      name: "Ing. Carlos Calles",
      role: "Instructor",
      bullets: [
        "Ingeniero industrial (Univ. de Sonora).",
        "20+ años en la industria; 16 enfocados en seguridad.",
        "Gerente de proyectos en Indoff de México.",
      ],
      email: "carlos.calles@indoff.com",
      phone: "(664) 279 5407",
    },
    {
      photo: "/images/ulises_castillo.jpg",
      name: "Ing. Ulises Castillo",
      role: "Instructor",
      bullets: [
        "8+ años de experiencia en procesos de soldadura y manufactura metálica.",
        "Competente en normativas y técnicas avanzadas.",
      ],
      email: "ulises.castillo@indoff.com",
      phone: "(618) 731 3095",
    },
    {
      photo: "/images/kassandra_escobar.jpg",
      name: "Lic. Kassandra Escobar",
      role: "Instructora",
      bullets: [
        "Diseño gráfico con 8+ años de experiencia.",
        "Desarrolladora de contenido para cursos presenciales y en línea.",
      ],
      email: "kassandra.escobar@indoff.com",
      phone: "(664) 598 9920",
    },
    // --- segunda fila ---
    {
      photo: "/images/ana_gallegos.jpg",
      name: "Lic. Ana Gallegos",
      role: "Instructora",
      bullets: [
        "Lic. en Comunicación por UABC.",
        "Asesora en estrategias de retención y cultura organizacional.",
      ],
      email: "ana.gallegos@indoff.com",
      phone: "(664) 123 39 90",
    },
    {
      photo: "/images/aldo_romero.jpg",
      name: "Lic. Aldo Romero",
      role: "Instructor",
      bullets: [
        "Lic. en Negocios Internacionales por UABC.",
        "Certificado como instructor ante STPS.",
        "Especialista en Servicio al Cliente (4+ años de experiencia).",
      ],
      email: "aldo.romero@indoff.com",
      phone: "(664) 386 9506",
    },
    {
      photo: "/images/jonathan_hernandez.jpg",
      name: "Ing. Jonathan Hernandez",
      role: "Instructor",
      bullets: [
        "Ing. Electromecánico por TecNM.",
        "Especialista en proyectos electromecánicos (6+ años).",
        "Miembro de Indoff de México en proyectos de manejo de material.",
      ],
      email: "jonathan.hernandez@indoff.com",
      phone: "(664) 812 4200",
    },
    {
      photo: "/images/priscila_nieto.jpg",
      name: "Ing. Priscila Nieto",
      role: "Instructora",
      bullets: [
        "Ing. en Ciencias Computacionales por CETYS.",
        "Certificada por STPS.",
        "Conocimiento avanzado en robótica y electrónica.",
      ],
      email: "priscila.nieto@indoff.com",
      phone: "(664) 584 2921",
    },
  ];

  return (
    <section id="instructores" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#FF6600" }}>
          Conoce a nuestro equipo
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Profesionales certificados, con experiencia real en la industria.
        </p>

        {/* Destacado */}
        <div className="mb-10">
          <InstructorFeatured {...featured} />
        </div>

        {/* Grid resto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((p) => (
            <InstructorCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
