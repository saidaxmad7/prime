"use client";

import HomePage from "@/app/home/page";
import { usePathname } from "next/navigation";

export default function Main() {
    const pathname = usePathname();

    return (
        <main className='main'>
            {pathname === '/' && <HomePage />}
        </main>
    );
}
