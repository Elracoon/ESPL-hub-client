import { createBrowserRouter } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import Auth from "@/pages/Auth";
import AuthAdmin from "@/pages/AuthAdmin";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";
import Project from "@/pages/Project";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/admin",
    element: <AuthAdmin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/project/:id",
    element: <Project />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
