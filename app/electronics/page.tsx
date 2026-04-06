import type { Metadata } from "next";
import IndividualProduct from "@/components/products/IndividualProduct";

export const metadata: Metadata = {
  title: "Electronics Products",
  description:
    "Browse latest electronics like phones, laptops, gadgets and accessories.",
};

export default async function ElectronicsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); with prefetch=false
  return (
    <div className="w-full">
      <div>
        <IndividualProduct category="Electronics" />
      </div>
    </div>
  );
}
