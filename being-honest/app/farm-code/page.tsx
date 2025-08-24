"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function FarmCodeFinder() {
  const [navOpen, setNavOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const year = useMemo(() => new Date().getFullYear(), []);
  const router = useRouter();

  const triggerToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 2200); };
  const onNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value?.trim() ?? "";
    if (!/.+@.+\..+/.test(email)) return triggerToast("Please enter a valid email");
    if (emailRef.current) emailRef.current.value = "";
    triggerToast("Subscribed — thank you!");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = (codeRef.current?.value || "").replace(/\D/g, "");
    if (!/^\d{6}$/.test(code)) return triggerToast("Enter a valid 6‑digit code");
    router.push(`/farms/${code}`);
  };

  const fillExample = (e: React.MouseEvent) => {
    e.preventDefault();
    if (codeRef.current) codeRef.current.value = "041496";
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
            <h1>Find your farm</h1>
            <p className="muted">Enter the 6‑digit code from your pack to learn about the farm.</p>
          </header>
          <section className="post-content">
            <form onSubmit={onSubmit} className="finder-form" style={{ display: "grid", gap: 12, maxWidth: 520 }}>
              <label htmlFor="farmCode">Farm code</label>
              <input
                id="farmCode"
                ref={codeRef}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                placeholder="e.g., 041496"
                aria-describedby="codeHelp"
                className="finder-input"
                suppressHydrationWarning
                onChange={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").slice(0, 6); }}
                style={{ padding: "12px 14px", letterSpacing: "0.08em", fontWeight: 600, borderRadius: 12, border: "1px solid var(--line)", background: "transparent", color: "#fff", width: "280px" }}
              />
              <div id="codeHelp" className="tiny muted">
                Don’t want to type? Try code <a href="#" onClick={fillExample}>041496</a>.
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn primary" type="submit">Find farm</button>
                <a className="btn ghost" href="/">Back home</a>
              </div>
            </form>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <a href="/#top" className="brand brand--footer" aria-label="being honest">
              <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
            </a>
            <p className="muted">Fruit that respects time. © {year}</p>
          </div>
          <div className="links">
            <a href="/#stores">Stores</a>
            <a href="/farm-code">Enter Farm Code</a>
          </div>
        </div>
      </footer>

      <div className={`toast ${toast ? "on" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
