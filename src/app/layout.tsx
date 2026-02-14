import type { Metadata } from "next";
import { Amiri, Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/website/navbar";
import Footer from "@/components/website/footer";
import Header from "@/components/website/header";
import ScrollToTop from "@/components/website/scroll-top";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const InterMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${InterMono.variable} antialiased`}
      >
        <div id="topbar">{/* nothings */}</div>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
