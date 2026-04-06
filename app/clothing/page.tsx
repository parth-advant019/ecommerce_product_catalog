import type { Metadata } from "next";
import IndividualProduct from "@/components/products/IndividualProduct";

export const metadata: Metadata = {
  title: "Clothing Products",
  description:
    "Explore trendy clothing including shirts, jeans, jackets and fashion wear.",
};

export default function ClothingPage() {
  return (
    <div className="w-full">
      <div>
        <IndividualProduct category="Clothing" />
      </div>
    </div>
  );
}
