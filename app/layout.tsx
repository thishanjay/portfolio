import type { Metadata } from "next";
import { IBM_Plex_Mono as IBMPlexMono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ibmPlexMono = IBMPlexMono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // include all weights you need
});

export const metadata: Metadata = {
  title: "Thishan Jayasundara",
  description: "My portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} antialiased m-4`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
