"use client";

import { createContext, useState } from "react";

type Progress = "" | "cart" | "checkout";

type UserProgressContextType = {
  progress: Progress;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
};

const UserProgressContext = createContext<UserProgressContextType | null>(null);

export function UserProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState<Progress>("");

  function showCart() {
    setProgress("cart");
  }

  function hideCart() {
    setProgress("");
  }

  function showCheckout() {
    setProgress("checkout");
  }

  function hideCheckout() {
    setProgress("");
  }

  return (
    <UserProgressContext.Provider
      value={{
        progress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
