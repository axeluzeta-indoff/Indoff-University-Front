type CourseCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  language: string;
  ctaHref?: string; // /login, /#registro, etc.
};

export default function CourseCard({
  imageUrl,
  imageAlt,
  title,
  description,
  language,
  ctaHref = "/login",
}: CourseCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6 text-center">
      <img
        src={imageUrl}
        alt={imageAlt}
        loading="lazy"
        className="mx-auto mb-4 h-36 w-full max-w-[280px] object-cover rounded"
      />
      <h3 className="text-lg font-extrabold mb-2" style={{ color: "#FF6600" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-700 leading-6 mb-4">{description}</p>
      <p className="text-sm font-semibold mb-2">Idioma del curso:</p>
      <span className="inline-block text-sm bg-gray-100 px-3 py-1 rounded mb-4">{language}</span>
      <div>
        <a
          href={ctaHref}
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition text-sm"
        >
          Registrarme
        </a>
      </div>
    </article>
  );
}
