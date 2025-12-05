import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppChat from "./components/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delight engineering consultancy ltd | Product Design & Engineering | Kigali, Rwanda",
  description: "Delight engineering consultancy ltd - From Idea to Market. Expert product design, engineering, prototyping, and manufacturing services in Rwanda. We transform innovations into manufacturable products.",
  keywords: [
    "product design Rwanda",
    "engineering consultancy Kigali",
    "prototyping services Rwanda",
    "CAD design Rwanda",
    "manufacturing support Africa",
    "SolidWorks design",
    "mechanical engineering Rwanda",
    "product development Kigali",
    "design for manufacturing",
    "innovation consultancy Rwanda",
  ],
  authors: [{ name: "Delight engineering consultancy ltd" }],
  creator: "Delight engineering consultancy ltd",
  publisher: "Delight engineering consultancy ltd",
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://delightconsultancy.rw",
    siteName: "Delight engineering consultancy ltd",
    title: "Delight engineering consultancy ltd | Product Design & Engineering",
    description: "Transform your ideas into market-ready products with expert engineering and design services in Rwanda.",
    images: [
      {
        url: "/image/drilling machine.jpg",
        width: 1200,
        height: 630,
        alt: "Delight engineering consultancy ltd - Product Design & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delight engineering consultancy ltd | Product Design & Engineering",
    description: "From Idea to Market - Expert product design, prototyping, and manufacturing services in Rwanda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
