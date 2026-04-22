export default function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          background: #2e7d32;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0 16px;
        }

        .site-footer span {
          color: #fff;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          font-family: 'DM Sans', sans-serif;
          text-align: center;
        }
      `}</style>

      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <text x="14" y="18" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700" fontFamily="sans-serif">UP</text>
      </svg>
      <span>Uttar Pradesh Council of Agricultural Research (UPCAR)</span>
    </footer>
  );
}
