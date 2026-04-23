const GREEN = "#1a7a3f";

export default function CallToAction() {
  return (
    <div style={{ backgroundColor: GREEN }} className="py-12 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">Experience the Purity of Nature with KaashtKart</h2>
      <p className="text-green-200 mb-5 text-sm">Premium natural products crafted with care. Simple, secure, and delivered to your doorstep.</p>
      <button className="bg-white font-semibold text-green-800 px-8 py-2.5 rounded-full hover:bg-green-50 transition-colors">
        Shop Now
      </button>
    </div>
  );
}