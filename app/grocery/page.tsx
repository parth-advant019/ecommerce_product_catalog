import type { Metadata } from "next";
import IndividualProduct from "@/components/products/IndividualProduct";

export const metadata: Metadata = {
  title: "Grocery Products",
  description:
    "Shop daily grocery items like  snacks and household essentials.",
};

export default function GroceryPage() {
  return (
    <div className="w-full">
      <div>
        <IndividualProduct category="Grocery" />
      </div>
    </div>
  );
}
