type InstructorCardProps = {
  photo: string;          // URL imagen 1:1
  name: string;
  role: string;
  bullets: string[];
  email?: string;
  phone?: string;
};

export default function InstructorCard({ photo, name, role, bullets, email, phone }: InstructorCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
      <img
        src={photo}
        alt={name}
        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold" style={{ color: "#FF6600" }}>{name}</h3>
      <p className="text-sm text-gray-700 mb-3">{role}</p>

      <ul className="text-sm text-gray-700 space-y-2 text-left list-disc list-inside mb-4">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      {(email || phone) && (
        <div className="text-sm text-gray-800">
          {email && <p><span className="font-semibold">Email:</span> {email}</p>}
          {phone && <p><span className="font-semibold">Tel:</span> {phone}</p>}
        </div>
      )}
    </article>
  );
}
