import "@/assets/styles/globals.css";
import Loader from "@/components/Loading";
import Providers from "@/contexts/ProviderContext"; // 👈 shu import muhim
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Loader />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
