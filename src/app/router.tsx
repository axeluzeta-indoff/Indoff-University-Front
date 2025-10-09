import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "../modules/home/presentation/Homepage";
import CatalogPage from "../modules/courses/presentation/CatalogPage";
import LoginPage from "../modules/auth/presentation/LoginPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "courses", element: <CatalogPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <div className="p-8">Página no encontrada</div> },
    ],
  },
]);
