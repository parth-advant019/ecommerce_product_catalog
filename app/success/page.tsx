"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function OrderSuccess() {
  const searchParams = useSearchParams();

  const total = searchParams.get("total");
  const itemsParam = searchParams.get("items");

  let items: Item[] = [];

  if (itemsParam) {
    items = JSON.parse(decodeURIComponent(itemsParam));
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-gray-600 mb-4">
        Order Placed Successfully
      </h1>

      <h2 className="text-lg font-semibold mb-2 text-gray-600">Invoice</h2>

      <div className="border rounded p-4 text-gray-600">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} ({item.quantity} x {item.price})
            </span>
            <span>{item.quantity * item.price}</span>
          </div>
        ))}

        <hr className="my-2" />

        <p className="font-bold text-right">Total: {total}</p>
      </div>

      <p className="mt-4 text-gray-700">Thank you, visit again</p>

      <div className="flex justify-center mt-4">
        <Link
          className="text-white bg-blue-500 px-2 py-2 rounded-lg mt-2 text"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
