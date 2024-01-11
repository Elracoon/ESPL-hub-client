import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner';

import { ThemeProvider } from "@/config/theme-provider";

import Home from "@/pages/Home";

import "@/style/index.css";
import "@/style/layouts.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement,).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Toaster richColors />
        </BrowserRouter>
    </ThemeProvider>
);
