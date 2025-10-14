export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Separador/acento */}
      <div className="h-1 w-full" style={{ backgroundColor: "#FF6600" }} />

      {/* Contenido principal */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand / breve descripción */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-indoff-edu.png" alt="Indoff University" className="h-10 w-auto" />
            <span className="sr-only">IndoffEdu</span>
          </div>
          <p className="mt-4 text-sm text-gray-300 max-w-sm">
            Capacitación profesional y desarrollo continuo para equipos de alto desempeño.
          </p>
        </div>

        {/* Contacto (lo que ya tenían) */}
        <div>
          <h3 className="text-xl font-semibold" style={{ color: "#FF6600" }}>
            Contáctanos
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="font-semibold">Ubicación:</span> Tijuana, BAJA CALIFORNIA
            </li>
            <li>
              <span className="font-semibold">Teléfono:</span> (664) 412 2989
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:indoffedu@indoff.com" className="hover:underline">
                indoffedu@indoff.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Horario de Atención:</span> Lunes a Viernes, 8:00 AM - 6:00 PM
            </li>
          </ul>

          {/* Redes */}
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-8 w-8 rounded bg-white/10 hover:bg-white/20 transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3h14ZM8.34 18v-7.56H5.75V18h2.59Zm-.94-8.64a1.5 1.5 0 1 0-1.5-1.5a1.5 1.5 0 0 0 1.5 1.5ZM18.25 18v-4.08c0-2.18-1.17-3.2-2.74-3.2a2.37 2.37 0 0 0-2.14 1.18h-.05v-1H10.9V18h2.52v-3.74c0-1 .18-2 1.45-2c1.25 0 1.27 1.17 1.27 2.06V18Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-8 w-8 rounded bg-white/10 hover:bg-white/20 transition"
              aria-label="YouTube"
              title="YouTube"
            >
              {/* YouTube */}
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.4.6a3 3 0 0 0-2.1 2.1A31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8a3 3 0 0 0 2.1 2.1c1.6.6 9.4.6 9.4.6s7.8 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.75 15.5v-7L15.5 12l-5.75 3.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold" style={{ color: "#FF6600" }}>
            Enlaces
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/#inicio" className="hover:text-orange-500 transition">Inicio</a></li>
            <li><a href="/#nosotros" className="hover:text-orange-500 transition">Nosotros</a></li>
            <li><a href="/#cursos" className="hover:text-orange-500 transition">Cursos</a></li>
            <li><a href="/#instructores" className="hover:text-orange-500 transition">Instructores</a></li>
            <li><a href="/#registro" className="hover:text-orange-500 transition">Registro</a></li>
            <li><a href="/#contacto" className="hover:text-orange-500 transition">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} IndoffEdu. Todos los derechos reservados.</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-orange-500 transition">Términos</a>
            <a href="#" className="hover:text-orange-500 transition">Privacidad</a>
            <a href="#" className="hover:text-orange-500 transition">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
