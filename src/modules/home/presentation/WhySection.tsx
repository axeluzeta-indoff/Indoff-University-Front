import FeatureCard from "../../../components/FeatureCard";

export default function WhySection() {
  const features = [
    { title: "Instructores Expertos", description: "Contamos con un equipo de profesionales altamente capacitados." },
    { title: "Clases Innovadoras", description: "Programas diseñados para el éxito." },
    { title: "Certificación", description: "Al finalizar obtendrás un certificado DC-3 con validez académica y profesional." },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-2">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8" style={{ color: "#FF6600" }}>
          ¿Por qué elegir Indoff University?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
