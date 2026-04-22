export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 ${className}`}
      {...props}
    />
  );
}
