import CourseCard from "../../../components/CourseCard";

export default function CoursesSection() {
  // Sustituye imágenes por tus URLs (CDN/InMotion)
  const courses = [
    {
      imageUrl: "https://picsum.photos/seed/iu-c1/640/360",
      imageAlt: "Seguridad en racks",
      title:
        "Aplicación de NOM-006-STPS-2023 para Seguridad de Racks",
      description:
        "Aprende a aplicar la NOM-006-STPS-2023 para asegurar que tus racks sean seguros, cumplan con la normativa y estén libres de accidentes.",
      language: "Inglés",
    },
    {
      imageUrl: "https://picsum.photos/seed/iu-c2/640/360",
      imageAlt: "Comunicación asertiva",
      title: "Curso de Comunicación Asertiva",
      description:
        "Estrategias para liderar conversaciones, manejar conflictos y construir relaciones laborales más sólidas.",
      language: "Inglés",
    },
    {
      imageUrl: "https://picsum.photos/seed/iu-c3/640/360",
      imageAlt: "Gestión de talento",
      title:
        "Curso 3R: reclutamiento, retención y reconocimiento",
      description:
        "Gestión del talento con estrategias innovadoras que optimizan el reclutamiento, fortalecen la retención y valoran el esfuerzo.",
      language: "Español",
    },
  ];

  return (
    <section id="cursos" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold" style={{ color: "#FF6600" }}>
          Nuestros Cursos
        </h2>
        <p className="text-center text-sm md:text-base text-gray-700 mt-2">
          Impulsa tu carrera profesional con nuestros cursos virtuales diseñados para llevarte al siguiente nivel.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
