"use client";

import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <a href="/" className="brand" aria-label="being honest">
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
    </>
  );
}

