import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Soil to Soul — being honest",
  description:
    "A story rooted in the land: patience, seasons, and the taste of time — from farm to you.",
};

export default function FromSoilToSoulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

