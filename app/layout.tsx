import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Delight Consultancy Ltd | Product Design & Engineering | Kigali, Rwanda",
  description: "Delight Consultancy Ltd - From Idea to Market. Expert product design, engineering, prototyping, and manufacturing services in Rwanda. We transform innovations into manufacturable products.",
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
  authors: [{ name: "Delight Consultancy Ltd" }],
  creator: "Delight Consultancy Ltd",
  publisher: "Delight Consultancy Ltd",
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://delightconsultancy.rw",
    siteName: "Delight Consultancy Ltd",
    title: "Delight Consultancy Ltd | Product Design & Engineering",
    description: "Transform your ideas into market-ready products with expert engineering and design services in Rwanda.",
    images: [
      {
        url: "/image/drilling machine.jpg",
        width: 1200,
        height: 630,
        alt: "Delight Consultancy - Product Design & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delight Consultancy Ltd | Product Design & Engineering",
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
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
