import { useEffect, useMemo, useRef, useState } from "react";

const products = [
  {
    id: 1,
    title: "DOCTOR MORINGA Sweet Cookies - Jaggery Biscuit | Multi Millet",
    subtitle: "DOCTOR MORINGA Sweet Cookies",
    price: 75,
    oldPrice: null,
    weight: "100 g",
    image: createPackArt({ base: "#cf8f5a", accent: "#8c5a30", type: "cookies" }),
    showImageActions: true,
  },
  {
    id: 2,
    title: "Protein & Fiber-Rich Energy Balls | Traditional Indian Sweet",
    subtitle: "Doctor Moringa's Laddoos",
    price: 250,
    oldPrice: null,
    weight: "300 g",
    image: createPackArt({ base: "#ece7e2", accent: "#db6f3c", type: "jar" }),
  },
  {
    id: 3,
    title: "Amrit Sunflower Honey A Product By KVIC - 1 KG | 100% Pure",
    subtitle: "Amrit Sunflower Honey A Product By:KVIC",
    price: 850,
    oldPrice: null,
    weight: "1 kg",
    image: createPackArt({ base: "#f0e2b0", accent: "#c5902e", type: "honey" }),
  },
  {
    id: 4,
    title: "Shree Goraksh Bhog Ragi Dosa Mix 500 G pack",
    subtitle: "Aahar hi Aushadhi Hai!",
    price: 229,
    oldPrice: 249,
    weight: "0.5 kg",
    discountLabel: "8% OFF",
    image: createPackArt({ base: "#d8d1c5", accent: "#94adc4", type: "pouch" }),
  },
  {
    id: 5,
    title: "Village Groundnut Chikki | Handcrafted Crunchy Sweet",
    subtitle: "Farm fresh sweet bites",
    price: 140,
    oldPrice: null,
    weight: "250 g",
    image: createPackArt({ base: "#e5d1b5", accent: "#a26d3f", type: "cookies" }),
  },
  {
    id: 6,
    title: "Forest Honey with Tulsi | Natural Immunity Blend",
    subtitle: "Collected from certified forest clusters",
    price: 360,
    oldPrice: 390,
    weight: "500 g",
    image: createPackArt({ base: "#efdf9e", accent: "#9f6f20", type: "honey" }),
  },
];

