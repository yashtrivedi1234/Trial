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
    <section
      className="px-2 pt-1 font-[Poppins]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      aria-label="About KaashtKart"
    >
      {/* Google Font Import — tailwind.config ya index.css mein daalein */}
      {/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'); */}

      <div className="max-w-[1380px] mx-auto">

        {/* About Copy Section */}
        <div className="bg-gradient-to-br from-[#0d2224] via-[#10292a] to-[#0e1f24] text-[#dce3de] rounded-t-[22px] px-[34px] py-[26px] shadow-inner ring-1 ring-[#347960]/20 text-justify">

          <p className="text-[14.5px] leading-[1.58] font-medium text-[#d6e0db] mb-4 last:mb-0">
            KaashtKart is an E-commerce platform to facilitate FPOs, SHGs, NGOs, Entrepreneur Farmers to connect them
            directly to the customers. This is the first online marketplace exclusively customized for FPOs and other
            rural businesses. We designed an Easy to Use platform to empower the Agri producers, manufacturers and other
            sellers by enabling them to reach directly exclusive consumers, retail and wholesale customers. Our aim is
            to transform the agricultural supply chain, fostering a direct, transparent and open market connection
            between farmers and consumers.
          </p>

          <p className="text-[14.5px] leading-[1.58] font-medium text-[#d6e0db] mb-4 last:mb-0">
            <span className="inline bg-[#20a455] text-white font-bold px-1 rounded-sm">
              Farmers Producers Organisation (FPO)
            </span>{" "}
            - A collective organisation of farmers or other primary producers that aims to improve their income,
            efficiency and profitability through collective bargaining, access to resources, and value addition.
          </p>

          <p className="text-[14.5px] leading-[1.58] font-medium text-[#d6e0db] mb-4 last:mb-0">
            According to a latest report* 45000 FPOs are registered countrywide, but only 16000 compliant with
            regulatory filings. The biggest challenge before the FPOs and Entrepreneur farmers are sales and marketing
            of their products without the engagements of the traditional middlemen system.{" "}
            <span className="inline bg-[#20a455] text-white font-bold px-1 rounded-sm">
              KaashtKart is an effort to provide a dedicated Direct to Customers (D2C) online marketplace.
            </span>{" "}
            We are committed to provide a comprehensive marketplace to sell and buy various products needed for agri
            communities. At the same time, urban folks can buy online pure, authentic and healthy products which are
            not easily available. KaashtKart is a mission to empower the farming communities.
          </p>

          <p className="text-[14.5px] leading-[1.58] font-medium text-[#d6e0db] mb-0">
            KaashtKart aims to transform the agricultural supply chain by creating a transparent, direct-to-customer
            marketplace connecting farmers and consumers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-[#e6ebea] grid grid-cols-4 gap-[18px] pt-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-3 max-[600px]:pt-[14px]">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="bg-[#eceeed] rounded-[10px] min-h-[78px] flex items-center gap-[14px] px-[22px] py-[14px] ring-1 ring-[#103225]/[0.04]"
            >
              <div className="w-10 h-10 min-w-[40px] rounded-full bg-[#1d9a4c] grid place-items-center">
                {f.icon}
              </div>
              <div>
                <h3 className="m-0 text-[#1f3446] text-lg leading-[1.1] font-semibold font-[Poppins]">
                  {f.title}
                </h3>
                <p className="mt-[3px] mb-0 text-[#8a9090] text-[15px] leading-[1.1] font-medium font-[Poppins]">
                  {f.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}