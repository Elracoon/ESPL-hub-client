import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner';

import { ThemeProvider } from "@/config/theme-provider";

import Dashboard from "@/pages/Dashboard";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

import "@/style/index.css";
import "@/style/layouts.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement,).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/auth/login" element={<Login />}></Route>
                <Route path="/auth/register" element={<Register />}></Route>
            </Routes>
            <Toaster richColors />
        </BrowserRouter>
    </ThemeProvider>
);
