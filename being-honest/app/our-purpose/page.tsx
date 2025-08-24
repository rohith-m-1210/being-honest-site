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
      <header className="nav">
        <a href="/#top" className="brand" aria-label="being honest">
          <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
        </a>
        <nav id="site-nav" className={`nav-links ${navOpen ? "open" : ""}`}>
          <a href="/#why" onClick={() => setNavOpen(false)}>Why Slow</a>
          <a href="/#stores" onClick={() => setNavOpen(false)}>Stores</a>
          <a href="/#faq" onClick={() => setNavOpen(false)}>FAQ</a>
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
