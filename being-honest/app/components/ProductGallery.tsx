"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

type Props = {
  images: string[];
  altMain?: string;
};

export default function ProductGallery({ images, altMain = "Product image" }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [shareToast, setShareToast] = useState<string | null>(null);

  const scrollTo = useCallback((i: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const child = rail.children[i] as HTMLElement | undefined;
    if (!child) return;
    rail.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  }, []);

  const onShare = useCallback(async () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";
      const data = {
        title: "Pomegranate — being honest",
        text: "Naturally ripened Bhagwa pomegranates from Solapur, Maharashtra",
        url,
      };
      if (navigator.share) {
        await navigator.share(data);
      } else if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        setShareToast("Link copied");
        setTimeout(() => setShareToast(null), 1600);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const items = Array.from(rail.querySelectorAll<HTMLElement>(".rail-item"));
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        let winner: Element | null = null;
        let maxRatio = 0;
        for (const e of entries) {
          if (e.intersectionRatio > maxRatio) {
            maxRatio = e.intersectionRatio;
            winner = e.target;
          }
        }
        if (winner) {
          const idx = items.indexOf(winner as HTMLElement);
          if (idx >= 0) setIndex(idx);
        }
      },
      { root: rail, threshold: [0.2, 0.5, 0.8] }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [images.length]);

  return (
    <div>
      {/* Desktop gallery */}
      <div className="gallery-desktop">
        <div className="gallery-main" onClick={() => setOpen(true)} role="button" aria-label="Open image viewer" tabIndex={0}>
          <Image
            src={images[index]}
            alt={altMain}
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <button className="share-btn" aria-label="Share" title="Share" onClick={(e) => { e.stopPropagation(); onShare(); }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d="M18 8a3 3 0 1 0-2.816-4H15a3 3 0 0 0 0 6c.47 0 .914-.108 1.31-.3l-6.27 3.135A3 3 0 0 0 6 12a3 3 0 1 0 2.816 4H9a3 3 0 0 0 0-6c-.47 0-.914.108-1.31.3l6.27-3.135A3 3 0 0 0 18 8Z"/>
            </svg>
          </button>
        </div>
        <div className="thumbs">
          {images.map((src, i) => (
            <div
              key={src + i}
              className={`thumb ${i === index ? "active" : ""}`}
              role="button"
              tabIndex={0}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
            >
              <Image src={src} alt="" fill sizes="(max-width: 900px) 33vw, 20vw" style={{ objectFit: "cover" }} />
              <button
                className="share-btn share-btn--sm"
                aria-label="Share"
                title="Share"
                onClick={(e) => {
                  e.stopPropagation();
                  onShare();
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                  <path d="M18 8a3 3 0 1 0-2.816-4H15a3 3 0 0 0 0 6c.47 0 .914-.108 1.31-.3l-6.27 3.135A3 3 0 0 0 6 12a3 3 0 1 0 2.816 4H9a3 3 0 0 0 0-6c-.47 0-.914.108-1.31.3l6.27-3.135A3 3 0 0 0 18 8Z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile swipeable rail */}
      <div className="gallery-mobile">
        <div className="gallery-rail" aria-label="Product images" ref={railRef}>
          {images.map((src, i) => (
            <div
              key={src + i}
              className="rail-item"
              role="button"
              tabIndex={0}
              aria-label={`Open image ${i + 1}`}
              onClick={() => { setIndex(i); setOpen(true); }}
            >
              <Image src={src} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
              <button
                className="share-btn share-btn--sm"
                aria-label="Share"
                title="Share"
                onClick={(e) => { e.stopPropagation(); onShare(); }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                  <path d="M18 8a3 3 0 1 0-2.816-4H15a3 3 0 0 0 0 6c.47 0 .914-.108 1.31-.3l-6.27 3.135A3 3 0 0 0 6 12a3 3 0 1 0 2.816 4H9a3 3 0 0 0 0-6c-.47 0-.914.108-1.31.3l6.27-3.135A3 3 0 0 0 18 8Z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="gallery-dots explore-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>

      {open && (
        <div className="lb" role="dialog" aria-label="Image viewer" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
            <button className="lb-share" aria-label="Share" title="Share" onClick={onShare}>↗</button>
            <button className="lb-nav prev" aria-label="Previous" onClick={prev}>‹</button>
            <div className="lb-img">
              <Image src={images[index]} alt="" fill sizes="100vw" style={{ objectFit: "contain" }} />
            </div>
            <button className="lb-nav next" aria-label="Next" onClick={next}>›</button>
          </div>
        </div>
      )}

      {shareToast && <div className="share-toast">{shareToast}</div>}
    </div>
  );
}
