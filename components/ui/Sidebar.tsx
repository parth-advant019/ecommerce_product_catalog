"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import CartContext from "@/context/CartContext";
import UserProgressContext from "@/context/UserProgressContext";

export default function SideBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cartCtx = useContext(CartContext)!;
  const progressCtx = useContext(UserProgressContext)!;

  const totalCount = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-60 bg-indigo-600 text-white p-2 rounded-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 640">
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        )}
      </button>
      {/*close from outside */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`w-64 h-screen bg-indigo-600 text-white fixed left-0 top-0 p-4 pt-14 md:pt-4 transition-all duration-300 z-50 ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">E-commerce Product</h2>
        </div>

        <nav className="mt-6 flex flex-col justify-between h-[85%]">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 p-4 hover:bg-indigo-500 rounded cursor-pointer"
              >
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/electronics"
                className="flex items-center gap-3 p-4 hover:bg-indigo-500 rounded cursor-pointer"
              >
                <span>Electronics</span>
              </Link>
            </li>

            <li>
              <Link
                href="/clothing"
                className="flex items-center gap-3 p-4 hover:bg-indigo-500 rounded cursor-pointer"
              >
                <span>Clothing</span>
              </Link>
            </li>

            <li>
              <Link
                href="/books"
                className="flex items-center gap-3 p-4 hover:bg-indigo-500 rounded cursor-pointer"
              >
                <span>Books</span>
              </Link>
            </li>

            <li>
              <Link
                href="/grocery"
                className="flex items-center gap-3 p-4 hover:bg-indigo-500 rounded cursor-pointer"
              >
                <span>Grocery</span>
              </Link>
            </li>

            <li>
              <Link
                href="/beauty"
                className="flex items-center gap-3 p-4 hover:bg-indigo-500 rounded cursor-pointer"
              >
                <span>Beauty</span>
              </Link>
            </li>
          </ul>
          <button
            onClick={progressCtx.showCart}
            className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm"
          >
            cart({totalCount})
          </button>
        </nav>
      </div>
    </>
  );
}
