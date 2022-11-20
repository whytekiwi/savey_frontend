import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./pages/root/root";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Error from "./pages/error/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
