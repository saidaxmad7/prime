import "@/assets/styles/globals.css";
import Providers from "@/contexts/ProviderContext"; // shu joyda import qil

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
