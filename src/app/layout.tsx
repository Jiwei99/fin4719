import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@ant-design/v5-patch-for-react-19';
import "./globals.css";
import Navbar from "./components/nav";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIN4719 Demo",
  description: "FIN4719 Demo by Group 5 for AY2024/2025 Sem 2",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
