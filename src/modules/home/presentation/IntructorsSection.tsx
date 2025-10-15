import InstructorFeatured from "../../../components/InstructorFeatured";
import InstructorCard from "../../../components/IntructorCard";
import { useTranslation } from "react-i18next";

type InstructorBase = {
  id: string;
  photo: string;
  name: string;
  email: string;
  phone: string;
};

export default function InstructorsSection() {
  const { t } = useTranslation();

  // Destacado (solo traducimos role y bullets)
  const featured: InstructorBase & { role: string; bullets: string[] } = {
    id: "steve",
    photo: "/images/steve_bloom.jpg",
    name: "Ing. Steve D. Bloom",
    email: "steve.bloom@indoff.com",
    phone: "(664) 412 2989",
    role: t("instructores.featured.role"),
    bullets: t("instructores.featured.bullets", { returnObjects: true }) as string[],
  };

  // Resto: role y bullets vía i18n por id
  const others: Array<InstructorBase & { role: string; bullets: string[] }> = [
    {
      id: "victoria",
      photo: "/images/victoria_bloom.jpg",
      name: "Ing. Victoria Bloom",
      email: "victoria.bloom@indoff.com",
      phone: "(663) 109 8054",
      role: t("instructores.others.victoria.role"),
      bullets: t("instructores.others.victoria.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "carlos",
      photo: "/images/carlos_calles.jpg",
      name: "Ing. Carlos Calles",
      email: "carlos.calles@indoff.com",
      phone: "(664) 279 5407",
      role: t("instructores.others.carlos.role"),
      bullets: t("instructores.others.carlos.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "ulises",
      photo: "/images/ulises_castillo.jpg",
      name: "Ing. Ulises Castillo",
      email: "ulises.castillo@indoff.com",
      phone: "(618) 731 3095",
      role: t("instructores.others.ulises.role"),
      bullets: t("instructores.others.ulises.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "kassandra",
      photo: "/images/kassandra_escobar.jpg",
      name: "Lic. Kassandra Escobar",
      email: "kassandra.escobar@indoff.com",
      phone: "(664) 598 9920",
      role: t("instructores.others.kassandra.role"),
      bullets: t("instructores.others.kassandra.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "ana",
      photo: "/images/ana_gallegos.jpg",
      name: "Lic. Ana Gallegos",
      email: "ana.gallegos@indoff.com",
      phone: "(664) 123 39 90",
      role: t("instructores.others.ana.role"),
      bullets: t("instructores.others.ana.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "aldo",
      photo: "/images/aldo_romero.jpg",
      name: "Lic. Aldo Romero",
      email: "aldo.romero@indoff.com",
      phone: "(664) 386 9506",
      role: t("instructores.others.aldo.role"),
      bullets: t("instructores.others.aldo.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "jonathan",
      photo: "/images/jonathan_hernandez.jpg",
      name: "Ing. Jonathan Hernandez",
      email: "jonathan.hernandez@indoff.com",
      phone: "(664) 812 4200",
      role: t("instructores.others.jonathan.role"),
      bullets: t("instructores.others.jonathan.bullets", { returnObjects: true }) as string[],
    },
    {
      id: "priscila",
      photo: "/images/priscila_nieto.jpg",
      name: "Ing. Priscila Nieto",
      email: "priscila.nieto@indoff.com",
      phone: "(664) 584 2921",
      role: t("instructores.others.priscila.role"),
      bullets: t("instructores.others.priscila.bullets", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="instructores" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#FF6600" }}>
          {t("instructores.title")}
        </h2>
        <p className="text-center text-gray-700 mb-8">
          {t("instructores.subtitle")}
        </p>

        {/* Destacado */}
        <div className="mb-10">
          <InstructorFeatured
            photo={featured.photo}
            name={featured.name}
            title={featured.role}
            email={featured.email}
            phone={featured.phone}
            bullets={featured.bullets}
          />
        </div>

        {/* Grid resto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((p) => (
            <InstructorCard
              key={p.id}
              photo={p.photo}
              name={p.name}
              role={p.role}
              bullets={p.bullets}
              email={p.email}
              phone={p.phone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
