import { useState } from "react";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const WishlistIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// KaashtkKart logo SVG recreation
const Logo = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
    {/* Leaf + basket icon placeholder */}
    <div style={{ display: "flex", alignItems: "flex-end", gap: "2px" }}>
      {/* Left leaf cluster */}
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
        <ellipse cx="10" cy="18" rx="9" ry="12" fill="#4CAF50" transform="rotate(-15 10 18)" />
        <ellipse cx="8" cy="14" rx="6" ry="9" fill="#66BB6A" transform="rotate(-25 8 14)" />
        <ellipse cx="14" cy="12" rx="5" ry="8" fill="#388E3C" transform="rotate(10 14 12)" />
        {/* stems */}
        <path d="M10 28 Q10 22 12 18" stroke="#2e7d32" strokeWidth="1.5" fill="none" />
      </svg>
      {/* Right basket icon */}
      <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
        <rect x="3" y="10" width="20" height="14" rx="2" fill="#2e7d32" />
        <path d="M7 10 L13 3 L19 10" stroke="#2e7d32" strokeWidth="2" fill="none" />
        {/* grid lines */}
        <line x1="3" y1="16" x2="23" y2="16" stroke="#fff" strokeWidth="1" opacity="0.5" />
        <line x1="13" y1="10" x2="13" y2="24" stroke="#fff" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
    {/* Brand name */}
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "15px",
      color: "#2e7d32",
      letterSpacing: "-0.3px",
      marginTop: "1px"
    }}>KaashtkKart</div>
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "7.5px",
      color: "#4CAF50",
      letterSpacing: "0.3px",
      fontStyle: "italic",
      marginTop: "1px"
    }}>Fresh Fields...Digital Feast</div>
  </div>
);

const categories = ["Ayurveda", "Cocoa", "Edible Oils", "Jaggery", "Raw Honey", "Dry Fruits", "Fresh Fruits"];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [wishlistCount] = useState(0);
  const [cartCount] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-root {
          background: #ffffff;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          border-bottom: 1px solid #e8e8e8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        /* ── TOP ROW ── */
        .nav-top {
          display: flex;
          align-items: center;
          padding: 10px 24px;
          gap: 16px;
          min-height: 64px;
        }

        .nav-logo {
          flex-shrink: 0;
          cursor: pointer;
          text-decoration: none;
        }

        /* Search */
        .search-wrap {
          flex: 1;
          max-width: 520px;
          display: flex;
          align-items: center;
          border: 1.5px solid #d0d0d0;
          border-radius: 6px;
          overflow: hidden;
          height: 40px;
          transition: border-color 0.2s;
        }
        .search-wrap:focus-within {
          border-color: #2e7d32;
        }
        .search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          color: #333;
          background: transparent;
          height: 100%;
        }
        .search-input::placeholder { color: #aaa; }
        .search-btn {
          background: #2e7d32;
          border: none;
          color: #fff;
          width: 42px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .search-btn:hover { background: #256328; }

        /* Spacer */
        .nav-spacer { flex: 1; }

        /* Right actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #222;
          padding: 6px 10px;
          border-radius: 6px;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
          position: relative;
        }
        .nav-btn:hover { background: #f3f9f3; color: #2e7d32; }

        .nav-btn-outlined {
          border: 1.5px solid #d8d8d8;
          padding: 5px 12px 5px 10px;
        }
        .nav-btn-outlined:hover { border-color: #2e7d32; }

        .badge {
          position: absolute;
          top: 2px;
          left: 22px;
          background: #2e7d32;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #fff;
        }

        /* ── BOTTOM ROW ── */
        .nav-bottom {
          display: flex;
          align-items: center;
          padding: 0 24px;
          height: 42px;
          gap: 0;
          border-top: 1px solid #f0f0f0;
        }

        /* All Categories dropdown */
        .cat-dropdown-wrap {
          position: relative;
          flex-shrink: 0;
          margin-right: 24px;
        }
        .cat-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #2e7d32;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 0 14px;
          height: 34px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .cat-btn:hover { background: #256328; }
        .cat-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          min-width: 200px;
          z-index: 100;
          padding: 6px 0;
        }
        .cat-menu-item {
          padding: 9px 18px;
          font-size: 13.5px;
          color: #333;
          cursor: pointer;
          transition: background 0.12s, color 0.12s;
        }
        .cat-menu-item:hover { background: #f3f9f3; color: #2e7d32; }

        /* Nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
          flex: 1;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .nav-links::-webkit-scrollbar { display: none; }

        .nav-link {
          padding: 0 16px;
          height: 42px;
          display: flex;
          align-items: center;
          font-size: 13.5px;
          font-weight: 500;
          color: #333;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.15s, background 0.15s;
          border-radius: 4px;
          text-decoration: none;
        }
        .nav-link:hover { color: #2e7d32; background: #f3f9f3; }
      `}</style>

      <div className="nav-root">
        {/* TOP ROW */}
        <div className="nav-top">
          {/* Logo */}
          <a className="nav-logo" href="#">
            <Logo />
          </a>

          {/* Search bar */}
          <div className="search-wrap">
            <input
              className="search-input"
              type="text"
              placeholder="Search for products, categories or brands"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="search-btn" aria-label="Search">
              <SearchIcon />
            </button>
          </div>

          <div className="nav-spacer" />

          {/* Right actions */}
          <div className="nav-actions">
            {/* Login */}
            <button className="nav-btn">
              <UserIcon />
              Login
            </button>

            {/* Wishlist */}
            <button className="nav-btn nav-btn-outlined">
              <span style={{ position: "relative", display: "inline-flex" }}>
                <WishlistIcon />
                <span className="badge">{wishlistCount}</span>
              </span>
              Wishlist
            </button>

            {/* Cart */}
            <button className="nav-btn nav-btn-outlined">
              <span style={{ position: "relative", display: "inline-flex" }}>
                <CartIcon />
                <span className="badge">{cartCount}</span>
              </span>
              Cart
            </button>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="nav-bottom">
          {/* All Categories */}
          <div className="cat-dropdown-wrap">
            <button className="cat-btn" onClick={() => setCatOpen(o => !o)}>
              <HamburgerIcon />
              All Categories
              <ChevronDown />
            </button>
            {catOpen && (
              <div className="cat-menu">
                {categories.map(c => (
                  <div className="cat-menu-item" key={c} onClick={() => setCatOpen(false)}>{c}</div>
                ))}
              </div>
            )}
          </div>

          {/* Nav links */}
          <nav className="nav-links">
            {categories.map(cat => (
              <a className="nav-link" key={cat} href="#">{cat}</a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}