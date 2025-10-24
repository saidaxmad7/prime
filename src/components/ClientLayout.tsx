"use client";

import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import Loader from "@/components/Loading";

export default function ClientLayout({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", () => setLoading(false));
    }, []);

    if (loading) return <Loader />;

    return <>{children}</>;
}
