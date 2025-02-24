import type { Metadata } from "next";
import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUCEI Match",
  description: "CUCEI Match description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kantumruy.variable} antialiased`}>{children}</body>
    </html>
  );
}
