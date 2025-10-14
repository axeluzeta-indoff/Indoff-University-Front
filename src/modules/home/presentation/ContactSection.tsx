import { useState } from "react";

type Form = { name: string; email: string; subject: string; message: string; hp: string };

export default function ContactSection() {
  const [form, setForm] = useState<Form>({ name: "", email: "", subject: "", message: "", hp: "" });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      return "Todos los campos son obligatorios.";
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) return "Correo inválido.";
    if (form.hp) return "Spam detectado.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null); setErr(null);

    const v = validate();
    if (v) { setErr(v); return; }

    setSending(true);
    try {
      // TODO: conecta aquí tu endpoint real (Nest/Cloud/Serverless/Brevo webhook)
      await new Promise(r => setTimeout(r, 700)); // simulación
      setOk("Mensaje enviado. Te contactaremos pronto.");
      setForm({ name: "", email: "", subject: "", message: "", hp: "" });
    } catch {
      setErr("No se pudo enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#FF6600" }}>
          Envíanos un mensaje
        </h2>

        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-gray-200 bg-gray-100 p-6 md:p-8"
          noValidate
        >
          {/* fila: nombre / email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-gray-600"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo electrónico</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-gray-600"
                placeholder="alguien@dominio.com"
                required
              />
            </div>
          </div>

          {/* asunto */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Asunto</label>
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-gray-600"
              placeholder="Asunto"
              required
            />
          </div>

          {/* mensaje */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              className="w-full min-h-[140px] rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-gray-600"
              placeholder="Cuéntanos en qué podemos ayudarte…"
              required
            />
          </div>

          {/* honeypot anti-spam */}
          <input
            name="hp"
            value={form.hp}
            onChange={onChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* feedback */}
          {err && <p className="mt-4 text-sm text-red-600">{err}</p>}
          {ok && <p className="mt-4 text-sm text-green-700">{ok}</p>}

          <div className="mt-6">
            <button
              type="submit"
              disabled={sending}
              className="mx-auto block rounded-md bg-black px-6 py-2 text-white hover:bg-gray-900 disabled:opacity-60"
            >
              {sending ? "Enviando…" : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
