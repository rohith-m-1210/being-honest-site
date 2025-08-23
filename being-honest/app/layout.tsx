import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abcNormalBold = localFont({
  src: [
    { path: "../public/assets/fonts/ABCNormal-Bold.woff2.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-abc-normal-bold",
  display: "swap",
});

const abcNormal = localFont({
  src: [
    { path: "../public/assets/fonts/ABCNormal-Thin.woff2.ttf", weight: "100", style: "normal" },
    { path: "../public/assets/fonts/ABCNormal-Light.woff2.ttf", weight: "300", style: "normal" },
    { path: "../public/assets/fonts/ABCNormal-Regular.woff2.ttf", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/ABCNormal-Medium.woff2.ttf", weight: "500", style: "normal" },
    { path: "../public/assets/fonts/ABC Normal Semibold.woff2.ttf", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/ABCNormal-Bold.woff2.ttf", weight: "700", style: "normal" },
    { path: "../public/assets/fonts/ABCNormal-Heavy.woff2.ttf", weight: "800", style: "normal" },
    { path: "../public/assets/fonts/ABCNormal-Black.woff2.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-abc-normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "being honest — from farm to you",
  description:
    "being honest brings you pomegranates sourced fresh from the finest farms in India. No artificial ripening. No added colour or sweetness. No shine or wax.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${abcNormal.variable} ${abcNormalBold.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
