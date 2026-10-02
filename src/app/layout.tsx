import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vulli Koushik — Software Developer | Full-Stack Developer | Product Builder",
  description: "Vulli Koushik is an AI and Software Developer, Full-Stack Developer, Web Designer, and Product Builder focused on building useful software, digital experiences, AI solutions, and automation.",
  openGraph: {
    title: "Vulli Koushik — Software Developer | Full-Stack Developer | Product Builder",
    description: "Vulli Koushik is an AI and Software Developer, Full-Stack Developer, Web Designer, and Product Builder focused on building useful software, digital experiences, AI solutions, and automation.",
    url: "https://vullikoushik.com",
    siteName: "Vulli Koushik Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-premium-black text-bone-white selection:bg-burnt-sienna selection:text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
