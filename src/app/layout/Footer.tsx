export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} IndoffEdu. Todos los derechos reservados.</p>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Términos
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
