// Base pública para servir archivos desde el symlink /uploads
export const UPLOADS_BASE_URL =
  import.meta.env.VITE_UPLOADS_BASE_URL || "https://www.indoffedu.com/uploads";

// Helper para construir URLs seguras con o sin slash inicial
export const uploads = (path: string) =>
  `${UPLOADS_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
