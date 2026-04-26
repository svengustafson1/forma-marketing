import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Forma — Business software that builds itself around you",
  description:
    "Forma creates one shared company brain and a custom interface for every person — adaptive business software guided by Forma Architect.",
  openGraph: {
    title: "Forma — Business software that builds itself around you",
    description:
      "One shared company brain. A custom interface for every person.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
