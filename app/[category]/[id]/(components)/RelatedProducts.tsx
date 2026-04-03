import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

type Props = {
  currentId: string;
  category: string;
};

export default function RelatedProducts({ currentId, category }: Props) {
  const relatedProducts = products.filter(
    (p) =>
      p.category.toLowerCase() === category && p.id.toString() !== currentId,
  );

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.slice(0, 4).map((product) => (
          <Link
            key={product.id}
            href={`/${product.category.toLowerCase()}/${product.id}`}
          >
            <div className="border rounded-lg p-3 hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm font-medium mt-2 line-clamp-2">
                {product.name}
              </p>

              <p className="text-sm text-gray-600">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
