const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#ffffff" opacity="0.95" />
    <path d="M8 12.2l2.6 2.6L16 9.4" stroke="#1f9a49" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TruckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7.5h10v7H3z" fill="#ffffff" />
    <path d="M13 10h3.6l2.4 2.5V14h-6z" fill="#ffffff" />
    <circle cx="8" cy="17" r="1.8" fill="#ffffff" />
    <circle cx="17" cy="17" r="1.8" fill="#ffffff" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="10" width="14" height="10" rx="2" fill="#ffffff" />
    <path d="M8.2 10V7.7a3.8 3.8 0 117.6 0V10" stroke="#1f9a49" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const SupportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12a7 7 0 1114 0v4a2 2 0 01-2 2h-2v-5h4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 13h4v5H7a2 2 0 01-2-2v-3z" fill="#ffffff" />
    <circle cx="12" cy="18" r="1.5" fill="#ffffff" />
  </svg>
);

const FEATURES = [
  { title: "100% Original Products", subtitle: "Trusted brands only", icon: <CheckIcon /> },
  { title: "Free Delivery", subtitle: "On eligible orders", icon: <TruckIcon /> },
  { title: "Secure Payments", subtitle: "Encrypted checkout", icon: <LockIcon /> },
  { title: "Expert Support", subtitle: "We're here to help", icon: <SupportIcon /> },
];

export default function KaashtKartAbout() {
  return (
    <section style={{  padding: "4px 8px 0", fontFamily: "'Poppins', sans-serif" }} aria-label="About KaashtKart">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .kk-about-copy {
          background: linear-gradient(110deg, #0d2224 0%, #10292a 42%, #0e1f24 100%);
          color: #dce3de;
          border-radius: 22px 22px 0 0;
          padding: 26px 34px 24px;
          box-shadow: inset 0 0 0 1px rgba(52,121,96,0.2);
          text-align: justify;
        }

        .kk-about-copy p {
          margin: 0 0 16px;
          font-size: 14.5px;
          line-height: 1.58;
          font-weight: 500;
          color: #d6e0db;
        }

        .kk-about-copy p:last-child { margin-bottom: 0; }

        .kk-highlight {
          display: inline;
          background: #20a455;
          color: #ffffff;
          font-weight: 700;
          padding: 0 4px;
          border-radius: 2px;
        }

        .kk-features {
          background: #e6ebea;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          padding: 20px 0 0;
        }

        .kk-feature {
          background: #eceeed;
          border-radius: 10px;
          min-height: 78px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 22px;
          box-shadow: inset 0 0 0 1px rgba(16,50,37,0.04);
        }

        .kk-feature-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          background: #1d9a4c;
          display: grid;
          place-items: center;
        }

        .kk-feature-title {
          margin: 0;
          color: #1f3446;
          font-size: 18px;
          line-height: 1.1;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }

        .kk-feature-subtitle {
          margin: 3px 0 0;
          color: #8a9090;
          font-size: 15px;
          line-height: 1.1;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 980px) {
          .kk-features { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 600px) {
          .kk-features { grid-template-columns: 1fr; gap: 12px; padding-top: 14px; }
          .kk-about-copy { padding: 18px 16px; }
          .kk-about-copy p { font-size: 14.5px; line-height: 1.68; }
        }
      `}</style>

      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div className="kk-about-copy">
          <p>
            KaashtKart is an E-commerce platform to facilitate FPOs, SHGs, NGOs, Entrepreneur Farmers to connect them directly to the customers. This is the first online marketplace exclusively customized for FPOs and other rural businesses. We designed an Easy to Use platform to empower the Agri producers, manufacturers and other sellers by enabling them to reach directly exclusive consumers, retail and wholesale customers. Our aim is to transform the agricultural supply chain, fostering a direct, transparent and open market connection between farmers and consumers.
          </p>
          <p>
            <span className="kk-highlight">Farmers Producers Organisation (FPO)</span>{" "}- A collective organisation of farmers or other primary producers that aims to improve their income, efficiency and profitability through collective bargaining, access to resources, and value addition.
          </p>
          <p>
            According to a latest report* 45000 FPOs are registered countrywide, but only 16000 compliant with regulatory filings. The biggest challenge before the FPOs and Entrepreneur farmers are sales and marketing of their products without the engagements of the traditional middlemen system.{" "}
            <span className="kk-highlight">KaashtKart is an effort to provide a dedicated Direct to Customers (D2C) online marketplace.</span>{" "}
            We are committed to provide a comprehensive marketplace to sell and buy various products needed for agri communities. At the same time, urban folks can buy online pure, authentic and healthy products which are not easily available. KaashtKart is a mission to empower the farming communities.
          </p>
          <p>
            KaashtKart aims to transform the agricultural supply chain by creating a transparent, direct-to-customer marketplace connecting farmers and consumers.
          </p>
        </div>

        <div className="kk-features">
          {FEATURES.map((f) => (
            <article className="kk-feature" key={f.title}>
              <div className="kk-feature-icon">{f.icon}</div>
              <div>
                <h3 className="kk-feature-title">{f.title}</h3>
                <p className="kk-feature-subtitle">{f.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}