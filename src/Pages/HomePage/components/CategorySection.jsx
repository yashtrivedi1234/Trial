import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Category Images Import
import HandicraftImg from "../../../assets/Categories Images/imgi_3_handicraft_gparm3.png";
import RiceImg from "../../../assets/Categories Images/imgi_4_Rice_mtz6vk.png";
import MushroomImg from "../../../assets/Categories Images/imgi_5_Mushroom_f0epc8.png";
import AyurvedImg from "../../../assets/Categories Images/imgi_6_Ayurved_pvaxs4.png";
import MilletsImg from "../../../assets/Categories Images/imgi_7_ftjsn0sg5lixkjtqxg83.webp";
import TeaImg from "../../../assets/Categories Images/imgi_8_Tea_kp4atw.png";
import PickleImg from "../../../assets/Categories Images/imgi_9_pickle_tzxusf.png";
import CocoaImg from "../../../assets/Categories Images/imgi_10_Cocoa_y4lsrq.png";
import SpicesImg from "../../../assets/Categories Images/imgi_11_spices_thnjut.png";
import MustardImg from "../../../assets/Categories Images/imgi_12_mustard_lwml4n.png";
import VinegarImg from "../../../assets/Categories Images/imgi_13_vinegar_soxgvb.png";
import JaggeryImg from "../../../assets/Categories Images/imgi_14_jaggery_ikg2ls.png";
import HoneyImg from "../../../assets/Categories Images/imgi_15_honey_sid7ip.png";
import DryFruitsImg from "../../../assets/Categories Images/imgi_16_Dry_Fruits_k1yl2n.png";
import ExtraImg from "../../../assets/Categories Images/imgi_17_ubdygoulttlb12xcrgk4.webp";

const GREEN = "#22c55e";

const categories = [
  { name: "Handicrafts", count: "1 items",  color: "#fce4ec", img: HandicraftImg },
  { name: "Rice",        count: "0 items",  color: "#fff3e0", img: RiceImg },
  { name: "Mushrooms",   count: "0 items",  color: "#fce4ec", img: MushroomImg },
  { name: "Ayurveda",    count: "10 items", color: "#e8f5e9", img: AyurvedImg },
  { name: "Millets",     count: "6 items",  color: "#ede7f6", img: MilletsImg },
  { name: "Teas",        count: "2 items",  color: "#f3e5f5", img: TeaImg },
  { name: "Pickle",      count: "0 items",  color: "#fffde7", img: PickleImg },
  { name: "Cocoa",       count: "0 items",  color: "#fbe9e7", img: CocoaImg },
  { name: "Spices",      count: "0 items",  color: "#fff8e1", img: SpicesImg },
  { name: "Mustard",     count: "0 items",  color: "#f9fbe7", img: MustardImg },
  { name: "Vinegar",     count: "0 items",  color: "#e3f2fd", img: VinegarImg },
  { name: "Jaggery",     count: "0 items",  color: "#fff8ee", img: JaggeryImg },
  { name: "Honey",       count: "0 items",  color: "#fffde7", img: HoneyImg },
  { name: "Dry Fruits",  count: "0 items",  color: "#fdf5ec", img: DryFruitsImg },
  { name: "Extra",       count: "0 items",  color: "#f5f5f5", img: ExtraImg },
];

export default function CategorySection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      // Scroll by exactly 1 card width + gap
      scrollRef.current.scrollBy({ left: dir * 220, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-[1380px] mx-auto px-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-1 text-gray-900">
          Fresh · Pure · Authentic ·
        </h2>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Direct From Farmers
        </h2>

        {/* Slider wrapper */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-5 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex-shrink-0 cursor-pointer group"
                style={{ width: "calc((100% - 100px) / 6)" }} // 5 gaps × 20px = 100px
              >
                {/* Card Box */}
                <div
                  className="rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                  style={{
                    backgroundColor: cat.color,
                    aspectRatio: "1 / 1",   // perfect square
                    padding: "20px",
                  }}
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name + Count */}
                <div className="text-center mt-2">
                  <div className="font-semibold text-sm text-gray-800">
                    {cat.name}
                  </div>
                  <div className="text-xs font-medium" style={{ color: GREEN }}>
                    {cat.count}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute -right-5 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

        </div>
      </div>

      {/* Hide scrollbar webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}