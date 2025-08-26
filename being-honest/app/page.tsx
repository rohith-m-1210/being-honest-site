"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { farmImages } from "./components/exploreData";
const ExploreRail = dynamic(() => import("./components/ExploreRail"), { ssr: false });

export default function Home() {
  // UI state for FAQ
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  // Images pulled from shared data so changes reflect everywhere

  // no toast on home (centralized header/footer)

  return (
    <>
      

      {/* HERO */}
      <section className="hero" id="top" role="banner" aria-label="being honest — Slow is our superpower">
        <div
          className="hero-media"
          style={{
            "--img": "url('/assets/images/header /harendra-kumar-3JxfLgxg_bM-unsplash.jpg')",
            "--pos": "50% 40%",
            "--pos-mobile": "50% 20%",
          } as React.CSSProperties}
        >
          <Image
            src={"/assets/images/header /harendra-kumar-3JxfLgxg_bM-unsplash.jpg"}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 40%" }}
          />
        </div>

        <div className="hero-content">
          <h1>
            <span className="h1-soft">Fresh from</span> India’s finest farms <span>to you.</span>
          </h1>
          <p className="sub">
            we’re driven to enhance the health of our community by providing ethically sourced fruits that support our bodies and our planet.
          </p>
          <div className="cta">
            <a href="#why" className="btn primary">Explore why slow</a>
            <a href="#stores" className="btn ghost">Find stores</a>
            <a href="/farm-code" className="btn ghost">Enter Farm Code</a>
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
              {/* Left column: only the NO's (with NO PRESERVATIVES as 3rd) */}
              <ul className="std-list">
                <li>NO ARTIFICIAL RIPENING</li>
                <li>NO ADDED COLOUR &amp; SWEETNESS</li>
                <li>NO PRESERVATIVES</li>
                <li>NO SHINE &amp; WAX</li>
              </ul>
              {/* Right column: reorder with LOCAL first, HANDPICKED last */}
              <ul className="std-list">
                <li>LOCAL AND FAMILY-OWNED FARMS</li>
                <li>AUTHENTIC VARIETIES</li>
                <li>LOW-IMPACT PACKAGING</li>
                <li>HANDPICKED</li>
              </ul>
            </div>
          </div>
          <p className="std-note">we find purpose in sustaining a community centered in caring, curiosity, and positive change.</p>
        </div>
      </section>

      {/* Panels */}
      <section className="panels" aria-label="Story">
        <article className="panel">
          <div className="panel-media">
            <Image
              src="/assets/images/pomegranate/pexels-julia-volk-5272973.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="panel-copy">
            <h2>We believe in slow.</h2>
            <p>Time builds flavour. We harvest only when the fruit is truly ready—never hurried.</p>
          </div>
        </article>
        <article className="panel">
          <div className="panel-media">
            <Image
              src="/assets/images/website/fatemeh-zakeri-lkflaFuiXII-unsplash.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover", objectPosition: "50% 60%" }}
            />
          </div>
          <div className="panel-copy">
            <h3>No artificial ripening.</h3>
            <p>Nothing forced. Just natural ripening, true to its time.</p>
          </div>
        </article>
        <article className="panel">
          <div className="panel-media">
            <Image
              src="/assets/images/website/pexels-shraddha-kulkarni-451518905-15589107.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
          </div>
          <div className="panel-copy">
            <h3>No added colour or sweetness.</h3>
            <p>What you taste is the fruit’s own character—untinted, unmasked.</p>
          </div>
        </article>
        <article className="panel">
          <div className="panel-media">
            <Image
              src="/assets/images/website/pexels-melbinjacob-19393552.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
          </div>
          <div className="panel-copy">
            <h3>No shine or wax.</h3>
            <p>We keep the skin as nature made it. Beauty without the gloss.</p>
          </div>
        </article>
      </section>

      {/* Calm */}
      <section className="calm" aria-label="Calm break">
        <div className="calm-media">
          <Image
            src="/assets/images/Screenshot%202025-08-26%20at%204.38.58%E2%80%AFPM.png"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="calm-copy">
          <h2>We believe in slow.</h2>
        </div>
      </section>

      {/* Photos */}
      <section className="photos" aria-label="Photos">
        <div className="photo-grid">
          <div className="photo" style={{ position: 'relative' }}>
            <Image
              src="/assets/images/pomegranate/mockup-graphics-XiWQbLEhFyo-unsplash.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 60vw, 30vw"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <div className="photo" style={{ position: 'relative' }}>
            <Image
              src="/assets/images/pomegranate/pexels-aditya-bhatia-264152318-18142134.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 60vw, 30vw"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <div className="photo" style={{ position: 'relative' }}>
            <Image
              src="/assets/images/pomegranate/pexels-roman-odintsov-5150206.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 60vw, 30vw"
              style={{ objectFit: 'cover', objectPosition: '80% 100%' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Exploring the farms */}
      <ExploreRail
        images={farmImages}
        />

      {/* Reviews */}
      <section className="reviews" aria-label="Reviews">
        <div className="reviews-head">
          <h2>What people are saying</h2>
          <p className="muted">Real notes from our community about carbide‑free mangoes.</p>
        </div>
        <div className="review-grid">
          <figure className="review-card">
            <blockquote className="review-quote">
              “We could see the <em>poralu</em> (threads) as we ate. The flesh
              turned a deep orange — the kind we used to get at home. My family
              finished them fast.”
            </blockquote>
            <figcaption className="review-meta">
              <strong>Satyasree</strong>
              <span className="muted">Homemaker</span>
            </figcaption>
          </figure>

          <figure className="review-card">
            <blockquote className="review-quote">
              “I had their Himayat mangoes — the fruits were big and really tasty.
              My son and daughter kept asking for more.”
            </blockquote>
            <figcaption className="review-meta">
              <strong>Chaitanya</strong>
              <span className="muted">Entrepreneur</span>
            </figcaption>
          </figure>
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

      {/* FAQ (compact) */}
      <section id="faq" className="faq">
        <h2>FAQs</h2>
        <div className={`faq-item ${faqOpen[0] ? "open" : ""}`}>
          <button
            className="faq-q"
            aria-expanded={faqOpen[0] ? "true" : "false"}
            onClick={() => setFaqOpen((s) => ({ ...s, 0: !s[0] }))}
          >
            What does “Being Honest” really mean?
            <span aria-hidden>▾</span>
          </button>
          <div className="faq-a">
            <p>It is more than a brand name - it’s our way of life. In a world where fruits are often polished, injected, and hurried for profit, we choose patience, purity, and truth. Being Honest means giving you fruit that tastes the way it should - ripe with flavour, untouched by shortcuts, and full of the memories nature intended.</p>
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <a className="btn ghost" href="/faqs">See all FAQs</a>
        </div>
      </section>

      {/*
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand brand--footer" aria-label="being honest">
              <img src="/assets/Asset 2.png" alt="" className="logo" width={170} height={28} />
            </a>
            <p className="tiny muted">FSSAI License No: 1362502600038 © 2025</p>
          </div>
          <div className="footer-spacer" aria-hidden></div>
          
          <div className="links">
            <a href="#stores">Stores</a>
            <div className="contact-block" aria-label="Contact">
              <div className="contact-title">Contact</div>
              <div className="contact-row">
                <a className="phone" href="tel:+919966399588" aria-label="Call +91 99663 99588">+91 99663 99588</a>
                <div className="contact-icons">
                  
                  <a className="icon" title="WhatsApp" aria-label="Open WhatsApp chat" href="https://wa.me/919966399588" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .24 5.26.24 11.78c0 2.07.54 4.05 1.57 5.81L0 24l6.58-1.73a11.8 11.8 0 0 0 5.48 1.4h.01c6.56 0 11.82-5.26 11.82-11.78 0-3.15-1.23-6.11-3.37-8.41ZM12.06 21.3h-.01a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.9 1.02 1.04-3.8-.23-.38a9.51 9.51 0 0 1-1.47-5.12c0-5.24 4.28-9.5 9.55-9.5a9.4 9.4 0 0 1 6.75 2.8 9.4 9.4 0 0 1 2.8 6.7c0 5.24-4.28 9.51-9.53 9.51Zm5.48-7.14c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.7.15-.21.3-.8.98-.98 1.18-.18.2-.36.22-.66.07-.3-.15-1.23-.45-2.35-1.43-.86-.74-1.44-1.66-1.62-1.96-.18-.3-.02-.45.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.7-1.68-.96-2.3-.25-.6-.5-.5-.7-.5l-.6-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.3 5.1 4.62.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z"/>
                    </svg>
                  </a>
                  
                  <a className="icon" title="Instagram" aria-label="Open Instagram profile" href="https://instagram.com/" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                      <path d="M12 2.2c3 0 3.4 0 4.6.07 1.2.06 1.9.25 2.4.42.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.5.36 1.2.42 2.4.07 1.2.07 1.6.07 4.6s0 3.4-.07 4.6c-.06 1.2-.25 1.9-.42 2.4-.23.6-.5 1-.95 1.5-.45.45-.9.72-1.5.95-.5.17-1.2.36-2.4.42-1.2.07-1.6.07-4.6.07s-3.4 0-4.6-.07c-1.2-.06-1.9-.25-2.4-.42-.6-.23-1-.5-1.5-.95-.45-.45-.72-.9-.95-1.5-.17-.5-.36-1.2-.42-2.4C2.2 15.4 2.2 15 2.2 12s0-3.4.07-4.6c.06-1.2.25-1.9.42-2.4.23-.6.5-1 .95-1.5.45-.45.9-.72 1.5-.95.5-.17 1.2-.36 2.4-.42C8.6 2.2 9 2.2 12 2.2Zm0 1.8c-3 0-3.4 0-4.6.07-1 .05-1.6.22-1.97.36-.5.2-.85.43-1.23.8-.37.38-.6.74-.8 1.24-.14.37-.3.94-.36 1.97-.07 1.2-.07 1.5-.07 4.6s0 3.4.07 4.6c.05 1 .22 1.6.36 1.97.2.5.43.85.8 1.23.38.37.74.6 1.24.8.37.14.94.3 1.97.36 1.2.07 1.5.07 4.6.07s3.4 0 4.6-.07c1-.05 1.6-.22 1.97-.36.5-.2.85-.43 1.23-.8.37-.38.6-.74.8-1.24.14-.37.3-.94.36-1.97.07-1.2.07-1.5.07-4.6s0-3.4-.07-4.6c-.05-1-.22-1.6-.36-1.97-.2-.5-.43-.85-.8-1.23-.38-.37-.74-.6-1.24-.8-.37-.14-.94-.3-1.97-.36-1.2-.07-1.5-.07-4.6-.07Zm0 3.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 1.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-2.05a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      */}

      {/* TOAST removed (centralized) */}
    </>
  );
}
