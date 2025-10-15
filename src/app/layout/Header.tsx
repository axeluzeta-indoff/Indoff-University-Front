import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const isES = i18n.resolvedLanguage?.startsWith("es");

  const setLang = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  // asegura <html lang="..."> al cargar
  useEffect(() => {
    document.documentElement.lang = isES ? "es" : "en";
  }, [isES]);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md font-sans">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-indoff-edu.png" alt="Indoff University" className="h-[60px] w-auto" />
          <span className="sr-only">IndoffEdu</span>
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="lg:hidden border border-gray-500 rounded p-2"
          onClick={() => setOpen(v => !v)}
          aria-label={t("nav.open_menu")}
          aria-expanded={open}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" />
            )}
          </svg>
        </button>

        {/* Menú desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a href="/#inicio" className="hover:text-orange-500 transition-colors text-orange-500 font-semibold">
            {t("nav.home")}
          </a>
          <a href="/#nosotros" className="hover:text-orange-500 transition-colors">
            {t("nav.about")}
          </a>
          <a href="/#cursos" className="hover:text-orange-500 transition-colors">
            {t("nav.courses")}
          </a>
          <a href="/#instructores" className="hover:text-orange-500 transition-colors">
            {t("nav.instructors")}
          </a>
          <a href="/#registro" className="hover:text-orange-500 transition-colors">
            {t("nav.register")}
          </a>
          <a href="/#contacto" className="hover:text-orange-500 transition-colors">
            {t("nav.contact")}
          </a>

          {/* Idioma */}
          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={() => setLang("es")}
              className={`text-xs font-semibold px-2 py-1 rounded transition ${
                isES ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white border border-white/30"
              }`}
              aria-pressed={isES}
            >
              ES
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-semibold px-2 py-1 rounded transition ${
                !isES ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white border border-white/30"
              }`}
              aria-pressed={!isES}
            >
              EN
            </button>
          </div>

          {/* Acceder */}
          <Link
            to="/login"
            className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            {t("nav.login")}
          </Link>
        </nav>
      </div>

      {/* Menú móvil (animado) */}
      <div
        className={[
          "lg:hidden bg-black border-t border-gray-800 overflow-hidden",
          "transition-[max-height,opacity,transform] duration-300 ease-out",
          open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"
        ].join(" ")}
        aria-hidden={!open}
      >
        <nav className="mx-auto max-w-7xl px-6 py-3 flex flex-col gap-3 text-sm">
          {[
            [t("nav.home"), "#inicio"],
            [t("nav.about"), "#nosotros"],
            [t("nav.courses"), "#cursos"],
            [t("nav.instructors"), "#instructores"],
            [t("nav.register"), "#registro"],
            [t("nav.contact"), "#contacto"],
          ].map(([label, hash]) => (
            <a
              key={hash as string}
              href={`/${hash}`}
              onClick={() => setOpen(false)}
              className="block hover:text-orange-500 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLang("es")}
              className={`text-xs font-semibold px-2 py-1 rounded transition ${
                isES ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white border border-white/30"
              }`}
              aria-pressed={isES}
            >
              ES
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-semibold px-2 py-1 rounded transition ${
                !isES ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white border border-white/30"
              }`}
              aria-pressed={!isES}
            >
              EN
            </button>
          </div>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-2 block bg-orange-500 text-white px-4 py-2 rounded-md text-center hover:bg-orange-600 transition"
          >
            {t("nav.login")}
          </Link>
        </nav>
      </div>
    </header>
  );
}

