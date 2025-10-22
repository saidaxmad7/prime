import Providers from '@/contexts/ProviderContext';
import "@/assets/styles/globals.css"

export const metadata = {
  title: 'Prime Game-Club',
  description: 'Xivada joylashgan computer game club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
