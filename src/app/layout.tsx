import "@/assets/styles/globals.css";
import ClientLayout from "@/components/ClientLayout";
import Providers from "@/contexts/ProviderContext";
import { ReactNode } from "react";

export const metadata = {
  title: "Prime Game Club",
  description:
    "Prime Game Club — zamonaviy o‘yin muhiti! Eng so‘nggi kompyuterlar, yuqori tezlikdagi internet va do‘stona atmosfera bilan haqiqiy gaming tajribasini his eting.",
  icons: {
    icon: "/images/site-logo.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
