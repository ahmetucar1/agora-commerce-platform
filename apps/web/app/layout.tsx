import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agora Sarkuteri - Premium Ürünler",
  description: "Agora Sarkuteri, türkiye'nin en iyi kalitede şarküteri ürünlerini sunar.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
