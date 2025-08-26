"use client";

import { useMemo, useRef, useState } from "react";

export default function WhySlowMatters() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const year = useMemo(() => new Date().getFullYear(), []);

  const triggerToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 2200); };
  const onNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value?.trim() ?? "";
    if (!/.+@.+\..+/.test(email)) return triggerToast("Please enter a valid email");
    if (emailRef.current) emailRef.current.value = "";
    triggerToast("Subscribed — thank you!");
  };

  return (
    <>
      {/*
      <header className="nav">
        <a href="/#top" className="brand" aria-label="being honest">
          <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
        </a>
        <nav id="site-nav" className={`nav-links ${navOpen ? "open" : ""}`}>
          <a href="/#why" onClick={() => setNavOpen(false)}>Why Slow</a>
          <a href="/#stores" onClick={() => setNavOpen(false)}>Stores</a>
          <a href="/faqs" onClick={() => setNavOpen(false)}>faqs</a>
          <a href="/from-soil-to-soul" onClick={() => setNavOpen(false)}>From Soil to Soul</a>
          <a href="/our-purpose" onClick={() => setNavOpen(false)}>Our Purpose</a>
          <a href="/blogs" onClick={() => setNavOpen(false)}>Blogs</a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn nav-toggle"
            aria-label="Menu"
            aria-controls="site-nav"
            aria-expanded={navOpen ? "true" : "false"}
            onClick={() => setNavOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>
      {navOpen && <div className="scrim on" onClick={() => setNavOpen(false)} />}
      */}

      <main className="post">
        <article className="post-article">
          <header className="post-header">
            <p className="post-eyebrow">Notes</p>
            <h1>Why Slow Fruit Matters: From the farm to you</h1>
            <p className="muted">Harvest timing, natural ripening, short holds, and gentle handling — the pillars behind better taste and better health.</p>
          </header>
          <figure className="post-hero" style={{ "--img": "url('https://placehold.co/1600x900/png?text=Why+Slow+Matters')" } as React.CSSProperties}></figure>
          <section className="post-content">
            <h2>Harvest at the right time</h2>
            <p>We harvest at physiological maturity — not early for shipping convenience, and not late for superficial sweetness. That balanced timing builds real flavour.</p>
            <h2>Natural ripening</h2>
            <p>No artificial ripening, ever. We let the fruit finish on its own terms, which preserves aroma compounds and texture.</p>
            <h2>Short holds</h2>
            <p>Less stacking, less bruising. We keep storage times short so fruit moves quickly and arrives more honest.</p>
            <h2>Gentle handling</h2>
            <p>Fewer rough edges from field to shelf means more intact cell walls — and a better bite.</p>
            <h2>What this means for you</h2>
            <p>Fruit that tastes like itself. Not glossy or rushed — just ready when it’s ready.</p>
          </section>
        </article>
      </main>

      {/* footer and contact modal removed (centralized) */}
    </>
  );
}
