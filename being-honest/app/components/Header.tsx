"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();

  // Smooth-scroll handler for same-page section links
  const onSectionClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    try {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `/#${id}`);
          setActive(id);
          setNavOpen(false);
        }
      }
    } catch {}
  }, []);

  // Observe sections on the home page to highlight current link
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    const ids = ["why", "stores", "faq", "contact"];
    const els = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: string; el: HTMLElement } => x.el !== null) as { id: string; el: HTMLElement }[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let current = active;
        for (const entry of entries) {
          if (entry.isIntersecting) current = (entry.target as HTMLElement).id;
        }
        if (current) setActive(current);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5, 1] }
    );
    els.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="nav">
        <a href="/" className="brand" aria-label="being honest">
          <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
        </a>
        <nav id="site-nav" suppressHydrationWarning className={`nav-links ${navOpen ? "open" : ""}`}>
          <a
            href="/our-purpose"
            className={pathname === "/our-purpose" ? "active" : ""}
            onClick={() => setNavOpen(false)}
          >
            Our Purpose
          </a>
          <a
            href="/from-soil-to-soul"
            className={pathname === "/from-soil-to-soul" ? "active" : ""}
            onClick={() => setNavOpen(false)}
          >
            From Soil to Soul
          </a>
          <a
            href="/pomegranate"
            className={pathname === "/pomegranate" ? "active" : ""}
            onClick={() => setNavOpen(false)}
          >
            Pomegranate
          </a>
          <a
            href="/#why"
            className={pathname === "/" && active === "why" ? "active" : ""}
            onClick={(e) => onSectionClick(e, "why")}
          >
            Why Slow
          </a>
          <a href="/faqs" className={pathname === "/faqs" ? "active" : ""} onClick={() => setNavOpen(false)}>
            faqs
          </a>
          <a
            href="/#stores"
            className={pathname === "/" && active === "stores" ? "active" : ""}
            onClick={(e) => onSectionClick(e, "stores")}
          >
            Stores
          </a>
          <a href="/blogs" className={pathname?.startsWith("/blogs") ? "active" : ""} onClick={() => setNavOpen(false)}>
            Blogs
          </a>
          <a
            href="/#contact"
            className={pathname === "/" && active === "contact" ? "active" : ""}
            onClick={(e) => onSectionClick(e, "contact")}
          >
            Contact
          </a>
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
