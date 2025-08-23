"use client";

import { useMemo, useRef, useState } from "react";

export const metadata = {
  title: "From Soil to Soul — being honest",
  description:
    "A story rooted in the land: patience, seasons, and the taste of time — from farm to you.",
};

export default function FromSoilToSoul() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
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
        <nav className="nav-links">
          <a href="/#why">Why Slow</a>
          <a href="/#stores">Stores</a>
          <a href="/#faq">FAQ</a>
          <a href="/from-soil-to-soul">From Soil to Soul</a>
          <a href="/blogs">Blogs</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Contact" onClick={() => setShowModal(true)}>✉</button>
        </div>
      </header>

      <main className="post">
        <article className="post-article">
          <header className="post-header">
            <p className="post-eyebrow">Story</p>
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
