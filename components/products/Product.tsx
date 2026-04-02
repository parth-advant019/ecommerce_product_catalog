import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  category: string;
};

export default function Product({ category }: ProductProps) {
  const filteredProducts = products
    .filter((p) => p.category === category)
    .slice(0, 3);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} className="text-black" href="/electronics">
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 w-full"
            >
              <div className="w-full h-52 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="text-lg font-semibold mt-4 text-gray-900">
                {product.name}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>{product.rating}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640
                "
                    className="w-4 h-4 fill-amber-400"
                  >
                    <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                  </svg>
                </div>

                <span className="text-sm text-gray-600">
                  {product.reviews} reviews
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Link className="text-black" href="/electronics">
          Show electronic items
        </Link>
      </div>
    </div>
  );
}
