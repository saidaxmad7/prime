import "@/assets/styles/globals.css";
import Loader from "@/components/Loading";
import Providers from "@/contexts/ProviderContext"; // 👈 shu import muhim
import { ReactNode } from "react";

export const metadata = {
  title: "Prime game club",
  description: "Prime Game Club — zamonaviy o‘yin muhiti! Eng so‘nggi kompyuterlar, yuqori tezlikdagi internet va do‘stona atmosfera bilan haqiqiy gaming tajribasini his eting.",
  icons: {
    icon: "/images/site-logo.jpg",
  },
};


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
