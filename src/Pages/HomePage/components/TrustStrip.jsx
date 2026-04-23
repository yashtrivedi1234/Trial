import { FlaskConical, Flag, Leaf as LucideLeaf, Recycle, Sprout } from "lucide-react";

const items = [
  { icon: FlaskConical, text: "Scientific Formulation" },
  { icon: Flag, text: "Made in India" },
  { icon: Recycle, text: "Eco-Friendly" },
  { icon: Sprout, text: "Ethical Practices" },
  { icon: LucideLeaf, text: "100% Plant-Based" },
];

export default function TrustStrip() {
  return (
    <div className="bg-gray-50 border-y border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <Icon size={20} className="text-green-700" />
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}