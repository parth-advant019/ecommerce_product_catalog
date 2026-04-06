"use client";

import { useState } from "react";
import Product from "./Product";

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-700 p-2 rounded-lg text-gray-700"
        >
          <option value="All">All Products</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Grocery">Grocery</option>
          <option value="Beauty">Beauty</option>
        </select>
        <Product category={selectedCategory} />
      </div>
    </div>
  );
}
