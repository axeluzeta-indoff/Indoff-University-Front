import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: conectar con API real (Nest/Auth)
      await new Promise(r => setTimeout(r, 600));
      alert(t("login.success"));
    } catch {
      alert(t("login.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: "#FF6600" }}>
        {t("login.title")}
      </h2>

      <form onSubmit={onSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t("login.email_label")}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-600"
            placeholder={t("login.email_placeholder") ?? ""}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            {t("login.password_label")}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-600"
            placeholder={t("login.password_placeholder") ?? ""}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black text-white py-2 hover:bg-gray-900 transition disabled:opacity-60"
        >
          {loading ? t("login.loading") : t("login.submit")}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {t("login.no_account")}{" "}
          <a href="/#registro" className="text-orange-500 hover:underline">
            {t("login.register_link")}
          </a>
        </p>
      </form>
    </div>
  );
}
