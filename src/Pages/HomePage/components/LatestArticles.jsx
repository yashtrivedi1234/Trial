import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Apni local images yahan import karein
import honeyImg from "../../../assets/Articles/2151441295_mtu6vz.jpg";
import moringa1Img from "../../../assets/Articles/moringa-blog-1771249040578_wmvs0x.jpg";
import health1Img from "../../../assets/Articles/umyhcxsrl32drgypea0v.webp";
import health2Img from "../../../assets/Articles/xvey87m0vjmn1rjxfr6h.webp";

const greenColor = "#1a7a3f";
const CARDS_VISIBLE = 4;

const articles = [
  { date: "April 13, 2026", title: "Why Honey is a Must-Have in Every Home", img: honeyImg },
  { date: "February 26, 2026", title: "How Much Protein in Moringa Powder? A Complete Guide for Health-Conscious Indians", img: moringa1Img },
  { date: "February 26, 2026", title: "Does Moringa Lower Cholesterol? A Natural Solution for Heart Health", img: health1Img },
  { date: "February 26, 2026", title: "Moringa Farming Training: Everything You'll Learn From...", img: health2Img },
];

export default function LatestArticles() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const maxIndex = articles.length - CARDS_VISIBLE;

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setCurrent(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth + 16;
      trackRef.current.style.transform = `translateX(-${clamped * cardWidth}px)`;
    }
  };

  const numDots = maxIndex + 1;

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex items-end justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 inline-block pb-0.5">
          Latest Articles
        </h2>
        <button style={{ backgroundColor: greenColor }} className="text-white text-sm px-4 py-2 rounded-full font-medium">
          View All Articles
        </button>
      </div>
      <p className="text-gray-500 text-xs mb-6">
        Stay updated with our latest insights on health, nutrition, and sustainable living
      </p>

      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-35 transition"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Cards Track */}
        <div
          ref={trackRef}
          className="flex gap-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex-shrink-0 w-[calc(25%-12px)] bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <p style={{ color: greenColor }} className="text-[10px] font-semibold mb-1 uppercase tracking-wide">
                  {article.date}
                </p>
                <p className="text-xs font-semibold text-gray-800 leading-tight mb-2 line-clamp-3">
                  {article.title}
                </p>
                <p style={{ color: greenColor }} className="text-xs font-medium">
                  Read More →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current >= maxIndex}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-35 transition"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: numDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-green-700 scale-125" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}