"use client";

import { useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function FarmDetail() {
  const [navOpen, setNavOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const year = useMemo(() => new Date().getFullYear(), []);
  const params = useParams<{ code: string }>();
  const router = useRouter();

  const code = (params?.code || "").toString();
  const isKnown = code === "041496";

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

      <main className="post">
        <article className="post-article">
          {!isKnown ? (
            <>
              <header className="post-header">
                <h1>Farm not found</h1>
                <p className="muted">We couldn’t find details for code {code}. Please check the 6‑digit code and try again.</p>
              </header>
              <section className="post-content">
                <div style={{ display: "flex", gap: 10 }}>
                  <a className="btn primary" href="/farm-code">Try another code</a>
                  <a className="btn ghost" href="/">Back home</a>
                </div>
              </section>
            </>
          ) : (
            <>
              <header className="post-header farm-header">
                <p className="post-eyebrow">Farm code {code}</p>
                <h1>Solarpur, Maharashtra</h1>
                <div className="farm-tags">
                  <span className="tag">Crop: Pomegranate</span>
                  <span className="tag">Variety: Bhagwa</span>
                  <span className="tag">Area: 50 acres</span>
                </div>
                <p className="muted">A quiet orchard where time guides the harvest.</p>
              </header>
              <figure
                className="farm-hero"
                style={{ "--img": "url('/assets/images/pomegranate/pexels-julia-volk-5272973.jpg')" } as React.CSSProperties}
              />
              <section className="post-content farm">
                <div className="farm-grid">
                  <div className="fact-card">
                    <h2>About the farm</h2>
                    <p>
                      In this semi‑arid belt, long sunny days and cool, dry nights help Bhagwa pomegranates build deep colour and balanced sweetness.
                    </p>
                    <h3>Quick facts</h3>
                    <ul className="fact-list">
                      <li>Pomegranate (Bhagwa) across 50 acres.</li>
                      <li>Natural ripening — no artificial agents.</li>
                      <li>Short holds and gentle handling.</li>
                    </ul>
                    <h3>About the city</h3>
                    <ul className="fact-list">
                      <li>Located in Maharashtra with a warm, dry climate that suits pomegranates.</li>
                      <li>Many sunny days support colour development and consistent brix.</li>
                      <li>A well‑known belt for horticulture and orchard crops.</li>
                    </ul>
                    <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                      <a className="btn ghost" href="/farm-code">Look up another code</a>
                      <a className="btn tiny" href="/#stores">Find stores</a>
                    </div>
                  </div>
                  <div className="map-card">
                    <h2>Map</h2>
                    <div className="map-embed" aria-label="Map of Solarpur, Maharashtra">
                      <iframe
                        src="https://www.google.com/maps?q=Solarpur%2C%20Maharashtra&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Solarpur, Maharashtra map"
                      />
                    </div>
                    <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                      <a className="btn tiny" target="_blank" rel="noopener" href="https://maps.app.goo.gl/ZqgLshZRsTXCKktg8">Open in Google Maps</a>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
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
