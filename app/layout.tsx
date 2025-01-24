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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innovest 2025",
  description: "Cutting-edge investment solutions for sustainable growth, helping visionaries shape the future of finance.",
  url: "https://www.innovest2025.com",
  logo: "https://www.innovest2025.com/logo.png",
  sameAs: [
    "https://www.instagram.com/innovest_gujarat/",
    "https://in.linkedin.com/company/iicws",
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.innovest2025.com'),
  title: {
    default: "Innovest 2025 – Empowering Future Investments",
    template: "%s | Innovest 2025"
  },
  description: "Innovest 2025 delivers cutting-edge investment solutions for sustainable growth, helping visionaries shape the future of finance.",
  keywords: ["investments", "sustainable finance", "financial technology", "fintech", "investment solutions"],
  authors: [{ name: "Innovest Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.innovest2025.com",
    siteName: "Innovest 2025",
    title: "Innovest 2025 – Empowering Future Investments",
    description: "Innovest 2025 delivers cutting-edge investment solutions for sustainable growth, helping visionaries shape the future of finance.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Innovest 2025"
    }]
  },
  alternates: {
    canonical: "https://www.innovest2025.com"
  },
  other: {
    'instagram-url': 'https://www.instagram.com/innovest_gujarat/',
    'linkedin-url': 'https://in.linkedin.com/company/iicws'
  }
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
