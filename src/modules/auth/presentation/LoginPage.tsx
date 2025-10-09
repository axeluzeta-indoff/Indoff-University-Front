export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
      <form className="space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Email" />
        <input className="w-full border rounded px-3 py-2" placeholder="Contraseña" type="password" />
        <button className="w-full rounded bg-black text-white py-2">Entrar</button>
      </form>
    </div>
  );
}
