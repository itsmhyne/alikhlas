import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/website/footer";
import Header from "@/components/website/header";
import ScrollToTop from "@/components/website/scroll-top";

const inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter",
  display: "swap",
});

export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Masjid Al-Ihklas",
  description: "Develop by M. Hamdan Yusuf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">
        <div id="topbar">{/* nothings */}</div>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
