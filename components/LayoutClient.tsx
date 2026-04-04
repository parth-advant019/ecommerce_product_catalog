"use client";

import { useContext } from "react";
import UserProgressContext from "@/context/UserProgressContext";
import CartModal from "@/components/cart/CartModal";
import CheckoutModal from "@/components/cart/CheckoutModal";

export default function LayoutClient() {
  const progressCtx = useContext(UserProgressContext)!;

  return (
    <>
      {progressCtx.progress === "cart" && <CartModal />}
      {progressCtx.progress === "checkout" && <CheckoutModal />}
    </>
  );
}
