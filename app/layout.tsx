import type { Metadata } from "next";
import {
  Inter,
  IBM_Plex_Mono,
  Orbitron,
  Manrope,
} from "next/font/google";
import "./globals.css";

// Variable Inter — text optical size for UI/body; use opsz 32 (Display) on large headlines
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gerald John — Mengg AI",
  description: "AI engineer, researcher & educator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-inter ${inter.variable} ${ibmPlexMono.variable} ${orbitron.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}