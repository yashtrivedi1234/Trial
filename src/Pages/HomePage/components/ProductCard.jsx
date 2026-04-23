import { ShoppingBag } from "lucide-react";

const CartIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

export default function ProductCard({ product, showOldPrice = true }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div
        className="relative bg-gray-50 h-40 flex items-center justify-center text-5xl p-4"
        style={{ backgroundColor: product.color || "#f9f9f9" }}
      >
        {product.badge ? (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
            {product.badge}
          </span>
        ) : null}

        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
        ) : (
          <ShoppingBag size={56} className="text-green-700" strokeWidth={1.8} />
        )}
      </div>

      <div className="p-3">
        <p className="text-xs font-semibold text-green-700 leading-tight mb-1 line-clamp-2 min-h-8">{product.name}</p>
        <p className="text-[11px] text-gray-400 mb-1 truncate">{product.brand}</p>

        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <StarIcon key={value} />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">0 Reviews</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-gray-900 text-sm">{product.price}</span>
            {showOldPrice && product.oldPrice ? (
              <span className="text-gray-400 text-xs line-through ml-1">{product.oldPrice}</span>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <select className="flex-1 text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-green-500">
            <option>{product.weight}</option>
          </select>
          <button
            type="button"
            style={{ backgroundColor: "#1a7a3f" }}
            className="w-8 h-7 rounded flex items-center justify-center text-white hover:bg-green-800 transition-colors shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}