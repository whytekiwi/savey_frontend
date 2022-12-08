import * as React from "react";
import { createRoot } from "react-dom/client";
import Root from "./pages/root/root";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Error from "./pages/error/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Privacy from "./pages/privacy/privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
