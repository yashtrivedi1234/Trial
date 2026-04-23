import { useState } from "react";

const PlusIcon = ({ open }) => (
  <svg
    width="10" height="10" fill="none" stroke="white" strokeWidth="2.5"
    viewBox="0 0 24 24"
    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const faqs = [
  { q: "Are KaashtKart products 100% natural?", a: "Yes, all KaashtKart products are carefully sourced and made using natural ingredients without harmful additives or chemicals." },
  { q: "Do you offer organic certification?", a: "Yes, most of our products come with organic certification from recognized authorities. Check individual product pages for details." },
  { q: "Are your seeds hybrid or desi?", a: "We offer both hybrid and desi (native) varieties. Each product clearly mentions the seed type for your convenience." },
  { q: "How long does delivery take?", a: "Orders are typically delivered within 3–7 business days depending on your location." },
  { q: "Do you deliver to remote villages?", a: "Yes, we deliver to most rural areas across India. Enter your pincode at checkout to check serviceability." },
  { q: "Is shipping free on all orders?", a: "Free shipping is available on orders above ₹499. A nominal shipping fee applies for orders below this amount." },
  { q: "How can I track my order?", a: "Once your order is shipped, you will receive a tracking link via SMS and email to monitor delivery status." },
  { q: "Do you offer Cash on Delivery (COD)?", a: "Yes, Cash on Delivery is available in most serviceable pin codes across India." },
  { q: "What payment methods do you accept?", a: "We accept UPI, Credit/Debit Cards, Net Banking, Wallets, and COD." },
  { q: "Is my payment information secure?", a: "Absolutely! All transactions are encrypted and securely processed. We never store your payment details." },
  { q: "Can I change my delivery address?", a: "Address changes are possible within 2 hours of placing the order. Contact our support team immediately." },
  { q: "What is your return policy?", a: "We accept returns within 7 days of delivery for damaged or incorrect items. Contact us with your order details." },
  { q: "How do I request a refund?", a: "Refunds are processed within 5–7 business days after product inspection. You'll be notified via SMS/email." },
  { q: "How to contact customer support?", a: "Reach us at info@KaashtKart.com or call 78601 14786 (Mon–Sat, 9 AM to 7 PM)." },
];

const FaqItem = ({ faq, idx, openIdx, setOpenIdx }) => {
  const isOpen = openIdx === idx;
  return (
    <div className="border border-green-200 rounded mb-2 overflow-hidden bg-white">
      <button
        onClick={() => setOpenIdx(isOpen ? null : idx)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 font-medium gap-2"
      >
        <span>{faq.q}</span>
        <span
          className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center"
          style={{ transition: "transform 0.25s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <PlusIcon open={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-3 text-sm text-gray-500 leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const left = faqs.slice(0, 7);
  const right = faqs.slice(7);

  return (
    <div className="bg-green-50 py-10">
      <div className="max-w-[1380px]  mx-auto px-8">
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Everything you need to know about KaashtKart products and orders.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {left.map((faq, i) => (
              <FaqItem key={i} faq={faq} idx={i} openIdx={openIdx} setOpenIdx={setOpenIdx} />
            ))}
          </div>
          <div>
            {right.map((faq, i) => (
              <FaqItem key={i + 7} faq={faq} idx={i + 7} openIdx={openIdx} setOpenIdx={setOpenIdx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}