import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JMV Developers",
  description:
    "Established in 2008, a renowned brand for all your Real Estate needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative bg-white">
        {/* Main Content Wrapper:
          1. 'relative z-10' keeps it above the fixed footer.
          2. 'bg-white' (or your site color) hides the footer until you scroll down.
          3. 'mb-[100vh]' creates the opening at the end to show the footer.
          4. 'shadow-2xl' adds a nice depth effect at the reveal edge.
        */}
        <div className="relative z-10 bg-white mb-[100vh] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </div>

        {/* The Footer:
          This stays fixed at the bottom behind the content.
        */}
        <Footer />
      </body>
    </html>
  );
}
