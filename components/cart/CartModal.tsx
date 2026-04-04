"use client";

import { useContext } from "react";
import CartContext from "@/context/CartContext";
import UserProgressContext from "@/context/UserProgressContext";

export default function CartModal() {
  const cartCtx = useContext(CartContext)!;
  const progressCtx = useContext(UserProgressContext)!;

  const total = cartCtx.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-999 bg-black/50 flex justify-center items-center px-4">
      <div className="bg-white text-gray-800 p-6 w-full max-w-md rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cartCtx.items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} : {item.quantity} x {item.price}
            </span>

            <div className="flex items-center gap-3">
              <button onClick={() => cartCtx.removeItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5"
                >
                  <path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                </svg>
              </button>
              {item.quantity}

              <button onClick={() => cartCtx.addItem(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5 h-5"
                >
                  <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        <p className="mt-4 font-bold">Total: ₹{total}</p>

        <div className="flex justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={progressCtx.hideCart}
          >
            Close
          </button>

          {cartCtx.items.length > 0 && (
            <button
              onClick={progressCtx.showCheckout}
              className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
            >
              Go to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
