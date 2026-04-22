import { useState, useEffect } from "react";

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Phone mockup with fake app UI inside
const PhoneMockup = () => (
  <div style={{
    width: "220px",
    height: "440px",
    background: "#111",
    borderRadius: "30px",
    border: "6px solid #222",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35), inset 0 0 0 1px #444",
    overflow: "hidden",
    position: "relative",
    flexShrink: 0,
  }}>
    {/* Notch */}
    <div style={{
      position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
      width: "70px", height: "20px", background: "#111", borderRadius: "0 0 14px 14px", zIndex: 10
    }} />

    {/* Status bar */}
    <div style={{
      background: "#2e7d32", height: "28px", display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 14px", paddingTop: "4px"
    }}>
      <span style={{ color: "#fff", fontSize: "9px", fontWeight: 600 }}>10:09</span>
      <span style={{ color: "#fff", fontSize: "9px" }}>▶ 📶 🔋</span>
    </div>

    {/* App header */}
    <div style={{
      background: "#2e7d32", padding: "6px 12px 10px",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <span style={{ color: "#fff", fontWeight: 700, fontSize: "13px", fontFamily: "'DM Sans', sans-serif" }}>kaashtkart</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
    </div>

    {/* Search */}
    <div style={{ background: "#2e7d32", padding: "0 10px 10px" }}>
      <div style={{
        background: "#fff", borderRadius: "20px", padding: "5px 10px",
        display: "flex", alignItems: "center", gap: "6px"
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span style={{ fontSize: "9px", color: "#aaa", fontFamily: "'DM Sans', sans-serif" }}>Search for products, brands</span>
      </div>
    </div>

    {/* Weather widget */}
    <div style={{ background: "#fff", padding: "8px 10px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ background: "#fff9e6", borderRadius: "8px", padding: "4px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontSize: "14px" }}>☀️</span>
        <span style={{ fontWeight: 800, fontSize: "13px", color: "#333", fontFamily: "'DM Sans', sans-serif" }}>32°</span>
      </div>
      <div>
        <div style={{ fontSize: "10px", fontWeight: 700, color: "#222", fontFamily: "'DM Sans', sans-serif" }}>Barwani</div>
        <div style={{ fontSize: "8px", color: "#888", fontFamily: "'DM Sans', sans-serif" }}>Indore</div>
      </div>
      <div style={{ marginLeft: "auto", textAlign: "right" }}>
        <div style={{ fontSize: "8px", color: "#888", fontFamily: "'DM Sans', sans-serif" }}>Wind 11 km/h</div>
        <div style={{ fontSize: "8px", color: "#888", fontFamily: "'DM Sans', sans-serif" }}>Humidity 45%</div>
      </div>
    </div>

    {/* Category icons */}
    <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 6px", background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
      {[
        { label: "Seeds", bg: "#f5f0e8", emoji: "🌾" },
        { label: "Fertilizers", bg: "#e8f0f5", emoji: "💧" },
        { label: "Pesticides", bg: "#f0f5e8", emoji: "🧴" },
        { label: "Implements", bg: "#f5e8e8", emoji: "🚜" },
      ].map(({ label, bg, emoji }) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
          <div style={{ width: "36px", height: "36px", background: bg, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>{emoji}</div>
          <span style={{ fontSize: "7px", color: "#555", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
        </div>
      ))}
    </div>

    {/* Banner cards */}
    <div style={{ display: "flex", gap: "6px", padding: "8px 8px 4px", background: "#fff" }}>
      <div style={{
        flex: 1, background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
        borderRadius: "8px", padding: "8px", minHeight: "70px", position: "relative"
      }}>
        <div style={{ fontSize: "7.5px", fontWeight: 700, color: "#1b5e20", lineHeight: 1.3, fontFamily: "'DM Sans', sans-serif" }}>कृषि स्थलो यो यूँर को<br />अरसे यहरें यर</div>
        <div style={{ marginTop: "6px", background: "#2e7d32", borderRadius: "10px", padding: "2px 7px", display: "inline-flex", alignItems: "center", gap: "3px" }}>
          <span style={{ fontSize: "7px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>और जानें →</span>
        </div>
      </div>
      <div style={{
        flex: 1, background: "linear-gradient(135deg, #fff8e1, #ffecb3)",
        borderRadius: "8px", padding: "8px", minHeight: "70px"
      }}>
        <div style={{ fontSize: "7.5px", fontWeight: 700, color: "#e65100", lineHeight: 1.3, fontFamily: "'DM Sans', sans-serif" }}>हर बचे नाप...</div>
        <div style={{ marginTop: "6px", background: "#ff6f00", borderRadius: "10px", padding: "2px 7px", display: "inline-flex" }}>
          <span style={{ fontSize: "7px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>देखें</span>
        </div>
      </div>
    </div>

    {/* Dots */}
    <div style={{ display: "flex", justifyContent: "center", gap: "4px", padding: "4px 0", background: "#fff" }}>
      {[0,1,2,3,4].map(i => (
        <div key={i} style={{ width: i===0?"14px":"6px", height: "6px", borderRadius: "3px", background: i===0?"#2e7d32":"#ddd", transition: "width 0.3s" }} />
      ))}
    </div>

    {/* Deals bar */}
    <div style={{ background: "#fff", padding: "6px 8px" }}>
      <div style={{ background: "#FFA726", borderRadius: "6px", padding: "5px 10px", display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontSize: "14px" }}>🏷️</span>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>Deals</span>
      </div>
    </div>

    {/* Bottom nav */}
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: "#fff", borderTop: "1px solid #eee",
      display: "flex", justifyContent: "space-around", padding: "6px 0 8px"
    }}>
      {[
        { icon: "🏠", label: "Home", active: true },
        { icon: "📋", label: "Call", active: false },
        { icon: "📞", label: "Call", active: false },
        { icon: "👤", label: "Account", active: false },
      ].map(({ icon, label, active }, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <span style={{ fontSize: "14px" }}>{icon}</span>
          <span style={{ fontSize: "7px", color: active ? "#2e7d32" : "#aaa", fontWeight: active ? 700 : 400, fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          width: 100%;
          min-height: 520px;
          background: #fff;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* Big soft green blobs in background */
        .hero-root::before {
          content: '';
          position: absolute;
          top: -80px; right: -60px;
          width: 600px; height: 600px;
          background: radial-gradient(ellipse at center, rgba(56,142,60,0.13) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-root::after {
          content: '';
          position: absolute;
          bottom: -100px; left: -80px;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse at center, rgba(104,159,56,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Decorative leaf blobs */
        .leaf-blob {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 48px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          min-height: 520px;
        }

        .hero-left {
          flex: 1;
          max-width: 560px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .hero-left.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 44px;
          font-weight: 800;
          color: #111;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 16px;
          font-weight: 600;
          color: #2e7d32;
          margin-bottom: 18px;
          letter-spacing: 0.01em;
        }

        .hero-body {
          font-size: 14.5px;
          color: #555;
          line-height: 1.75;
          margin-bottom: 34px;
          max-width: 460px;
        }

        .hero-body strong {
          color: #222;
          font-weight: 700;
        }

        .hero-btns {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2e7d32;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 13px 26px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(46,125,50,0.3);
          letter-spacing: 0.01em;
        }
        .btn-download:hover {
          background: #256328;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(46,125,50,0.4);
        }

        .btn-explore {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #2e7d32;
          border: 2px solid #2e7d32;
          border-radius: 50px;
          padding: 11px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .btn-explore:hover {
          background: #f3f9f3;
          transform: translateY(-1px);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 20px;
          border-top: 1px solid #e8e8e8;
        }
        .hero-trust-text {
          font-size: 12.5px;
          color: #777;
          letter-spacing: 0.01em;
        }
        .hero-trust-dot {
          color: #bbb;
          font-size: 12px;
        }

        .hero-right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(24px) scale(0.97);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .hero-right.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Glow behind phone */
        .phone-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(46,125,50,0.18) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            padding: 40px 24px;
            text-align: center;
            align-items: center;
          }
          .hero-title { font-size: 32px; }
          .hero-btns { justify-content: center; }
          .hero-trust { justify-content: center; }
        }
      `}</style>

      <div className="hero-root">
        {/* Decorative leaf elements */}
        <svg className="leaf-blob" style={{ top: "-20px", right: "240px", opacity: 0.18 }} width="180" height="200" viewBox="0 0 180 200">
          <ellipse cx="90" cy="100" rx="80" ry="90" fill="#4CAF50" transform="rotate(-20 90 100)" />
          <ellipse cx="70" cy="80" rx="55" ry="70" fill="#66BB6A" transform="rotate(-35 70 80)" />
        </svg>
        <svg className="leaf-blob" style={{ bottom: "0px", right: "180px", opacity: 0.22 }} width="240" height="200" viewBox="0 0 240 200">
          <ellipse cx="120" cy="160" rx="100" ry="70" fill="#388E3C" transform="rotate(15 120 160)" />
          <ellipse cx="160" cy="140" rx="70" ry="55" fill="#4CAF50" transform="rotate(-5 160 140)" />
        </svg>
        <svg className="leaf-blob" style={{ bottom: "20px", left: "0px", opacity: 0.12 }} width="160" height="160" viewBox="0 0 160 160">
          <ellipse cx="80" cy="120" rx="70" ry="50" fill="#66BB6A" transform="rotate(25 80 120)" />
        </svg>

        <div className="hero-inner">
          {/* LEFT CONTENT */}
          <div className={`hero-left ${loaded ? "visible" : ""}`}>
            <h1 className="hero-title">
              Building Techno-Commercial<br />
              Expertise For Farmers
            </h1>
            <p className="hero-subtitle">
              Empowering rural India with smart agricultural solutions
            </p>
            <p className="hero-body">
              KaashtKart is an E-commerce platform to facilitate{" "}
              <strong>FPOs, SHGs, NGOs, Entrepreneur Farmers</strong> to connect
              them directly to the customers. Also farmers can buy high quality
              Farm-inputs from reputable manufacturers and producers.
            </p>

            <div className="hero-btns">
              <button className="btn-download">
                <PlayIcon />
                Download App
              </button>
              <button className="btn-explore">
                <ArrowRight />
                Explore Products
              </button>
            </div>

            <div className="hero-trust">
              <ShieldIcon />
              <span className="hero-trust-text">100% genuine products</span>
              <span className="hero-trust-dot">·</span>
              <span className="hero-trust-text">Free delivery</span>
              <span className="hero-trust-dot">·</span>
              <span className="hero-trust-text">Secure payment</span>
            </div>
          </div>

          {/* RIGHT — Phone mockup */}
          <div className={`hero-right ${loaded ? "visible" : ""}`}>
            <div className="phone-glow" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}