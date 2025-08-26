"use client";

import { useMemo, useRef, useState } from "react";

export default function FromSoilToSoul() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };
  const onNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value?.trim() ?? "";
    if (!/.+@.+\..+/.test(email)) return triggerToast("Please enter a valid email");
    if (emailRef.current) emailRef.current.value = "";
    triggerToast("Subscribed — thank you!");
  };

  return (
    <>
      

      <main className="post">
        <article className="post-article">
          <header className="post-header">
            <h1>From Soil to Soul</h1>
          </header>

          <section className="post-content">
            <h2>A Story Rooted in the Land</h2>
            <p>
              Every fruit has a journey. It begins in the soil — red, rich, and alive. It passes through the hands of
              farmers who rise with the sun, whispering old stories to their orchards. It ripens slowly and is guided by
              seasons. When you hold this fruit, you’re holding more than produce — you’re holding a piece of a village,
              a memory of monsoon rains, a promise of patience.
            </p>

            <h2>The Taste of Time</h2>
            <p>
              The first bite of any fruit is never just about taste. It’s the memory of childhood summers, when you
              climbed trees to eat mangoes. It’s the festivals where bananas, coconuts, and sweets fill the air with joy.
              It’s the winter mornings when oranges bring warmth to the cold. Food doesn’t just fill us. It connects us —
              to places, to people, to moments we thought we had forgotten.
            </p>

            <h2>More Than Food, A Way of Living</h2>
            <p>
              This is not just about what we eat — it’s about how we live. When we trust nature and embrace food as it is,
              it naturally leads to healthier living — the way we are meant to live. The best things in life — like
              fruits, relationships, and memories — flourish when they are cared for patiently, when they’re rooted deep,
              when they’re shared with love. That’s when they truly nourish us and make life whole.
            </p>

            <p>
              From farm to you — this is the story we want you to experience.
            </p>
          </section>
        </article>
      </main>

      
    </>
  );
}
