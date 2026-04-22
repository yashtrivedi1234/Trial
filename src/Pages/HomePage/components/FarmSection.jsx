import { useState } from "react";

/* ─── Category data ──────────────────────────────────────────────────── */
const categories = [
  { name: "Handicrafts", items: 1,  bg: "#FFECEC", seed: 10 },
  { name: "Rice",        items: 0,  bg: "#FFF4E5", seed: 20 },
  { name: "Mushrooms",   items: 0,  bg: "#FDEAF0", seed: 30 },
  { name: "Ayurveda",    items: 10, bg: "#E9F6EC", seed: 40 },
  { name: "Millets",     items: 6,  bg: "#EEE8FB", seed: 50 },
  { name: "Teas",        items: 2,  bg: "#EAF0FB", seed: 60 },
  { name: "Spices",      items: 8,  bg: "#FFF9E5", seed: 70 },
  { name: "Honey",       items: 4,  bg: "#FFF3DC", seed: 80 },
];

const dummyImg = (seed, w = 120, h = 120) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const VISIBLE = 6;
const CARD_W  = 138;
const GAP     = 10;

/* ─── Root ───────────────────────────────────────────────────────────── */
export default function FarmSection() {
  const [idx, setIdx] = useState(0);
  const maxIdx = categories.length - VISIBLE;

  return (
    <div style={{
      background: "#EEF0F3",
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      fontFamily: "'Nunito', sans-serif",
      padding: "40px 24px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .c-card { transition: transform .17s ease, box-shadow .17s ease; cursor: pointer; }
        .c-card:hover { transform: translateY(-4px) scale(1.025);
          box-shadow: 0 10px 28px rgba(0,0,0,.13) !important; }

        .arr-btn { transition: background .14s, transform .14s; }
        .arr-btn:hover:not(:disabled) { background: #e2e2e2 !important; transform: scale(1.1); }
        .arr-btn:active:not(:disabled) { transform: scale(.94); }

        .track { transition: transform .42s cubic-bezier(.4,0,.2,1); }

        .cta-btn { transition: background .15s, transform .15s, box-shadow .15s; }
        .cta-btn:hover { background: #276629 !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(39,102,41,.45) !important; }
        .cta-btn:active { transform: translateY(0); }
      `}</style>

      <div style={{ width: "100%", maxWidth: 1380 }}>

        {/* ── Heading ── */}
        <h1 style={{
          textAlign: "center",
          fontSize: 27,
          fontWeight: 900,
          color: "#111",
          margin: "0 0 24px",
          lineHeight: 1.35,
          letterSpacing: "-.3px",
        }}>
          Fresh · Pure · Authentic ·<br />Direct From Farmers
        </h1>

        {/* ── Carousel ── */}
        <div style={{
          background: "#fff",
          borderRadius: 18,
          border: "1.5px solid #E2E5E9",
          padding: "16px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 18,
          boxShadow: "0 2px 14px rgba(0,0,0,.05)",
        }}>
          <ArrBtn dir="left"  disabled={idx === 0}      onClick={() => setIdx(i => Math.max(0, i - 1))} />

          <div style={{ flex: 1, overflow: "hidden" }}>
            <div className="track" style={{
              display: "flex",
              gap: GAP,
              transform: `translateX(-${idx * (CARD_W + GAP)}px)`,
            }}>
              {categories.map((c, i) => <CatCard key={i} cat={c} />)}
            </div>
          </div>

          <ArrBtn dir="right" disabled={idx >= maxIdx} onClick={() => setIdx(i => Math.min(maxIdx, i + 1))} />
        </div>

        {/* ── Banner Row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <BannerCard
            badge="Farm Fresh Offer"
            title={<>Fresh Fruits,<br />Direct From Farmers</>}
            desc="Direct from the farm to your home — no middleman involved."
            btnLabel="Shop Fresh Now"
            imgSeed={101}
          />
          <BannerCard
            badge="Season's Special"
            title={<>Golden Mangoes,<br />Fresh From the Farm</>}
            desc="Naturally sweet, juicy, and handpicked for you."
            btnLabel="Shop Mangoes Now"
            imgSeed={102}
          />
        </div>

      </div>
    </div>
  );
}

/* ─── Arrow button ─────────────────────────────────────────────────── */
function ArrBtn({ dir, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled} className="arr-btn" style={{
      flexShrink: 0,
      width: 34, height: 34,
      borderRadius: "50%",
      border: "1.5px solid #D0D4D8",
      background: "#F6F6F6",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      outline: "none",
      padding: 0,
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
        stroke="#555" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left"
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

/* ─── Category card ────────────────────────────────────────────────── */
function CatCard({ cat }) {
  return (
    <div className="c-card" style={{
      minWidth: CARD_W, maxWidth: CARD_W,
      borderRadius: 14,
      background: cat.bg,
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "14px 8px 12px",
      boxShadow: "0 2px 6px rgba(0,0,0,.05)",
      userSelect: "none",
    }}>
      {/* circular dummy image */}
      <div style={{
        width: 78, height: 78,
        borderRadius: "50%",
        overflow: "hidden",
        background: "rgba(255,255,255,.55)",
        flexShrink: 0,
        marginBottom: 10,
        boxShadow: "0 1px 8px rgba(0,0,0,.09)",
      }}>
        <img
          src={dummyImg(cat.seed)}
          alt={cat.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <p style={{
        margin: "0 0 3px", fontSize: 13, fontWeight: 800,
        color: "#1a1a1a", textAlign: "center",
      }}>
        {cat.name}
      </p>
      <p style={{ margin: 0, fontSize: 11.5, fontWeight: 700, color: "#43A047" }}>
        {cat.items} Items
      </p>
    </div>
  );
}

/* ─── Banner card ──────────────────────────────────────────────────── */
function BannerCard({ badge, title, desc, btnLabel, imgSeed }) {
  return (
    <div style={{
      borderRadius: 18,
      background: "linear-gradient(128deg, #cee8ae 0%, #b9d98b 50%, #a7cc6c 100%)",
      overflow: "hidden",
      display: "flex",
      alignItems: "stretch",
      minHeight: 215,
      position: "relative",
    }}>
      {/* Left — text */}
      <div style={{
        flex: 1,
        padding: "22px 0 22px 22px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        zIndex: 1,
      }}>
        {/* Badge pill */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          background: "#3a7d3c", color: "#fff",
          fontSize: 11, fontWeight: 800,
          borderRadius: 20, padding: "4px 11px",
          marginBottom: 12, alignSelf: "flex-start",
          letterSpacing: ".15px",
        }}>
          🌿 {badge}
        </span>

        <h2 style={{
          margin: "0 0 8px",
          fontSize: 19.5, fontWeight: 900,
          color: "#162e16", lineHeight: 1.3,
          letterSpacing: "-.2px",
        }}>
          {title}
        </h2>

        <p style={{
          margin: "0 0 18px",
          fontSize: 12.5, color: "#2d4a2d",
          lineHeight: 1.55, fontWeight: 500,
          maxWidth: 190,
        }}>
          {desc}
        </p>

        <button className="cta-btn" style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "#3a7d3c", color: "#fff",
          border: "none", borderRadius: 8,
          padding: "9px 16px",
          fontSize: 12.5, fontWeight: 800,
          cursor: "pointer", outline: "none",
          alignSelf: "flex-start",
          boxShadow: "0 4px 14px rgba(58,125,60,.38)",
          letterSpacing: ".1px",
        }}>
          🛒 {btnLabel}
        </button>
      </div>

      {/* Right — dummy image */}
      <div style={{
        width: 205, flexShrink: 0,
        position: "relative", overflow: "hidden",
      }}>
        <img
          src={dummyImg(imgSeed, 205, 215)}
          alt={badge}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* fade so image blends into green */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #b9d98b 0%, transparent 40%)",
          pointerEvents: "none",
        }} />
      </div>
    </div>
  );
}