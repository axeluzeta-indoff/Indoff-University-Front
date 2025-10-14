type InstructorFeaturedProps = {
  photo: string;        // URL imagen 1:1 (se mostrará grande)
  name: string;
  title: string;        // Ej: "Rector & Fundador"
  email?: string;
  phone?: string;
  bullets: string[];
};

export default function InstructorFeatured({ photo, name, title, email, phone, bullets }: InstructorFeaturedProps) {
  return (
    <section
      className="rounded-2xl border border-gray-100 p-6 md:p-10"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
        <img
          src={photo}
          alt={name}
          className="mx-auto h-40 w-40 rounded-full object-cover"
          loading="lazy"
        />

        <div>
          <h3 className="text-2xl font-semibold" style={{ color: "#FF6600" }}>{name}</h3>
          <p className="text-sm text-gray-700 mb-2">{title}</p>

          {(email || phone) && (
            <div className="mb-4 text-sm text-gray-800 space-y-1">
              {email && <p>📧 {email}</p>}
              {phone && <p>📞 {phone}</p>}
            </div>
          )}

          <p className="font-semibold mb-2">Trayectoria:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
