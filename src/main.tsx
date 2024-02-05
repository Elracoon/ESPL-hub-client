import React from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/config/theme-provider";

import Dashboard from "@/pages/Dashboard";
import Auth from "@/pages/Auth";
import AuthAdmin from "@/pages/AuthAdmin";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";
import Project from "@/pages/Project";

import Nav from "@/components/Header/Nav";

import "@/style/index.css";
import "@/style/layouts.css";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const AppRoutes = () => {
  const location = useLocation();

  const showNav = ["/", "/notifications", "/profile"];
  const shouldShowNav = showNav.includes(location.pathname);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {shouldShowNav && <Nav />}
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/auth/admin" element={<AuthAdmin />}></Route>
        <Route path="/notifcations" element={<Notifications />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
      </Routes>
      <Toaster richColors />
    </ThemeProvider>
  );
};

root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
