"use client";

import { useEffect, useState, ReactNode } from "react";
import Loader from "@/components/Loading";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
}
