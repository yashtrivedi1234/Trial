import { useState, useRef } from "react";

const categories = [
  {
    name: "Handicrafts",
    items: 1,
    bg: "#FFE4E4",
    emoji: "🧺",
    img: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Rice",
    items: 0,
    bg: "#FFF3E0",
    emoji: "🍚",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Mushrooms",
    items: 0,
    bg: "#FCE4EC",
    emoji: "🍄",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Ayurveda",
    items: 10,
    bg: "#E8F5E9",
    emoji: "🌿",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Millets",
    items: 6,
    bg: "#EDE7F6",
    emoji: "🌾",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Teas",
    items: 2,
    bg: "#E8EAF6",
    emoji: "🍵",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Spices",
    items: 8,
    bg: "#FFF8E1",
    emoji: "🌶️",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&h=120&fit=crop&crop=center",
  },
  {
    name: "Honey",
    items: 4,
    bg: "#FFF3E0",
    emoji: "🍯",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&h=120&fit=crop&crop=center",
  },
];

const VISIBLE = 6;
const CARD_W = 185;
const GAP = 14;

export default function CategoryCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = categories.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div
      style={{
        background: "#f4f6f8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', 'Segoe UI', sans-serif",
        padding: "40px 20px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        .cat-card {
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          cursor: pointer;
        }
        .cat-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 10px 32px rgba(0,0,0,0.13) !important;
        }
        .nav-btn {
          transition: background 0.15s, box-shadow 0.15s, transform 0.15s;
        }
        .nav-btn:hover {
          background: #e0e0e0 !important;
          transform: scale(1.08);
        }
        .nav-btn:active {
          transform: scale(0.96);
        }
        .carousel-track {
          transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div style={{ width: "100%", maxWidth: 1280 }}>
        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            fontSize: 32,
            fontWeight: 900,
            color: "#1a1a1a",
            marginBottom: 32,
            lineHeight: 1.3,
            letterSpacing: "-0.3px",
          }}
        >
          Fresh · Pure · Authentic ·<br />Direct From Farmers
        </h1>

        {/* Carousel Container */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            border: "1.5px solid #e8e8e8",
            padding: "22px 20px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
          }}
        >
          {/* Left Button */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="nav-btn"
            style={{
              flexShrink: 0,
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1.5px solid #d8d8d8",
              background: index === 0 ? "#f5f5f5" : "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.45 : 1,
              outline: "none",
              zIndex: 2,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Track Wrapper */}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <div
              className="carousel-track"
              style={{
                display: "flex",
                gap: GAP,
                transform: `translateX(-${index * (CARD_W + GAP)}px)`,
              }}
            >
              {categories.map((cat, i) => (
                <CategoryCard key={i} cat={cat} />
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="nav-btn"
            style={{
              flexShrink: 0,
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1.5px solid #d8d8d8",
              background: index >= maxIndex ? "#f5f5f5" : "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: index >= maxIndex ? "not-allowed" : "pointer",
              opacity: index >= maxIndex ? 0.45 : 1,
              outline: "none",
              zIndex: 2,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ cat }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="cat-card"
      style={{
        minWidth: 185,
        maxWidth: 185,
        borderRadius: 16,
        background: cat.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px 12px 14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        userSelect: "none",
      }}
    >
      {/* Image circle */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          overflow: "hidden",
          background: "rgba(255,255,255,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        {!imgError ? (
          <img
            src={cat.img}
            alt={cat.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <span style={{ fontSize: 42 }}>{cat.emoji}</span>
        )}
      </div>

      {/* Name */}
      <p
        style={{
          margin: "0 0 4px",
          fontSize: 14.5,
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          letterSpacing: "0.1px",
        }}
      >
        {cat.name}
      </p>

      {/* Item count */}
      <p
        style={{
          margin: 0,
          fontSize: 12.5,
          fontWeight: 700,
          color: "#4CAF50",
          textAlign: "center",
        }}
      >
        {cat.items} items
      </p>
    </div>
  );
}