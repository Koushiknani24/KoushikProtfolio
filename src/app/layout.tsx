import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vulli Koushik — AI + Software Developer | Full-Stack Developer | Product Builder",
  description:
    "Vulli Koushik is an AI and Software Developer, Full-Stack Developer, Web Designer, and Product Builder focused on building useful software, digital experiences, AI solutions, and automation.",
  keywords: [
    "Vulli Koushik",
    "AI Developer",
    "Software Developer",
    "Full-Stack Developer",
    "Web Designer",
    "Product Builder",
    "NLP",
    "Machine Learning",
    "Visakhapatnam",
  ],
  authors: [{ name: "Vulli Koushik" }],
  openGraph: {
    title: "Vulli Koushik — AI + Software Developer | Full-Stack Developer | Product Builder",
    description:
      "Vulli Koushik is an AI and Software Developer, Full-Stack Developer, Web Designer, and Product Builder.",
    url: "https://vullikoushik.com",
    siteName: "Vulli Koushik Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vulli Koushik — AI + Software Developer",
    description: "Building useful software, digital experiences, and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`dark scroll-smooth ${inter.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
        className="antialiased bg-premium-black text-bone-white selection:bg-burnt-sienna selection:text-white"
      >
        <LoadingScreen />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
