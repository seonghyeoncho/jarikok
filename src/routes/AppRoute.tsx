import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import NotFoundPage from "../pages/error/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />
  }
]);

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}