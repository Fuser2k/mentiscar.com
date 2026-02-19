import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentis Care - Betrokken begeleiding",
  description: "Mentis Care biedt begeleiding aan (jong)volwassenen met een langdurige zorgvraag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} antialiased font-sans text-navy`}>
        <Header />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
        <CookieBanner />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
