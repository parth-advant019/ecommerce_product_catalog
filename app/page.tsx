import type { Metadata } from "next";
import ProductFilter from "@/components/products/ProductFilter";

export const metadata: Metadata = {
  title: "E-commerce Product Catalog",
  description:
    "Explore a wide range of products across categories like electronics, clothing, beauty, grocery and books.",
};

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-gray-700 text-xl mb-4">Welcome to e-commerce </h1>
      <div>
        <ProductFilter />
      </div>
    </div>
  );
}
