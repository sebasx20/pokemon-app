import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Gallery from "./components/gallery.jsx";

// Router
// const router = createBrowserRouter([
//   { path: "pokemon-app/", element: <App /> },
//   { path: "pokemon-app/gallery", element: <Gallery /> },
// ]);

const router = createHashRouter([
  { path: "/", element: <App /> }, // Tu ruta principal
  { path: "/gallery", element: <Gallery /> }, // Tu galería
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
