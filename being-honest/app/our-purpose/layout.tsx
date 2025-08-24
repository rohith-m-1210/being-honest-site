import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Purpose — being honest",
  description:
    "Telling the story of India through fruit — grounded in truth, togetherness, and integrity.",
};

export default function OurPurposeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

