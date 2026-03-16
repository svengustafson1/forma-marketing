import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Forma — The CRM That Builds Itself",
  description:
    "Tell Forma about your company. In minutes, you have a custom CRM built from scratch — entities, fields, views, and workflows designed exactly for how you work.",
  openGraph: {
    title: "Forma — The CRM That Builds Itself",
    description:
      "Tell Forma about your company. In minutes, you have a custom CRM built from scratch.",
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
