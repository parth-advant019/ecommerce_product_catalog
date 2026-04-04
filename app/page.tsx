import Product from "@/components/products/Product";

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <Product category="Electronics" />
        <Product category="Clothing" />
        <Product category="Books" />
        <Product category="Grocery" />
        <Product category="Beauty" />
      </div>
    </div>
  );
}
