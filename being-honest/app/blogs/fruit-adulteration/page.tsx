"use client";

import { useMemo, useRef, useState } from "react";

export default function FruitAdulteration() {
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
            <p className="post-eyebrow">Guide</p>
            <h1>Fruit Adulteration: How to spot it and stay safe</h1>
            <p className="muted">From artificial ripening to wax and dyes — what to look for, why it matters, and how we keep fruit honest.</p>
          </header>
          <figure className="post-hero" style={{ "--img": "url('https://placehold.co/1600x900/png?text=Fruit+Adulteration')" } as React.CSSProperties}></figure>
          <section className="post-content">
            <h2>Common forms of adulteration</h2>
            <ul>
              <li><strong>Artificial ripening:</strong> Calcium carbide (banned) or excessive ethylene speeds up ripening, leading to uneven colour and poor flavour.</li>
              <li><strong>Wax and shine:</strong> Food-grade wax can trap moisture, but overuse and non‑food waxes reduce aroma and mislead on freshness.</li>
              <li><strong>Added colour:</strong> Dyes or surface brighteners deepen reds/greens, masking natural seasonality and variety differences.</li>
              <li><strong>Injected sweetness:</strong> Sugar syrups or pre‑soaks alter taste and weight, undermining natural brix and mouthfeel.</li>
            </ul>
            <h2>Simple checks you can do</h2>
            <ul>
              <li><strong>Look:</strong> Uniform, overly bright colour with green stems can indicate forced ripening or dyes.</li>
              <li><strong>Smell:</strong> Ripe fruit should have a gentle, varietal aroma near the stem — chemical odours are a red flag.</li>
              <li><strong>Feel:</strong> Very soft outside but green inside, or rubbery skin with glossy finish, can indicate artificial processes.</li>
              <li><strong>Cut:</strong> Colour bleeding into the pith, very hard seeds with soft flesh, or watery sweetness suggest interference.</li>
            </ul>
            <h2>Health and quality impacts</h2>
            <p>Forced ripening and cosmetic treatments short‑circuit the fruit’s natural development: sugars don’t balance with acids, aroma compounds stay low, and texture suffers. In some cases, unsafe chemicals can pose health risks. Even when allowed materials are used, overuse prioritises looks over nutrition.</p>
            <h2>Our approach at being honest</h2>
            <ul>
              <li><strong>Natural ripening only:</strong> No artificial ripening agents. We harvest at physiological maturity and wait.</li>
              <li><strong>No added colour, shine, or wax:</strong> Skin stays as nature made it. Scuff marks are fine; gloss isn’t our goal.</li>
              <li><strong>Short holds and gentle handling:</strong> Minimal storage time, careful handling, and transparent movement from farm to you.</li>
              <li><strong>Authentic varieties:</strong> Each variety has its own natural colour, aroma, and sweetness. We let it speak for itself.</li>
            </ul>
            <h2>What to buy instead</h2>
            <p>Choose fruit with seasonal colour, light bloom (a matte, natural finish), and gentle aroma. Favour producers and stores that embrace transparency. If it looks too perfect, it probably isn’t honest.</p>
          </section>
        </article>
      </main>

      {/* footer and contact modal removed (centralized) */}
    </>
  );
}
