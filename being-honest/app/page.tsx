"use client";

import { useMemo, useRef, useState } from "react";

export default function Home() {
  // UI state for FAQ and modal/toast
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [showModal, setShowModal] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const year = useMemo(() => new Date().getFullYear(), []);

  const onNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value?.trim() ?? "";
    if (!/.+@.+\..+/.test(email)) return triggerToast("Please enter a valid email");
    if (emailRef.current) emailRef.current.value = "";
    triggerToast("Subscribed — thank you!");
  };

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand" aria-label="being honest">
          <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
        </a>
        <nav id="site-nav" className={`nav-links ${navOpen ? "open" : ""}`}>
          <a href="#why" onClick={() => setNavOpen(false)}>Why Slow</a>
          <a href="#stores" onClick={() => setNavOpen(false)}>Stores</a>
          <a href="#faq" onClick={() => setNavOpen(false)}>FAQ</a>
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

      {/* HERO */}
      <section className="hero" id="top" role="banner" aria-label="being honest — Slow is our superpower">
        <div
          className="hero-media"
          style={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - CSS var string ok
            "--img": "url('/assets/images/header /harendra-kumar-3JxfLgxg_bM-unsplash.jpg')",
            "--pos": "50% 40%",
            "--pos-mobile": "50% 20%",
          } as React.CSSProperties}
        />

        <div className="hero-content">
          <p className="eyebrow">fresh from the finest farms in India</p>
          <h1>
            From the farm <span>to you</span>.
          </h1>
          <p className="sub">
            we’re driven to enhance the health of our community by providing ethically sourced fruits that support our bodies and our planet. we find purpose in sustaining a community centered in caring, curiosity, and positive change.
          </p>
          <div className="cta">
            <a href="#why" className="btn primary">Explore why slow</a>
            <a href="#stores" className="btn ghost">Find stores</a>
          </div>
        </div>
      </section>

      {/* OUR STANDARD */}
      <span id="why"></span>
      <section className="std-section">
        <div className="std-wrap">
          <h2 className="std-title">OUR STANDARD</h2>
          <p className="std-intro">
            AT THE HEART OF BEING HONEST, THERE’S A PROMISE WE’LL NEVER BREAK: EVERYTHING HERE IS CURATED TO SUPPORT YOUR HEALTH JOURNEY. WE DO THE WORK FOR YOU, SO YOU DON’T HAVE TO WONDER WHAT YOU’RE PUTTING IN YOUR BODY.
          </p>
          <div className="std-panel">
            <div className="std-grid">
              <ul className="std-list">
                <li>NO ARTIFICIAL RIPENING</li>
                <li>NO ADDED COLOUR &amp; SWEETNESS</li>
                <li>NO SHINE &amp; WAX</li>
                <li>SMALL BATCHES</li>
                <li>AUTHENTIC VARIETIES</li>
              </ul>
              <ul className="std-list">
                <li>ECO-CONSCIOUS / HANDPICKED / CURATED</li>
                <li>LOCAL AND FAMILY-OWNED FARMS</li>
                <li>LOW-IMPACT PACKAGING</li>
              </ul>
              <div className="std-motto">
                <div className="std-motto-label">MOTTO:</div>
                <div className="std-motto-text">WE BELIEVE IN SLOW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panels */}
      <section className="panels" aria-label="Story">
        <article className="panel">
          <div
            className="panel-media"
            style={{
              "--img": "url('/assets/images/pomegranate/pexels-julia-volk-5272973.jpg')",
            } as React.CSSProperties}
          />
          <div className="panel-copy">
            <h2>We believe in slow.</h2>
            <p>Time builds flavour. We harvest only when the fruit is truly ready—never hurried, always honest.</p>
          </div>
        </article>
        <article className="panel">
          <div
            className="panel-media"
            style={{
              "--img": "url('/assets/images/website/fatemeh-zakeri-lkflaFuiXII-unsplash.jpg')",
              "--pos": "50% 60%",
              "--pos-mobile": "50% 30%",
            } as React.CSSProperties}
          />
          <div className="panel-copy">
            <h3>No artificial ripening.</h3>
            <p>Nothing forced. Just natural ripening under open skies.</p>
          </div>
        </article>
        <article className="panel">
          <div className="panel-media" style={{ "--img": "url('https://placehold.co/1600x1000/png?text=No+added+colour+or+sweetness')" } as React.CSSProperties} />
          <div className="panel-copy">
            <h3>No added colour or sweetness.</h3>
            <p>What you taste is the fruit’s own character—untinted, unmasked.</p>
          </div>
        </article>
        <article className="panel">
          <div className="panel-media" style={{ "--img": "url('https://placehold.co/1600x1000/png?text=No+shine+or+wax')" } as React.CSSProperties} />
          <div className="panel-copy">
            <h3>No shine or wax.</h3>
            <p>We keep the skin as nature made it. Beauty without the gloss.</p>
          </div>
        </article>
      </section>

      {/* Calm */}
      <section className="calm" aria-label="Calm break">
        <div
          className="calm-media"
          style={{
            "--img": "url('/assets/images/pomegranate/pexels-julia-volk-5272973.jpg')",
          } as React.CSSProperties}
        />
        <div className="calm-copy">
          <h2>We believe in slow.</h2>
          <p>Slower decisions. Softer days. Better fruit.</p>
        </div>
      </section>

      {/* Photos */}
      <section className="photos" aria-label="Photos">
        <div className="photo-grid">
          <div className="photo" style={{ "--img": "url('/assets/images/pomegranate/mockup-graphics-XiWQbLEhFyo-unsplash.jpg')" } as React.CSSProperties} />
          <div className="photo" style={{ "--img": "url('/assets/images/pomegranate/pexels-aditya-bhatia-264152318-18142134.jpg')" } as React.CSSProperties} />
          <div
            className="photo"
            style={{
              "--img": "url('/assets/images/pomegranate/pexels-roman-odintsov-5150206.jpg')",
              "--pos-y": "100%",
              "--pos-x": "80%",
              "--bg-size": "110%",
            } as React.CSSProperties}
          />
        </div>
      </section>

      {/* Stores */}
      <section id="stores" className="stores">
        <div className="stores-head">
          <h2>Find us offline</h2>
          <p>Prefer to handpick? Visit a partner store near you.</p>
        </div>
        <div className="store-grid">
          <div className="store-card">
            <h3>Hyderabad — Q Mart, Banjara Hills</h3>
            <p>Road Number 2, Banjara Hills</p>
            <a className="btn tiny" target="_blank" rel="noopener" href="https://maps.google.com/?q=Q%20Mart%20Banjara%20Hills">Open in Maps</a>
          </div>
          <div className="store-card">
            <h3>Hyderabad — Q Mart, Gachibowli</h3>
            <p>Gachibowli, Hyderabad</p>
            <a className="btn tiny" target="_blank" rel="noopener" href="https://maps.google.com/?q=Q%20Mart%20Gachibowli">Open in Maps</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <h2>Questions, answered</h2>
        {[
          {
            q: "Do you grow the fruit yourselves?",
            a: "We partner with trusted growers and source fresh from the finest farms in India. We focus on harvest timing and handling.",
          },
          {
            q: "Any artificial ripening or additives?",
            a: "No. No artificial ripening. No added colour or sweetness. No shine or wax.",
          },
          {
            q: "Where do you deliver?",
            a: "We currently ship across major Indian metros. Contact us to confirm coverage in your area.",
          },
        ].map((item, idx) => (
          <div className={`faq-item ${faqOpen[idx] ? "open" : ""}`} key={idx}>
            <button
              className="faq-q"
              aria-expanded={faqOpen[idx] ? "true" : "false"}
              onClick={() => setFaqOpen((s) => ({ ...s, [idx]: !s[idx] }))}
            >
              {item.q}
              <span aria-hidden>▾</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand brand--footer">being<span>honest</span></a>
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
            <a href="#stores">Stores</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>Contact</a>
          </div>
        </div>
      </footer>

      {/* CONTACT MODAL */}
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

      {/* TOAST */}
      <div className={`toast ${toast ? "on" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
