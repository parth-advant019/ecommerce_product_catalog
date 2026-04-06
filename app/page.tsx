import ProductFilter from "@/components/products/ProductFilter";
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
