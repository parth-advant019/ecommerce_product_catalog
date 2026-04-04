"use client";
import { useContext } from "react";
import CartContext from "@/context/CartContext";
import ImageZoomModal from "@/components/products/ImageZoomModal";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
};

type Props = {
  product: Product;
};
export default function ProductDetailsView({ product }: Props) {
  const cartCtx = useContext(CartContext)!;
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <ImageZoomModal src={product.image} alt={product.name} />

      <h1 className="text-3xl text-gray-700 font-bold mb-3 mt-2">
        {product.name}
      </h1>

      <p className="text-lg text-gray-700 mb-2">Price: {product.price}</p>

      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <span>Rating: {product.rating}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-4 h-4 fill-amber-400"
        >
          <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
      </div>

      <p className="text-gray-600 mb-4">{product.reviews} reviews</p>

      <p className="text-gray-700">{product.description}</p>

      <button
        onClick={() =>
          cartCtx.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
          })
        }
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
