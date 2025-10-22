"use client";

import HomePage from "@/pages/HomePage";
import { usePathname } from "next/navigation";

export default function Main() {
    const pathname = usePathname();

    return (
        <main className='main'>
            {pathname === '/' && <HomePage />}
        </main>
    );
}
