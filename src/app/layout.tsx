import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/client/components/layout/Header";
import Footer from "@/client/components/layout/Footer";
import "./globals.css";

// Cormorant Garamond and Inter are placeholder stand-ins for the licensed
// Canela (display) and Neue Haas Grotesk (body) typefaces, pending final font files.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caribbean Event Society | Event Professionals Network",
  description:
    "Connect with leading event professionals across Trinidad & Tobago and the Caribbean through education, networking, resources, and industry events.",
  openGraph: {
    title: "Caribbean Event Society | Elevating Caribbean Event Professionals",
    description:
      "The premier professional membership organization connecting event professionals throughout Trinidad & Tobago, the Caribbean, and its diaspora.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
