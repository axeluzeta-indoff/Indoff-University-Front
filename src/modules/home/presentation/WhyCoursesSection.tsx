import FeatureCard from "../../../components/FeatureCard";

export default function WhyCoursesSection() {
  const items = [
    {
      title: "Personalizado",
      description:
        "Adaptamos el contenido a las necesidades de los estudiantes para garantizar el mejor aprendizaje.",
    },
    {
      title: "Material Exclusivo",
      description:
        "Recursos que te ayudarán a profundizar en el contenido y mejorar tu aprendizaje.",
    },
    {
      title: "Certificación",
      description:
        "Una certificación que respalda tu conocimiento y habilidades adquiridas.",
    },
  ];

  return (
    <section className="scroll-mt-24 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold mb-6" style={{ color: "#FF6600" }}>
          ¿Por qué elegir nuestros cursos?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <FeatureCard key={it.title} title={it.title} description={it.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
