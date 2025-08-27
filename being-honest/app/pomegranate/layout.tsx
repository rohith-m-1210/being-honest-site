import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomegranate — being honest",
  description:
    "Naturally ripened Bhagwa pomegranates with deep colour and balanced sweetness. No artificial ripening. No added colour or sweetness. No shine or wax.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

