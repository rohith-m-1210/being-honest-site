"use client";

import { useMemo, useRef, useState } from "react";

export default function OurPurpose() {
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
            <h1>Our Purpose</h1>
          </header>

          <section className="post-content">
            <p>
              To communicate the story of India and its people to the world — through fruits that carry the essence of our land, our farmers, and our traditions.
            </p>

            <h2>Our Belief</h2>
            <p>
              We believe in choosing the harder right over the easier wrong.
            </p>

            <h2>Our Commitment</h2>
            <p>
              Our commitment is to be <em>sat</em> (truth) with our clients and community — <em>sang</em> (together) in everything that we do. Because food should never deceive. It should connect, nourish, and celebrate life as it truly is.
            </p>
            <p>
              At every step, we remind ourselves: integrity is our harvest, honesty is our offering, and truth is our way of life.
            </p>

            <p>
              We believe the truth will always taste better.
            </p>
          </section>
        </article>
      </main>

      
    </>
  );
}
