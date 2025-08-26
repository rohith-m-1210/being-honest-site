'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  images: string[];
  title?: string;
};

export default function ExploreRail({ images, title = 'Explore the farms' }: Props) {
  const exploreRef = useRef<HTMLDivElement>(null);
  const scrollExplore = (dir: -1 | 1) => {
    const el = exploreRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  // Reorder: move last image to second position
  const baseOrder = useMemo(() => {
    if (!images.length) return [] as string[];
    const last = images[images.length - 1];
    const rest = images.slice(0, images.length - 1);
    if (!rest.length) return [last];
    return [rest[0], last, ...rest.slice(1)];
  }, [images]);

  const tripled = useMemo(() => [...baseOrder, ...baseOrder, ...baseOrder], [baseOrder]);

  // Infinite loop handling
  const groupSizeRef = useRef(0);
  const middleStartRef = useRef(0);
  const indexOffsetsRef = useRef<number[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const rail = exploreRef.current;
    if (!rail) return;
    const len = baseOrder.length;
    if (!len) return;
    const children = Array.from(rail.children) as HTMLElement[];
    if (children.length < len * 3) return;
    const start1 = children[len].offsetLeft; // middle group start
    const start2 = children[len * 2].offsetLeft; // next group start
    middleStartRef.current = start1;
    groupSizeRef.current = start2 - start1;
    indexOffsetsRef.current = Array.from({ length: len }, (_, i) => children[len + i].offsetLeft);
    rail.scrollLeft = start1; // jump to middle group on mount

    const onScroll = () => {
      const size = groupSizeRef.current;
      if (!size) return;
      const x = rail.scrollLeft;
      const mid = middleStartRef.current;
      const min = mid - size * 0.5;
      const max = mid + size * 1.5;
      if (x < min) rail.scrollLeft = x + size;
      else if (x > max) rail.scrollLeft = x - size;

      // Active dot calculation (nearest tile center in middle group)
      const centers = indexOffsetsRef.current.map((l, i) => l + children[len + i].clientWidth / 2);
      const viewportCenter = x + rail.clientWidth / 2;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < centers.length; i++) {
        const d = Math.abs(centers[i] - viewportCenter);
        if (d < bestDist) { best = i; bestDist = d; }
      }
      setActiveIdx(best);
    };
    rail.addEventListener('scroll', onScroll);
    return () => rail.removeEventListener('scroll', onScroll);
  }, [baseOrder]);

  const goToIndex = (i: number) => {
    const rail = exploreRef.current;
    if (!rail) return;
    const offsets = indexOffsetsRef.current;
    const len = baseOrder.length;
    if (!offsets.length || i < 0 || i >= len) return;
    rail.scrollTo({ left: offsets[i], behavior: 'smooth' });
  };

  return (
    <section className="explore" aria-label={title}>
      <div className="explore-head">
        <h2>{title}</h2>
      </div>
      <div className="explore-viewport">
        <div className="explore-rail" ref={exploreRef}>
          {tripled.map((src, i) => {
            const idxInBase = i % baseOrder.length;
            const isSecond = idxInBase === 1; // moved last image now second
            const isHeroWide = src.endsWith('/IMG_8708.jpg');
            const mod = idxInBase % 6;
            const patterned = mod === 0 ? 'square' : mod === 2 ? 'tall' : mod === 3 ? 'wide' : mod === 4 ? 'tall' : 'square';
            const size = isHeroWide ? 'xwide' : isSecond ? 'wide' : patterned;
            return (
              <a key={src + i} href="/farm-code" className={`tile tile--${size}`} aria-label="Enter Farm Code">
                <span className="tile-media" style={{ '--img': `url('${src}')` } as React.CSSProperties} />
              </a>
            );
          })}
        </div>
        <div className="explore-dots" role="tablist" aria-label="Slides">
          {baseOrder.map((_, i) => (
            <button
              key={`dot-${i}`}
              role="tab"
              aria-selected={activeIdx === i}
              className={`dot ${activeIdx === i ? 'active' : ''}`}
              onClick={() => goToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

