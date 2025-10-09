import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
