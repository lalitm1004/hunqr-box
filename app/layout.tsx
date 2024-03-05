import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const hk_grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HunQRBox",
  description: "Bhaiya code dal dijiye",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{color: "#3A1593"}],
  authors: [{
    name: "Lalit Ms"
  }],
  icons: [
    {rel: "icon", url: "public/android-512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hk_grotesk.className}>
        {children}
      </body>
    </html>
  );
}
