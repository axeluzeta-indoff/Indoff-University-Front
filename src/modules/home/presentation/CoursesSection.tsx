import { useTranslation } from "react-i18next";
import CourseCard from "../../../components/CourseCard";
import { uploads } from "../../../utils/constants";

export default function CoursesSection() {
  const { t } = useTranslation();

  // Datos estáticos mock, textos por i18n
  const courses = [
    {
      imageUrl: uploads("cursos/racks.webp"),
      imageAlt: t("cursos.items.nom006.alt"),
      title: t("cursos.items.nom006.title"),
      description: t("cursos.items.nom006.desc"),
      language: t("cursos.items.nom006.lang"),
    },
    {
      imageUrl: uploads("cursos/asertiva.webp"),
      imageAlt: t("cursos.items.comunicacion.alt"),
      title: t("cursos.items.comunicacion.title"),
      description: t("cursos.items.comunicacion.desc"),
      language: t("cursos.items.comunicacion.lang"),
    },
    {
      imageUrl: uploads("cursos/3R.webp"),
      imageAlt: t("cursos.items.tresR.alt"),
      title: t("cursos.items.tresR.title"),
      description: t("cursos.items.tresR.desc"),
      language: t("cursos.items.tresR.lang"),
    },
  ];

  return (
    <section id="cursos" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold" style={{ color: "#FF6600" }}>
          {t("cursos.title")}
        </h2>
        <p className="text-center text-sm md:text-base text-gray-700 mt-2">
          {t("cursos.subtitle")}
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
