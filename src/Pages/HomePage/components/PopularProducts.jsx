import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

import PopularImg1 from "../../../assets/Popular Products/epbrshvhk88zn5hscjxs.webp";
import PopularImg2 from "../../../assets/Popular Products/iqvwpbv8nlop7bos1qr9.webp";
import PopularImg3 from "../../../assets/Popular Products/jhekn4e68ufwlqgwhmnn.webp";
import PopularImg4 from "../../../assets/Popular Products/k17eyygtmkub8k5lv0hc.webp";
import PopularImg5 from "../../../assets/Popular Products/lzrtczg8rp6deecykdh9.jpg";
import PopularImg6 from "../../../assets/Popular Products/r438yov8vi3e6ngrm3xk.webp";
import PopularImg7 from "../../../assets/Popular Products/u9sju1clo1pycidxcfyh.webp";
import PopularImg8 from "../../../assets/Popular Products/uw409abearm60ileynpz (1).webp";
import PopularImg9 from "../../../assets/Popular Products/uw409abearm60ileynpz.webp";
import PopularImg10 from "../../../assets/Popular Products/vgc78czmsehi89hakbwy.webp";
import PopularImg11 from "../../../assets/Popular Products/yxq9icogzt0ebkbzz9e4.webp";

const GREEN = "#1a7a3f";

const popularCategories = ["All", "Raw Honey", "Pickles", "Teas", "Millets", "Ayurveda", "Handicrafts"];

const popularProducts = [
  {
    name: "Protein & Fiber-Rich Energy Balls | Traditional Indian Sweet with...",
    price: "₹250",
    weight: "300 g",
    brand: "Doctor Moringa's Laddoos",
    color: "#f7f0e7",
    image: PopularImg1,
    category: "Ayurveda",
  },
  {
    name: "DOCTOR MORINGA Sweet Cookies - Jaggery Biscuit | Multi Millet...",
    price: "₹75",
    weight: "100 g",
    brand: "DOCTOR MORINGA Sweet Cookies",
    color: "#fff8f0",
    image: PopularImg2,
    category: "Millets",
  },
  {
    name: "Traditional Pickle Crafted in Small Batches | Farm Fresh Flavor...",
    price: "₹299",
    oldPrice: "₹349",
    weight: "330 g",
    brand: "Baya India",
    color: "#fff3e8",
    image: PopularImg3,
    category: "Pickles",
  },
  {
    name: "Amrit Sunflower Honey A Product By:KVIC - 1 KG | 100%...",
    price: "₹850",
    weight: "1 kg",
    brand: "Amrit Sunflower Honey",
    color: "#fff4d9",
    image: PopularImg4,
    category: "Raw Honey",
  },
  {
    name: "Shree Goraksh Bhog Ragi Dosa Mix 500 G pack maks 12...",
    price: "₹229",
    oldPrice: "₹249",
    weight: "0.5 kg",
    brand: "Aahar hi Aushadhi Hai!",
    badge: "8% OFF",
    color: "#eef6eb",
    image: PopularImg5,
    category: "Millets",
  },
  {
    name: "Moringa Wellness Mix | Daily Nutrition Support | Natural Blend...",
    price: "₹185",
    weight: "250 g",
    brand: "KaashtKart Naturals",
    color: "#eef7ee",
    image: PopularImg6,
    category: "Ayurveda",
  },
  {
    name: "Multi Millet Health Mix | No Refined Sugar | Farm Fresh Blend...",
    price: "₹199",
    weight: "500 g",
    brand: "KaashtKart Naturals",
    color: "#f6f2e8",
    image: PopularImg7,
    category: "Millets",
  },
  {
    name: "Amla Candy | Sweet & Tangy | Vitamin C Rich Snack...",
    price: "₹145",
    weight: "250 g",
    brand: "Village Wellness Foods",
    color: "#edf6e7",
    image: PopularImg8,
    category: "Ayurveda",
  },
  {
    name: "Herbal Tea Blend | Everyday Detox Infusion | No Additives...",
    price: "₹210",
    weight: "100 g",
    brand: "Farm Direct Teas",
    color: "#edf3ff",
    image: PopularImg9,
    category: "Teas",
  },
  {
    name: "Village Mango Pickle | Handmade Recipe | Authentic Taste...",
    price: "₹280",
    oldPrice: "₹320",
    weight: "330 g",
    brand: "Baya India",
    color: "#fff2e9",
    image: PopularImg10,
    category: "Pickles",
  },
  {
    name: "Handmade Organic Natural Water Hyacinth Tea Coaster | Hanc...",
    price: "₹372",
    weight: "4 Piece",
    brand: "Water Hyacinth Tea Coaster",
    color: "#f5f0e8",
    image: PopularImg11,
    category: "Handicrafts",
  },
];

export default function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1400
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return popularProducts;
    }
    return popularProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const visibleCards = useMemo(() => {
    if (viewportWidth < 768) return 1;
    if (viewportWidth < 1024) return 2;
    return 4;
  }, [viewportWidth]);

  const maxIndex = Math.max(0, filteredProducts.length - visibleCards);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const slideWidthPercent = 100 / visibleCards;
  const translatePercent = safeIndex * slideWidthPercent;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section className="max-w-[1380px] mx-auto px-8 py-8">
      <h2 className="text-2xl font-bold text-center mb-5 text-gray-900">Popular Products</h2>

      <div className="flex gap-2 mb-6 flex-wrap">
        {popularCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category);
              setCurrentIndex(0);
            }}
            className="px-4 py-1.5 rounded text-sm font-medium transition-colors"
            style={
              activeCategory === category
                ? { backgroundColor: GREEN, color: "white" }
                : { backgroundColor: "white", color: "#555", border: "1px solid #ddd" }
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous popular products"
          onClick={handlePrev}
          disabled={safeIndex === 0}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {filteredProducts.map((product) => (
              <div key={`${product.name}-${product.image}`} style={{ flex: `0 0 calc(${slideWidthPercent}% - 12px)` }} className="min-w-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next popular products"
          onClick={handleNext}
          disabled={safeIndex === maxIndex}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}