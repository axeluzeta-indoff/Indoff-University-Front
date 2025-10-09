import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-blue-600">
          Indoff<span className="text-gray-800">Edu</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link to="/courses" className="hover:text-blue-600 transition-colors">
            Cursos
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            Nosotros
          </Link>
          <Link
            to="/login"
            className="rounded-lg border border-blue-600 text-blue-600 px-3 py-1 hover:bg-blue-600 hover:text-white transition-colors"
          >
            Iniciar sesión
          </Link>
        </nav>
      </div>
    </header>
  );
}
