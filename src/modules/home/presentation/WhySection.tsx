import { useTranslation } from "react-i18next";
import FeatureCard from "../../../components/FeatureCard";

export default function WhySection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("why.expert_instructors.title"),
      description: t("why.expert_instructors.description"),
    },
    {
      title: t("why.innovative_classes.title"),
      description: t("why.innovative_classes.description"),
    },
    {
      title: t("why.certification.title"),
      description: t("why.certification.description"),
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-2">
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold mb-8"
          style={{ color: "#FF6600" }}
        >
          {t("why.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
