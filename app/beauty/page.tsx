import type { Metadata } from "next";
import IndividualProduct from "@/components/products/IndividualProduct";

export const metadata: Metadata = {
  title: "Beauty Products",
  description:
    "Browse beauty and skincare products including cosmetics, makeup and personal care.",
};
export default function BeautyPage() {
  return (
    <div className="w-full">
      <div>
        <IndividualProduct category="Beauty" />
      </div>
    </div>
  );
}
