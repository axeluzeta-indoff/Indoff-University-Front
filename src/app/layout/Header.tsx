import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          aria-label="Abrir menú"
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
          <a href="/#inicio" className="hover:text-orange-500 transition-colors text-orange-500 font-semibold">Inicio</a>
          <a href="/#nosotros" className="hover:text-orange-500 transition-colors">Nosotros</a>
          <a href="/#cursos" className="hover:text-orange-500 transition-colors">Cursos</a>
          <a href="/#instructores" className="hover:text-orange-500 transition-colors">Instructores</a>
          <a href="/#registro" className="hover:text-orange-500 transition-colors">Registro</a>
          <a href="/#contacto" className="hover:text-orange-500 transition-colors">Contacto</a>

          {/* Idioma */}
          <div className="flex items-center gap-2 ml-2">
            <button className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">ES</button>
            <span className="text-gray-400">/</span>
            <button className="text-gray-500 text-xs font-semibold hover:text-white transition">EN</button>
          </div>

          {/* Acceder */}
          <Link
            to="/login"
            className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Acceder
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
            ["Inicio", "#inicio"],
            ["Nosotros", "#nosotros"],
            ["Cursos", "#cursos"],
            ["Instructores", "#instructores"],
            ["Registro", "#registro"],
            ["Contacto", "#contacto"],
          ].map(([label, hash]) => (
            <a
              key={hash}
              href={`/${hash}`}
              onClick={() => setOpen(false)}
              className="block hover:text-orange-500 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <button className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">ES</button>
            <span className="text-gray-400">/</span>
            <button className="text-gray-500 text-xs font-semibold hover:text-white transition">EN</button>
          </div>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-2 block bg-orange-500 text-white px-4 py-2 rounded-md text-center hover:bg-orange-600 transition"
          >
            Acceder
          </Link>
        </nav>
      </div>
    </header>
  );
}
