import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/config/theme-provider";
import router from "@/router/router";

import "@/style/index.css";
import "@/style/layouts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    <Toaster richColors />
  </ThemeProvider>
);
