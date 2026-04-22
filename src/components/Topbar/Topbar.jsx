import { useState, useEffect, useRef } from "react";

const marqueeItems = [
  "Free Delivery on Orders above ₹2999",
  "Free Delivery across all India",
  "PAN India Deliveries Available",
  "Get 10% off on Orders above ₹899",
];

export default function TopBar() {
  const [language, setLanguage] = useState("English");
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const speed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      setOffset((prev) => {
        const half = track.scrollWidth / 2;
        return prev >= half ? 0 : prev + speed;
      });
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const allItems = [...marqueeItems, ...marqueeItems]; // duplicate for seamless loop

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .topbar {
          background-color: #2e7d32;
          height: 36px;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          position: relative;
        }

        .marquee-wrapper {
          flex: 1;
          overflow: hidden;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
        }

        /* Left and right fade edges */
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 40px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #2e7d32, transparent);
        }
        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #2e7d32, transparent);
        }

        .marquee-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 0 18px;
        }

        .marquee-dot {
          width: 5px;
          height: 5px;
          background-color: #ffffff;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 10px 0 0;
          flex-shrink: 0;
        }

        .btn-action {
          background-color: transparent;
          border: 1.5px solid #ffffff;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 4px;
          cursor: pointer;
          height: 26px;
          display: inline-flex;
          align-items: center;
          transition: background 0.15s ease, color 0.15s ease;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .btn-action:hover {
          background-color: rgba(255,255,255,0.15);
        }

        .select-lang {
          background-color: transparent;
          border: 1.5px solid #ffffff;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 6px 4px 10px;
          border-radius: 4px;
          cursor: pointer;
          height: 26px;
          display: inline-flex;
          align-items: center;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23fff' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 6px center;
          padding-right: 22px;
          letter-spacing: 0.01em;
          transition: background-color 0.15s ease;
        }

        .select-lang:hover {
          background-color: rgba(255,255,255,0.15);
        }

        .select-lang option {
          background-color: #2e7d32;
          color: #ffffff;
        }
      `}</style>

      <div className="topbar">
        {/* Scrolling marquee */}
        <div className="marquee-wrapper">
          <div
            ref={trackRef}
            className="marquee-track"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {allItems.map((text, i) => (
              <span className="marquee-item" key={i}>
                {i !== 0 && <span className="marquee-dot" />}
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="topbar-actions">
          <button className="btn-action">Farm Input</button>
          <button className="btn-action">Farm Output</button>
          <select
            className="select-lang"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Kannada</option>
            <option>Marathi</option>
            <option>Bengali</option>
          </select>
        </div>
      </div>
    </>
  );
}