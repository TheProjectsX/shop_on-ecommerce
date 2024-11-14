"use client";

import Footer from "@/components/Footer";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Drawer from "@/components/Drawer";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
    const [drawerOpened, setDrawerIsOpened] = useState(false);

    return (
        <html lang="en">
            <body className={`font-poppins`}>
                <NextTopLoader />
                <Drawer
                    drawerOpened={drawerOpened}
                    setDrawerOpened={setDrawerIsOpened}
                />
                <Navbar setDrawerOpened={setDrawerIsOpened} />
                <main className="mb-6 max-width">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
