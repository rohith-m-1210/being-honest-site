"use client";

import { useState } from "react";

type QA = { q: string; a: JSX.Element };
type Section = { id: string; title: string; items: QA[] };

export default function FAQsPage() {
  const [open, setOpen] = useState<Record<string, number | null>>({});
  const toggle = (sid: string, idx: number) => setOpen((s) => ({ ...s, [sid]: s[sid] === idx ? null : idx }));

  const sections: Section[] = [
    {
      id: "about",
      title: "About Us",
      items: [
        {
          q: "What does “Being Honest” really mean?",
          a: (
            <p>It is more than a brand name - it’s our way of life. In a world where fruits are often polished, injected, and hurried for profit, we choose patience, purity, and truth. Being Honest means giving you fruit that tastes the way it should - ripe with flavour, untouched by shortcuts, and full of the memories nature intended.</p>
          ),
        },
        {
          q: "Why the name “Being Honest”?",
          a: (
            <>
              <p>Because in a market full of shortcuts and artificial practices, we choose the harder right over the easier wrong. What you see, smell, and taste is exactly what nature intended—untainted and truthful.</p>
              <p>But Being Honest is not just a name for a fruit company—it’s a statement about life itself. In our society today, honesty has become fragile. We polish the surface but hide the cracks, we market perfection but mask the truth, we consume convenience but forget authenticity. Somewhere along the way, honesty—once considered the foundation of family, food, and faith—has become optional.</p>
              <p>We believe it is what’s missing most in the world today. Not just in fruits, but in boardrooms, in homes, in relationships, in culture. Without honesty, trust disappears. Without trust, nourishment—whether of body or soul—cannot exist.</p>
              <p>Being Honest is our attempt to restore that. To remind ourselves and our community that truth still matters, that patience still has value, that integrity still tastes better. When you open one of our boxes, you’re not just unwrapping fruit—you’re unwrapping a philosophy. A quiet belief that honesty is not weakness; it is strength, it is dignity, it is wholeness.</p>
              <p>That is why we exist. Not just to sell fruit, but to plant a seed of honesty in a world that is hungry for it.</p>
            </>
          ),
        },
      ],
    },
    {
      id: "quality",
      title: "Quality & Sourcing",
      items: [
        {
          q: "Where do your fruits come from?",
          a: (
            <p> From farmers who rise with the sun and know each tree like family. We work with local and family-owned farms across India who nurture their orchards with care. Every fruit we deliver has a story - of monsoon rains, red earth, and hands that harvested it at the perfect moment.</p>
          ),
        },
        {
          q: "Do you use artificial ripening or chemicals?",
          a: (
            <>
              <p>If we were any other brand, we would have stopped at saying: “We work with trusted farmers to deliver naturally grown, slow-ripened fruits without shortcuts. No artificial ripening, no added sweetness, no shine, no wax. Every fruit carries the honesty of our land and the patience of time.”</p>
              <p>It sounds good, but it doesn’t tell you the full story. The reality is, farmers across India sometimes use fertilizers or crop protection to protect their orchards from unpredictable weather and pests - that’s part of agriculture. The bigger problem, however, often begins after the fruit leaves the farm. This is when fruits are unnaturally ripened with chemicals, polished to look glossy, or even injected with sweetness to trick the eye and tongue.</p>
              <p>This is where Being Honest takes a stand. We do not accelerate ripening. We do not add gloss. We do not inject taste. Instead, we let time, soil, and nature do what they’ve always done best.</p>
              <p>Our mission is to repair this broken link in the food chain - to rebuild trust where it is most often lost.</p>
            </>
          ),
        },
      ],
    },
    {
      id: "packaging",
      title: "Packaging & Delivery",
      items: [
        {
          q: "Why is your packaging different?",
          a: (
            <p>Because honesty extends beyond the fruit. We pack in recyclable materials - wood wool and simple boxes - that protect without pretending. No glossy tricks. When you open a Being Honest box, it feels like unwrapping a gift from a farm, not a factory.</p>
          ),
        },
        {
          q: "How do the fruits stay fresh when they travel?",
          a: (
            <p>We create a calm journey. From orchard to your doorstep, the fruits travel in conditions that keep them cool, balanced, and breathing. Not rushed trucks, not overheated godowns - just the right rhythm, so they arrive alive with freshness.</p>
          ),
        },
        {
          q: "Where can I find Being Honest fruits?",
          a: (
            <>
              <p>Offline: At Q Mart stores in Hyderabad (Banjara Hills & Gachibowli)</p>
              <p>Online: We deliver in Hyderabad. Please do contact us so we can ship to your home.</p>
            </>
          ),
        },
      ],
    },
    {
      id: "experience",
      title: "Experience & Trust",
      items: [
        {
          q: "Why do customers say your fruits taste different?",
          a: (
            <p>Because they taste of memory. Many tell us our mangoes remind them of childhood summers, when fruits were eaten under trees, not off supermarket shelves. </p>
          ),
        },
        {
          q: "Why are your fruits more expensive?",
          a: (
            <>
              <p>A fruit, to us, is not a commodity. It is creation.</p>
              <p>A farmer’s creation. The way an artist paints a canvas or a poet strings words—our farmers shape sweetness, colour, and life itself. Their art hangs not in galleries but on trees, swaying in the wind, season after season. And when something is art, you don’t bargain it down—you value it. You pay it respect.</p>
              <p>That respect comes at a cost. And not one cost—many.</p>
              <p>The cost of travelling across states to bring you the best variety in its best season.</p>
              <p>The cost of choosing bigger, slower-grown fruit—because good size and true ripeness take more time, and more time means more money.</p>
              <p>The cost of buying in small, careful batches, instead of bulk lots that compromise quality.</p>
              <p>The cost of packaging that protects without pretending.</p>
              <p>The cost of placing fruit in trusted stores and building a chain that never breaks its promise.</p>
              <p>Yes, so many costs. But each of them is the price of honesty.</p>
              <p>And here’s where we differ. If you are genuinely curious, we will open our books. We will share with you the small details, with actual numbers - what it takes to bring you a mango or a pomegranate the way nature intended. No company has done this before. But we will. Because when the name itself is Being Honest, why should we hide?</p>
              <p>So, are our fruits more expensive? Maybe.</p>
              <p>But what you’re really paying for is respect - for the farmer, for the fruit, and for your own plate.</p>
            </>
          ),
        },
      ],
    },
    {
      id: "philosophy",
      title: "Philosophy & Future",
      items: [
        {
          q: "What is your vision for Being Honest?",
          a: (
            <>
              <p>Our vision goes beyond fruit. We want to bring honesty back into society - into how we live, how we work, and how we value one another. Today, people are often celebrated for being clever, fast, or powerful, but rarely for being honest. We believe that honesty should once again become the highest virtue - greater than success, sharper than intelligence, and stronger than ambition.</p>
              <p>Food is where this begins. Because food is the most intimate form of trust - we put it into our bodies, we feed it to our children, we share it with our loved ones. When food is dishonest, society becomes dishonest. When food is pure, society regains its purity.</p>
              <p>Being Honest is our attempt to make this shift—starting with fruits. We dream that every Indian home, from bustling cities to quiet villages, can bite into a fruit and feel assured: this is safe, this is true, this is life as it should be. If we can restore honesty to the food we eat every day, perhaps we can also restore honesty to the way we live every day.</p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <main className="faq">
      <h2>faqs</h2>
      <nav aria-label="Sections" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '6px 0 16px' }}>
        {sections.map((s) => (
          <a key={s.id} className="btn tiny" href={`#${s.id}`} style={{ textTransform: 'none' }}>{s.title}</a>
        ))}
      </nav>
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} style={{ margin: '12px 0' }}>
          <h3 className="muted" style={{ margin: '0 0 8px' }}>{sec.title}</h3>
          {sec.items.map((it, i) => (
            <div key={i} className={`faq-item ${open[sec.id] === i ? 'open' : ''}`}>
              <button className="faq-q" aria-expanded={open[sec.id] === i ? 'true' : 'false'} onClick={() => toggle(sec.id, i)}>
                {it.q}
                <span aria-hidden>▾</span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </section>
      ))}
      <p className="muted" style={{ marginTop: 12 }}>you have any more questions please contact us.</p>
      <div style={{ marginTop: 12 }}>
        <a className="btn ghost" href="/">Back home</a>
      </div>
    </main>
  );
}
