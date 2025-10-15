import { useTranslation } from "react-i18next";
import FeatureCard from "../../../components/FeatureCard";

export default function WhyCoursesSection() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("why_courses.items.personalizado.title"),
      description: t("why_courses.items.personalizado.desc"),
    },
    {
      title: t("why_courses.items.material.title"),
      description: t("why_courses.items.material.desc"),
    },
    {
      title: t("why_courses.items.certificacion.title"),
      description: t("why_courses.items.certificacion.desc"),
    },
  ];

  return (
    <section className="scroll-mt-24 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h3
          className="text-center text-2xl md:text-3xl font-extrabold mb-6"
          style={{ color: "#FF6600" }}
        >
          {t("why_courses.title")}
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
