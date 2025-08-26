"use client";

import { useMemo, useRef, useState } from "react";

export default function Blogs() {
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
      

      <main className="blog">
        <section className="blog-hero">
          <h1>Notes from the orchard</h1>
          <p className="muted">Slow fruit, honest methods, and practical tips for your table.</p>
        </section>

        <section className="post-list">
          <article className="post-card">
            <a className="post-link" href="/blogs/fruit-adulteration">
              <div className="post-media" style={{ "--img": "url('https://placehold.co/1200x700/png?text=Fruit+Adulteration')" } as React.CSSProperties}></div>
              <div className="post-copy">
                <h2>Fruit Adulteration: How to spot it and stay safe</h2>
                <p className="muted">From artificial ripening to wax and dyes — what to look for, the risks, and how being honest avoids it entirely.</p>
                <p className="tiny muted">5–6 min read</p>
              </div>
            </a>
          </article>

          <article className="post-card">
            <a className="post-link" href="/blogs/why-slow-matters">
              <div className="post-media" style={{ "--img": "url('https://placehold.co/1200x700/png?text=Why+Slow+Matters')" } as React.CSSProperties}></div>
              <div className="post-copy">
                <h2>Why Slow Fruit Matters: From the farm to you</h2>
                <p className="muted">Harvest timing, natural ripening, short holds, and gentle handling — the pillars behind better taste and better health.</p>
                <p className="tiny muted">4–5 min read</p>
              </div>
            </a>
          </article>
        </section>
      </main>

      
    </>
  );
}
