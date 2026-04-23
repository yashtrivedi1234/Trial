import ProductCard from "./ProductCard";

const CARD_COLORS = ["#fff8e7", "#f0fff4", "#fff0f0", "#f5f0e8"];
const sections = [
  {
    title: "Pickles",
    products: [
      { name: "Baya India Homemade Mango Pickle | Authentic Ghar ka Bana Aam ka Achar...", price: "₹280", oldPrice: "₹350", weight: "330 g", brand: "Baya India Homemade Mango Pickle" },
      { name: "Baya India Garlic Pickle 330g | Homemade Lehsun ka Achar | Tradition...", price: "₹291", oldPrice: "₹435", weight: "330 g", brand: "Baya India Garlic Pickle" },
      { name: "Baya India Elephant Foot Yam Pickle | Suran ka Achar | Homemade Grate...", price: "₹283", oldPrice: "₹449", weight: "330 g", brand: "Baya India Elephant Foot Yam Pickle" },
    ],
  },
  {
    title: "Handicrafts",
    products: [
      { name: "Handmade Organic Natural Water Hyacinth Tea Coaster| Handmade S...", price: "₹372", weight: "4 Piece", brand: "Water Hyacinth Tea Coaster" },
    ],
  },
  {
    title: "Millets",
    products: [
      { name: "Millets Thekua 250G (No Palm oil, No Refined Sugar, No Maida)", price: "₹278", oldPrice: "₹299", weight: "0.25 kg", brand: "Aahar hi Aushadhi Hai!" },
      { name: "Shree Goraksh Bhog Multigrain Sattu 400G | prepared from barley (jau),...", price: "₹185", oldPrice: "₹199", weight: "0.40 kg", brand: "Aahar hi Aushadhi Hai!" },
      { name: "Shree Goraksh Bhog Ragi Dosa Mix 500 G pack maks 12 dosa | Gluten...", price: "₹229", oldPrice: "₹349", weight: "0.5 kg", brand: "Aahar hi Aushadhi Hai!" },
    ],
  },
  {
    title: "Raw Honey",
    products: [
      { name: "Amrit Sunflower Honey A Product By:KVIC - 1 KG | 100% Natural Honey|...", price: "₹850", weight: "1 kg", brand: "Amrit Sunflower Honey A Product By:KVIC" },
    ],
  },
  {
    title: "Ayurveda",
    products: [
      { name: "Protein & Fiber-Rich Energy Balls | Traditional Indian Sweet with Dates...", price: "₹250", weight: "300 g", brand: "Doctor Moringa's Laddoos" },
      { name: "DOCTOR MORINGA Sweet Cookies - |Jaggery Biscuit | Multi Millet Snack...", price: "₹75", weight: "100 g", brand: "DOCTOR MORINGA Sweet Cookies" },
    ],
  },
];

export default function SectionProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-6 space-y-6">
      {sections.map((section) => (
        <div key={section.title} className="border border-gray-100 rounded-xl overflow-hidden">
          <div className="px-6 py-4 bg-white border-b border-gray-100">
            <h3 className="font-bold text-lg text-gray-900 border-b-2 border-green-700 inline-block pb-0.5">{section.title}</h3>
          </div>
          <div className="p-4 bg-white">
            <div
              className={`grid gap-4 ${
                section.products.length === 1
                  ? "grid-cols-1 max-w-xs"
                  : section.products.length === 2
                  ? "grid-cols-2 max-w-xl"
                  : "grid-cols-3"
              }`}
            >
              {section.products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={{
                    ...product,
                    color: CARD_COLORS[index % CARD_COLORS.length],
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}