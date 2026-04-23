import { Apple, Briefcase, Camera, Flag, MessageCircle, Play, PlayCircle, Send } from "lucide-react";

const usefulLinks1 = ["About Us", "Contact Us", "Blogs", "Events", "Careers", "Support Center"];
const usefulLinks2 = ["Privacy Policy", "Terms & Conditions", "Cancellation & Returns", "Refund Policy", "Track Order", "Shipping"];
const footerShopCategories1 = ["Handicrafts", "Rice", "Mushrooms", "Ayurveda", "Millets", "Teas", "Pickles"];
const footerShopCategories2 = ["Cocoa", "Spices", "Edible Oils", "Vinegar/ Cider", "Jaggery", "Raw Honey", "Dry Fruits", "Fresh Fruits"];

const socialIcons = [
  { label: "Facebook", icon: Flag },
  { label: "Instagram", icon: Camera },
  { label: "YouTube", icon: PlayCircle },
  { label: "Community", icon: MessageCircle },
  { label: "LinkedIn", icon: Briefcase },
  { label: "X", icon: Send },
];

const ChevronRightSmallIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" fill="white" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Footer() {
  const AppStoreIcon = Apple;
  const GooglePlayIcon = Play;

  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">About KaashtKart</h4>
            <p className="text-xs leading-relaxed">KaashtKart is a farmer-to-customer e-commerce platform that connects farmers directly with consumers. It ensures fresh produce, fair pricing, and complete transparency without engagement of middlemen.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Useful Links</h4>
            <div className="grid grid-cols-2 gap-x-2">
              <div>
                {usefulLinks1.map((link) => (
                  <div key={link} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmallIcon /> {link}
                  </div>
                ))}
              </div>
              <div>
                {usefulLinks2.map((link) => (
                  <div key={link} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmallIcon /> {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="text-white font-bold mb-3 text-sm">Shop Categories</h4>
            <div className="grid grid-cols-2 gap-x-6">
              <div>
                {footerShopCategories1.map((link) => (
                  <div key={link} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmallIcon /> {link}
                  </div>
                ))}
              </div>
              <div>
                {footerShopCategories2.map((link) => (
                  <div key={link} className="flex items-center gap-1 mb-1.5 text-xs hover:text-white cursor-pointer">
                    <ChevronRightSmallIcon /> {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Get in Touch</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2"><MapPinIcon /><span>45A Dayal Enclave, Sec-9, Indira Nagar, Lucknow 226026</span></div>
              <div className="flex items-center gap-2"><PhoneIcon /><span>+91 83188 99526 +91 78601 14786</span></div>
              <div className="flex items-center gap-2"><MailIcon /><span>KaashtKart@gmail.com</span></div>
              <div className="flex items-center gap-2"><MailIcon /><span>info@KaashtKart.com</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span>Follow Us:</span>
            {socialIcons.map((item) => {
              const SocialIcon = item.icon;
              return (
                <button key={item.label} className="w-7 h-7 rounded border border-gray-600 flex items-center justify-center text-xs hover:bg-gray-700" aria-label={item.label}>
                  <SocialIcon size={13} />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span>Download App:</span>
            <button className="bg-black text-white px-3 py-1 rounded text-[11px] border border-gray-600 inline-flex items-center gap-1"><AppStoreIcon size={12} /> App Store</button>
            <button className="bg-black text-white px-3 py-1 rounded text-[11px] border border-gray-600 inline-flex items-center gap-1"><GooglePlayIcon size={12} /> Google Play</button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span>Payment Accepts:</span>
            <span className="bg-white text-gray-800 px-2 py-0.5 rounded text-[10px] font-bold">UPI</span>
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-[10px] font-bold">PayU</span>
            <span className="bg-blue-700 text-white px-2 py-0.5 rounded text-[10px] font-bold">VISA</span>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          Copyright 2026 <span className="text-white font-bold">KaashtKart</span>. All rights reserved. Crafted with Code by CodeRafter
        </div>
      </div>
    </footer>
  );
}