import { useLocation, RouterProvider, Switch } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/config/theme-provider";
import router from "@/router/router";

import Nav from "@/components/Header/Nav";

import "@/style/index.css";
import "@/style/layouts.css";

export function AppRoutes() {
  const location = useLocation();
  const showNav = ["/", "/notifications", "/profile"];
  const shouldShowNav = showNav.includes(location.pathname);

  return (
    <Switch>
      {shouldShowNav && <Nav />}
      <RouterProvider router={router} />
      <Toaster richColors />
    </Switch>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AppRoutes />
  </ThemeProvider>
);
