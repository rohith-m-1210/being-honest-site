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
    { path: "../public/assets/fonts/Nohemi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-abc-normal-bold",
  display: "swap",
});

const abcNormal = localFont({
  src: [
    { path: "../public/assets/fonts/Nohemi-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/assets/fonts/Nohemi-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-abc-normal",
  display: "swap",
});

// No separate hero font needed; all weights map to Nohemi above

export const metadata: Metadata = {
  title: "being honest — from farm to you",
  description:
    "being honest brings you pomegranates sourced fresh from the finest farms in India. No artificial ripening. No added colour or sweetness. No shine or wax.",
  icons: {
    icon: "/assets/Asset 2.png",
    shortcut: "/assets/Asset 2.png",
    apple: "/assets/Asset 2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${abcNormal.variable} ${abcNormalBold.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