export default function FeaturedProducts() {
  const sliderRef = useRef(null);
  const [viewport, setViewport] = useState(1400);
  const [canGoLeft, setCanGoLeft] = useState(false);
  const [canGoRight, setCanGoRight] = useState(true);

  useEffect(() => {
    const updateViewport = () => setViewport(window.innerWidth);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const visibleCards = useMemo(() => {
    if (viewport < 700) return 1;
    if (viewport < 1080) return 2;
    return 4;
  }, [viewport]);

  useEffect(() => {
    const element = sliderRef.current;
    if (!element) return;

    const updateArrows = () => {
      const maxScrollLeft = Math.max(0, element.scrollWidth - element.clientWidth - 1);
      setCanGoLeft(element.scrollLeft > 1);
      setCanGoRight(element.scrollLeft < maxScrollLeft);
    };

    updateArrows();
    element.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      element.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [visibleCards]);

  const handleArrowClick = (direction) => {
    const element = sliderRef.current;
    if (!element) return;

    const distance = Math.round(element.clientWidth * 0.88);
    element.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="featured-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');

        .featured-wrapper {
          --gap: 14px;
          background: #f3efea;
          padding: 24px 24px 30px;
          font-family: 'Nunito Sans', 'Segoe UI', sans-serif;
        }

        .featured-title {
          margin: 0 0 18px;
          text-align: center;
          font-size: clamp(30px, 4.6vw, 50px);
          font-weight: 900;
          letter-spacing: -0.4px;
          color: #0f1520;
          line-height: 1.05;
        }

        .featured-carousel {
          position: relative;
          max-width: 1380px;
          margin: 0 auto;
        }

        .featured-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid #23814b;
          background: rgba(255, 255, 255, 0.82);
          color: #23814b;
          display: grid;
          place-items: center;
          z-index: 3;
          cursor: pointer;
          transition: background 0.16s ease, opacity 0.16s ease;
        }

        .featured-arrow:hover:not(:disabled) {
          background: #edf8f1;
        }

        .featured-arrow:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .featured-arrow.left {
          left: -2px;
        }

        .featured-arrow.right {
          right: -2px;
        }

        .featured-track {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }

        .featured-track::-webkit-scrollbar {
          display: none;
        }

        .featured-row {
          display: flex;
          gap: var(--gap);
          align-items: stretch;
          min-height: 100%;
        }

        .featured-card {
          flex: 0 0 calc((100% - (var(--gap) * (var(--visible) - 1))) / var(--visible));
          min-width: 280px;
          border: 1px solid #cfd7df;
          border-radius: 12px;
          background: #f4f6f8;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .featured-discount {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 4;
          background: #10922f;
          color: #fff;
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
          padding: 7px 12px;
          border-radius: 12px;
        }

        .featured-image-wrap {
          position: relative;
          height: 335px;
          padding: 16px;
          background: #fff;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          display: block;
        }

        .featured-image-actions {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          background: #118645;
          border-radius: 10px;
          color: #fff;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          font-size: 22px;
          font-weight: 800;
        }

        .featured-body {
          padding: 12px 14px 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .featured-name-row {
          display: flex;
          gap: 8px;
          justify-content: space-between;
          align-items: baseline;
        }

        .featured-name {
          margin: 0;
          font-size: 35px;
          line-height: 1.2;
          color: #192434;
          font-weight: 800;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .featured-price {
          margin: 0;
          flex-shrink: 0;
          font-size: 40px;
          color: #0e1622;
          font-weight: 900;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }

        .featured-old-price {
          margin-left: 8px;
          color: #ca2d2d;
          font-size: 24px;
          font-weight: 800;
          text-decoration: line-through;
        }

        .featured-subtitle {
          margin: 6px 0 0;
          color: #7f8d9f;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .featured-dots {
          margin: 2px 0 0;
          color: #248841;
          font-size: 31px;
          line-height: 1;
        }

        .featured-rating {
          margin-top: 4px;
          font-size: 28px;
          color: #18824b;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .featured-star {
          color: #f8bc19;
        }

        .featured-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .featured-select-wrap {
          flex: 1;
          position: relative;
        }

        .featured-select {
          width: 100%;
          height: 46px;
          border: 1px solid #cad1db;
          border-radius: 10px;
          padding: 0 36px 0 12px;
          font-size: 28px;
          font-weight: 700;
          color: #1a2636;
          background: #f7f9fc;
          appearance: none;
          -webkit-appearance: none;
          outline: none;
        }

        .featured-select-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #248841;
          pointer-events: none;
          font-size: 20px;
          line-height: 1;
        }

        .featured-cart {
          width: 48px;
          height: 46px;
          border: 0;
          border-radius: 10px;
          background: #168746;
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 25px;
          cursor: pointer;
        }

        @media (max-width: 1400px) {
          .featured-card { min-width: 250px; }
          .featured-image-wrap { height: 270px; }
          .featured-name { font-size: 26px; }
          .featured-price { font-size: 34px; }
          .featured-old-price { font-size: 20px; }
          .featured-subtitle { font-size: 20px; }
          .featured-dots { font-size: 23px; }
          .featured-rating { font-size: 20px; }
          .featured-select { font-size: 20px; }
        }

        @media (max-width: 820px) {
          .featured-wrapper {
            padding: 18px 14px 24px;
          }

          .featured-arrow {
            width: 36px;
            height: 36px;
          }

          .featured-image-wrap {
            height: 220px;
          }

          .featured-name {
            font-size: 20px;
          }

          .featured-price {
            font-size: 28px;
          }

          .featured-old-price {
            font-size: 16px;
          }

          .featured-subtitle,
          .featured-rating,
          .featured-select {
            font-size: 16px;
          }

          .featured-dots {
            font-size: 20px;
          }
        }
      `}</style>

      <h2 className="featured-title">Featured Products</h2>

      <div className="featured-carousel">
        <button
          type="button"
          aria-label="Previous products"
          className="featured-arrow left"
          onClick={() => handleArrowClick("left")}
          disabled={!canGoLeft}
        >
          <ArrowLeftIcon />
        </button>

        <div className="featured-track" ref={sliderRef}>
          <div className="featured-row" style={{ "--visible": visibleCards }}>
            {products.map((product) => (
              <article className="featured-card" key={product.id}>
                {product.discountLabel ? <span className="featured-discount">{product.discountLabel}</span> : null}

                <div className="featured-image-wrap">
                  <img src={product.image} alt={product.title} className="featured-image" />

                  {product.showImageActions ? (
                    <div className="featured-image-actions" aria-hidden="true">
                      <span>❤</span>
                      <span>◉</span>
                    </div>
                  ) : null}
                </div>

                <div className="featured-body">
                  <div className="featured-name-row">
                    <h3 className="featured-name">{product.title}</h3>
                    <p className="featured-price">
                      Rs{product.price}
                      {product.oldPrice ? (
                        <span className="featured-old-price">Rs{product.oldPrice}</span>
                      ) : null}
                    </p>
                  </div>

                  <p className="featured-subtitle">{product.subtitle}</p>
                  <p className="featured-dots">..</p>

                  <p className="featured-rating">
                    <span className="featured-star">★</span>
                    <span>0.0</span>
                    <span>0 Reviews</span>
                  </p>

                  <div className="featured-footer">
                    <label className="featured-select-wrap" aria-label={`${product.title} quantity selector`}>
                      <select className="featured-select" defaultValue={product.weight}>
                        <option value={product.weight}>{product.weight}</option>
                      </select>
                      <span className="featured-select-icon">⌄</span>
                    </label>

                    <button type="button" className="featured-cart" aria-label={`Add ${product.title} to cart`}>
                      <CartIcon />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next products"
          className="featured-arrow right"
          onClick={() => handleArrowClick("right")}
          disabled={!canGoRight}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
      <path d="M1 2h3l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 6H6" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function createPackArt({ base, accent, type }) {
  const content = {
    cookies: `
      <rect x="26" y="18" width="116" height="168" rx="12" fill="#f4efe7"/>
      <rect x="32" y="22" width="104" height="20" rx="8" fill="${accent}"/>
      <circle cx="62" cy="128" r="20" fill="#b88253"/><circle cx="96" cy="124" r="18" fill="#bd8a57"/><circle cx="116" cy="154" r="17" fill="#b37a4a"/>
      <rect x="40" y="56" width="82" height="46" rx="8" fill="${base}"/>
    `,
    jar: `
      <rect x="44" y="26" width="80" height="16" rx="6" fill="#cfc8c0"/>
      <rect x="36" y="40" width="96" height="128" rx="14" fill="#e9e4df"/>
      <rect x="54" y="70" width="60" height="76" rx="8" fill="${accent}"/>
      <circle cx="84" cy="116" r="18" fill="#fff2d8" opacity="0.9"/>
    `,
    honey: `
      <ellipse cx="84" cy="24" rx="36" ry="12" fill="#c59c4d"/>
      <rect x="44" y="26" width="80" height="148" rx="24" fill="#e2b44c"/>
      <rect x="48" y="66" width="72" height="74" rx="8" fill="#fff8de"/>
      <path d="M48 62h72l-8 12H56Z" fill="${accent}"/>
      <circle cx="86" cy="144" r="20" fill="#d59a2f" opacity="0.65"/>
    `,
    pouch: `
      <path d="M40 22h88l-10 164H50Z" fill="#d5dde3"/>
      <rect x="52" y="64" width="64" height="88" rx="8" fill="#f0f4f8"/>
      <rect x="58" y="72" width="52" height="16" rx="6" fill="${accent}"/>
      <circle cx="84" cy="118" r="24" fill="#f3d998"/>
      <circle cx="84" cy="118" r="14" fill="#e2b163"/>
    `,
  };

  const body = content[type] ?? content.jar;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="168" height="200" viewBox="0 0 168 200" role="img" aria-label="product pack art">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f7f2ea"/>
          <stop offset="100%" stop-color="#e4ddd2"/>
        </linearGradient>
      </defs>
      <rect width="168" height="200" fill="url(#bg)"/>
      <rect x="14" y="12" width="140" height="176" rx="14" fill="${base}" opacity="0.16"/>
      ${body}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
