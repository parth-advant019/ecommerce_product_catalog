"use client";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type ProductProps = {
  category: string;
};

export default function IndividualProduct({ category }: ProductProps) {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [error, setError] = useState("");

  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = products.filter((p) => p.category === category);

  const searchedProducts = filteredProducts.filter((item) => {
    if (error) return false;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    const matchMin = minPrice === "" || item.price >= Number(minPrice);

    const matchMax = maxPrice === "" || item.price <= Number(maxPrice);

    return matchSearch && matchMin && matchMax;
  });

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    if (sortOrder === "high") {
      return b.rating - a.rating;
    }
    if (sortOrder === "low") {
      return a.rating - b.rating;
    }
    return 0;
  });

  const visibleProducts = sortedProducts.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleClearPrice = () => {
    setMinPrice("");
    setMaxPrice("");
    setError("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {category} Products
      </h2>

      {/* <div className="flex flex-col sm:flex-row md:flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 px-3 w-full md:w-full lg:w-auto lg:flex-1 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 mb-4"
        />

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => {
            const value = e.target.value;
            setMinPrice(value);

            if (maxPrice && Number(value) > Number(maxPrice)) {
              setError("Min price cannot be greater than Max price");
            } else {
              setError("");
            }
          }}
          className="h-10 px-3 w-full sm:w-32 border border-gray-700 bg-white placeholder-gray-400 text-gray-800 rounded"
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => {
            const value = e.target.value;
            setMaxPrice(value);
            if (minPrice && Number(value) < Number(minPrice)) {
              setError("Max price cannot be less than Min price");
            } else {
              setError("");
            }
          }}
          className="h-10 px-3 w-full sm:w-32 border border-gray-700 bg-white placeholder-gray-400 text-gray-800 rounded"
        />
        <button
          onClick={handleClearPrice}
          className="h-10 w-full sm:w-auto text-white bg-blue-500 px-3 rounded-lg"
        >
          Clear Price
        </button>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="h-10 w-full sm:w-40 border border-gray-700 p-2 rounded-lg text-gray-700"
        >
          <option value="">Sort by</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div> */}

      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 px-3 w-full lg:w-80 border border-gray-300 bg-white text-gray-800 placeholder-gray-400 rounded-md"
        />

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => {
            const value = e.target.value;
            setMinPrice(value);

            if (maxPrice && Number(value) > Number(maxPrice)) {
              setError("Min price cannot be greater than Max price");
            } else {
              setError("");
            }
          }}
          className="h-10 px-3 w-full sm:w-[30%] lg:w-32 border border-gray-700 bg-white placeholder-gray-400 text-gray-800 rounded"
        />

        {/* 🔹 Max */}
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => {
            const value = e.target.value;
            setMaxPrice(value);

            if (minPrice && Number(value) < Number(minPrice)) {
              setError("Max price cannot be less than Min price");
            } else {
              setError("");
            }
          }}
          className="h-10 px-3 w-full sm:w-[30%] lg:w-32 border border-gray-700 bg-white placeholder-gray-400 text-gray-800 rounded"
        />

        <button
          onClick={handleClearPrice}
          className="h-10 w-full sm:w-[30%] lg:w-auto text-white bg-blue-500 px-3 rounded-lg"
        >
          Clear Price
        </button>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="h-10 w-full sm:w-full lg:w-40 border border-gray-700 rounded-lg text-gray-700"
        >
          <option value="">Sort by</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProducts.map((product) => (
          <Link
            key={product.id}
            href={`/${product.category.toLowerCase()}/${product.id}`}
          >
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 w-full"
            >
              <div className="w-full h-52 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-3"
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
                  price {product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleCount < searchedProducts.length && (
        <div className="flex justify-end mt-4">
          <button onClick={handleShowMore} className="text-black">
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
