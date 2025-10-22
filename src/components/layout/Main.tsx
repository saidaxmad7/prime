"use client";

import About from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import { usePathname } from "next/navigation";

export default function Main() {
    const pathname = usePathname();

    return (
        <main className='main'>
            {pathname === '/' && <HomePage />}
            {pathname === '/about' && <About />}
        </main>
    );
}
