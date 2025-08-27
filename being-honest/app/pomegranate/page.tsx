import Image from "next/image";
import ProductGallery from "../components/ProductGallery";
import QuantitySelect from "../components/QuantitySelect";

export default function PomegranatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pomegranate (Bhagwa)",
    brand: { "@type": "Brand", name: "being honest" },
    description:
      "Naturally ripened Bhagwa pomegranates with deep colour and balanced sweetness. No artificial ripening. No added colour or sweetness. No shine or wax.",
    sku: "POME-BHAGWA",
    weight: "≥250 g per piece",
    image: [
      "/assets/images/pomegranate/pexels-julia-volk-5272973.jpg",
      "/assets/images/website/fatemeh-zakeri-lkflaFuiXII-unsplash.jpg"
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Product header */}
      <section className="product-v2" aria-label="Pomegranate">
        <div className="product-wrap">
          <nav className="crumbs" aria-label="Breadcrumbs">
            <a href="/">Home</a>
            <span aria-hidden>›</span>
            <strong>Pomegranate</strong>
          </nav>

          <div className="product-grid-2">
            {/* Interactive Gallery */}
            <ProductGallery
              images={[
                "/assets/images/pomegranate/pexels-julia-volk-5272973.jpg",
                "/assets/images/pomegranate/mockup-graphics-XiWQbLEhFyo-unsplash.jpg",
                "/assets/images/pomegranate/pexels-aditya-bhatia-264152318-18142134.jpg",
                "/assets/images/pomegranate/pexels-roman-odintsov-5150206.jpg",
              ]}
              altMain="Bhagwa pomegranate"
            />

            {/* Buy card */}
            <aside className="buy sticky">
              <div className="kicker">Pomegranate</div>
              <div className="specs specs--top">
                <div>
                  <div className="spec-label">Variety</div>
                  <div className="spec-value">Bhagwa</div>
                </div>
                <div>
                  <div className="spec-label">Place of Origin</div>
                  <div className="spec-value">Solapur, Maharashtra, India</div>
                </div>
              </div>
              <QuantitySelect />
              <p className="muted">
                Pop, crunch, and savour the ruby-rich experience with Pomegranate – the original superfruit that sprinkles a bit of ruby magic into your day. Each aril is a burst of sweet and tart perfection, packed with antioxidants. Nature's edible rubies are ready to add a touch of guilt-free delight to your snacking moments.
              </p>
              <div className="chips">
                <span className="chip">High in fiber</span>
                <span className="chip">Anti-inflammatory</span>
                <span className="chip">Rich in antioxidants</span>
              </div>
              <p className="product-note">Weight: Each piece weighs 250+ gms.</p>

              <div className="cta-row">
                <a
                  className="btn primary"
                  href="https://wa.me/919966399XXX?text=I'd%20like%20to%20pre-order%20pomegranates"
                  target="_blank"
                  rel="noopener"
                >
                  Pre-order
                </a>
                <a className="btn ghost" href="/#stores">Stores</a>
              </div>

              {/* Removed duplicate specs block */}

              <details className="accordion" id="more-info">
                <summary>About this fruit</summary>
                <div className="acc-body">
                  Bhagwa pomegranates thrive in warm, dry climates. We pick when the peel turns a deep crimson and the arils are full and bright.
                </div>
              </details>
              <details className="accordion">
                <summary>Care &amp; storage</summary>
                <div className="acc-body">
                  Keep in a cool, dry place for 3–4 days, or refrigerate to extend freshness. Wash before cutting.
                </div>
              </details>
              <details className="accordion">
                <summary>How to enjoy</summary>
                <div className="acc-body">
                  Tap the shell to loosen, cut a shallow cross, and open in a bowl of water — the arils sink, the pith floats.
                </div>
              </details>
            </aside>
          </div>
        </div>
      </section>

      {/* Standards inline (one line) */}
      <section className="std-inline" aria-label="Our standard">
        {/* Desktop/static */}
        <div className="std-inline-static">
          <div className="std-inline-wrap">
            <span>NO ARTIFICIAL RIPENING</span>
            <span>NO ADDED COLOUR &amp; SWEETNESS</span>
            <span>NO SHINE &amp; WAX</span>
          </div>
        </div>
        {/* Mobile/marquee */}
        <div className="std-inline-marquee">
          <div className="std-inline-inner">
            <div className="std-inline-wrap">
              <span>NO ARTIFICIAL RIPENING</span>
              <span>NO ADDED COLOUR &amp; SWEETNESS</span>
              <span>NO SHINE &amp; WAX</span>
            </div>
            <div className="std-inline-wrap">
              <span>NO ARTIFICIAL RIPENING</span>
              <span>NO ADDED COLOUR &amp; SWEETNESS</span>
              <span>NO SHINE &amp; WAX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Farm reference */}
      <section className="farm-ref" aria-label="Farm reference">
        <div className="farm-ref-wrap">
          <div className="farm-blurb">
            <h3>See the farm behind this creation</h3>
            <p className="muted">Farm code 041496 — trace the orchard behind this lot.</p>
          </div>
          <div className="farm-actions">
            <a className="btn ghost" href="/farms/041496">Open farm 041496</a>
            <a className="btn" href="/farm-code">Enter another code</a>
          </div>
        </div>
      </section>
    </>
  );
}
