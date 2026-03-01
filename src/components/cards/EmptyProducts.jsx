// components/shares/EmptyProducts.tsx
"use client";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const EmptyProducts = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <div className="bg-gray-100 p-6 rounded-full">
        <ShoppingBag className="w-16 h-16 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-700">No Products Found</h2>
      <p className="text-gray-400 text-sm">
        Try adjusting your search to find what you&apos;re looking for.
      </p>
      <button
        onClick={() => router.push("/products")}
        className="mt-2 flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition"
      >
        Clear Search
      </button>
    </div>
  );
};

export default EmptyProducts;