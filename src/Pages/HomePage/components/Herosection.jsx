import { Play, ShieldCheck } from "lucide-react";
import BannerBg from "@/assets/banner.png"; // background banner image
import HeroPhone from "@/assets/HeroPhone.png"; // phone mockup

const GREEN = "#169c4d";
const TEXT_DARK = "#1d2430";
const TEXT_BODY = "#3d4956";

function HeroBanner() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight: 575,
        backgroundImage: `url(${BannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft white wash over center area for readability like reference */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 43% 38%, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.76) 52%, rgba(255,255,255,0.2) 85%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto flex items-center justify-between"
        style={{
          maxWidth: 1310,
          minHeight: 575,
          paddingLeft: 44,
          paddingRight: 30,
        }}
      >
        <div style={{ maxWidth: 640, marginTop: -10 }}>
          <h1
            className="font-black"
            style={{
              fontSize: 44,
              lineHeight: 1.1,
              color: TEXT_DARK,
              letterSpacing: "-0.6px",
              marginBottom: 14,
            }}
          >
            Building Techno-Commercial
            <br />
            Expertise For Farmers
          </h1>

          <p className="font-semibold" style={{ color: GREEN, fontSize: 20, marginBottom: 14 }}>
            Empowering rural India with smart agricultural solutions
          </p>

          <p
            style={{
              color: TEXT_BODY,
              fontSize: 16,
              lineHeight: 1.45,
              marginBottom: 24,
              maxWidth: 600,
            }}
          >
            KaashtKart is an E-commerce platform to facilitate{" "}
            <strong style={{ color: TEXT_DARK }}>
              FPOs, SHGs, NGOs, Entrepreneur Farmers
            </strong>{" "}
            to connect them directly to the customers. Also farmers can buy high
            quality Farm-inputs from reputable manufacturers and producers.
          </p>

          <div className="flex items-center" style={{ gap: 16, marginBottom: 20 }}>
            <button
              style={{ backgroundColor: GREEN }}
              className="text-white font-semibold flex items-center justify-center transition-colors"
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#108640")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = GREEN)}
              type="button"
              aria-label="Download App"
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 24,
                  padding: "10px 19px",
                  fontSize: 17,
                  lineHeight: 1,
                }}
              >
                <Play size={14} fill="currentColor" strokeWidth={2.2} />
                Download App
              </span>
            </button>

            <button
              className="font-semibold transition-colors"
              style={{
                color: GREEN,
                border: `2px solid ${GREEN}`,
                borderRadius: 24,
                padding: "8px 22px",
                fontSize: 17,
                lineHeight: 1,
                backgroundColor: "transparent",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(22,156,77,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              type="button"
              aria-label="Explore Products"
            >
              <span className="inline-flex items-center" style={{ gap: 7 }}>
                <span style={{ fontSize: 14 }}>→</span>
                Explore Products
              </span>
            </button>
          </div>

          <div style={{ borderTop: "1px solid rgba(85, 122, 97, 0.26)", maxWidth: 855, paddingTop: 9 }}>
            <p className="flex items-center" style={{ gap: 8, color: "#485764", fontSize: 13, margin: 0 }}>
              <ShieldCheck size={14} color={GREEN} strokeWidth={2} />
              <span>100% genuine products · Free delivery · Secure payment</span>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center" style={{ width: 320, marginRight: 18, marginTop: 8 }}>
          <img
            src={HeroPhone}
            alt="KaashtKart app preview"
            className="h-auto object-contain"
            style={{ width: 254, filter: "drop-shadow(0 14px 18px rgba(0,0,0,0.45))" }}
          />
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="relative z-10 block lg:hidden px-4 py-10">
        <h1 className="font-black text-[34px] leading-[1.12] text-[#1d2430] mb-3">
          Building Techno-Commercial
          <br />
          Expertise For Farmers
        </h1>
        <p className="font-semibold text-[22px] text-[#169c4d] mb-3">
          Empowering rural India with smart agricultural solutions
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;