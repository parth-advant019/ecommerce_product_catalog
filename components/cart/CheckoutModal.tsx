"use client";

import React, { useContext, useState } from "react";
import CartContext from "@/context/CartContext";
import UserProgressContext from "@/context/UserProgressContext";
import { useRouter } from "next/navigation";

export default function CheckoutModal() {
  const router = useRouter();
  const [error, setError] = useState("");

  const cartCtx = useContext(CartContext)!;
  const progressCtx = useContext(UserProgressContext)!;

  const total = cartCtx.items.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0,
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const fullname = (
      form.elements.namedItem("fullName") as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const city = (
      form.elements.namedItem("city") as HTMLInputElement
    ).value.trim();
    const address = (
      form.elements.namedItem("address") as HTMLInputElement
    ).value.trim();
    const payment = (
      form.elements.namedItem("payment") as HTMLInputElement
    ).value.trim();

    if (!fullname) return setError("Please enter your full name.");
    if (!email || !/\S+@\S+\.\S+/.test(email))
      return setError("Please enter a valid email.");
    if (!city) return setError("Please enter your city.");
    if (!address) return setError("Please enter your address.");
    if (!payment) return setError("Please select a payment method.");

    setError("");

    cartCtx.clearCart();
    progressCtx.hideCheckout();
    router.push(
      `/success?total=${total}&items=${encodeURIComponent(
        JSON.stringify(cartCtx.items),
      )}`,
    );
  }

  return (
    <div className="fixed inset-0 z-999 bg-black/50 flex justify-center items-center px-4">
      <div className="bg-white text-gray-800 p-6 w-full max-w-md rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <p className="font-semibold mb-4">Total: ₹{total}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="fullName"
            placeholder="Full Name"
            className="border p-2 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input
            name="city"
            placeholder="City"
            className="border p-2 rounded"
          />

          <textarea
            name="address"
            placeholder="Address"
            className="border p-2 rounded"
          />

          <div className="mt-2">
            <p className="font-medium mb-2">Payment Method</p>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="creditCard" />
              Credit Card
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="debitCard" />
              Debit Card
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="cashOnDelivery" />
              Cash on Delivery
            </label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={progressCtx.hideCheckout}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>

            <button
              type="submit"
              className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
