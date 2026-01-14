import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka, Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Mank's Wrapped",
  description: "A special birthday wrapped just for you",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${nunito.variable} ${quicksand.variable}`}
        style={{ fontFamily: 'var(--font-nunito), Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
