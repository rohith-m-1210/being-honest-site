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

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <a href="/#top" className="brand brand--footer" aria-label="being honest">
              <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
            </a>
            <p className="muted">Fruit that respects time. © {year}</p>
          </div>
          <form className="newsletter" onSubmit={onNewsletter}>
            <label>Email for gentle updates</label>
            <div className="input-wrap">
              <input ref={emailRef} type="email" placeholder="you@example.com" required />
              <button className="btn small" type="submit">Subscribe</button>
            </div>
            <p className="tiny muted">By subscribing you agree to receive occasional emails.</p>
          </form>
          <div className="links">
            <a href="/#stores">Stores</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>Contact</a>
          </div>
        </div>
      </footer>

      {showModal && (
        <>
          <div className="scrim on" onClick={() => setShowModal(false)} />
          <dialog open id="contactModal">
            <form method="dialog" className="modal" onSubmit={(e) => e.preventDefault()}>
              <button className="icon-btn modal-close" aria-label="Close" onClick={() => setShowModal(false)}>✕</button>
              <h3>Say hello</h3>
              <p className="muted">We’re here, slowly.</p>
              <div className="field"><label>Name</label><input type="text" required/></div>
              <div className="field"><label>Email</label><input type="email" required/></div>
              <div className="field"><label>Message</label><textarea rows={4} required></textarea></div>
              <menu>
                <button className="btn ghost" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn primary" onClick={() => { setShowModal(false); triggerToast("Message sent"); }}>Send</button>
              </menu>
            </form>
          </dialog>
        </>
      )}

      <div className={`toast ${toast ? "on" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
