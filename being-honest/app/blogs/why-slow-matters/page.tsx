"use client";

import { useMemo, useRef, useState } from "react";

export default function WhySlowMatters() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
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
      <header className="nav">
        <a href="/#top" className="brand" aria-label="being honest">
          <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
        </a>
        <nav className="nav-links">
          <a href="/#why">Why Slow</a>
          <a href="/#stores">Stores</a>
          <a href="/#faq">FAQ</a>
          <a href="/blogs">Blogs</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Contact" onClick={() => setShowModal(true)}>✉</button>
        </div>
      </header>

      <main className="post">
        <article className="post-article">
          <header className="post-header">
            <p className="post-eyebrow">Notes</p>
            <h1>Why Slow Fruit Matters: From the farm to you</h1>
            <p className="muted">Harvest timing, natural ripening, small batches, and gentle handling — the pillars behind better taste and better health.</p>
          </header>
          <figure className="post-hero" style={{ "--img": "url('https://placehold.co/1600x900/png?text=Why+Slow+Matters')" } as React.CSSProperties}></figure>
          <section className="post-content">
            <h2>Harvest at the right time</h2>
            <p>We harvest at physiological maturity — not early for shipping convenience, and not late for superficial sweetness. That balanced timing builds real flavour.</p>
            <h2>Natural ripening</h2>
            <p>No artificial ripening, ever. We let the fruit finish on its own terms, which preserves aroma compounds and texture.</p>
            <h2>Small batches</h2>
            <p>Less stacking, less bruising. We move fruit in smaller lots with shorter holds so it arrives more honest.</p>
            <h2>Gentle handling</h2>
            <p>Fewer rough edges from field to shelf means more intact cell walls — and a better bite.</p>
            <h2>What this means for you</h2>
            <p>Fruit that tastes like itself. Not glossy or rushed — just ready when it’s ready.</p>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <a href="/#top" className="brand brand--footer">being<span>honest</span></a>
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

