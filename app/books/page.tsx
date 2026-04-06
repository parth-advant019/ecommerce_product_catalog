import type { Metadata } from "next";
import IndividualProduct from "@/components/products/IndividualProduct";

export const metadata: Metadata = {
  title: "Books Collection",
  description:
    "Discover a wide range of books including novels, educational and story books.",
};

export default function BooksPage() {
  return (
    <div className="w-full">
      <div>
        <IndividualProduct category="Books" />
      </div>
    </div>
  );
}
