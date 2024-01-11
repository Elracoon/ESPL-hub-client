import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner';

import { ThemeProvider } from "@/config/theme-provider";

import Dashboard from "@/pages/Dashboard";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";
import AdminLog from "@/pages/AdminLog";

import "@/style/index.css";
import "@/style/layouts.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/auth/login" element={<Login />}></Route>
                <Route path="/auth/admin/login" element={<AdminLog />}></Route>
                <Route path="/auth/register" element={<Register />}></Route>
                <Route path="/notifcations" element={<Notifications />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
            <Toaster richColors />
        </BrowserRouter>
    </ThemeProvider>
);
