import type { Metadata } from "next";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import ProductDetailsView from "./(components)/ProductDetailsView";
import RelatedProducts from "./(components)/RelatedProducts";

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category.toLowerCase(),
    id: product.id.toString(),
  }));
}

type Props = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}): Promise<Metadata> {
  const { category, id } = await params;

  const product = products.find(
    (p) => p.id.toString() === id && p.category.toLowerCase() === category,
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { category, id } = await params;

  const product = products.find(
    (p) => p.id.toString() === id && p.category.toLowerCase() === category,
  );

  if (!product) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <ProductDetailsView product={product} />

      <RelatedProducts currentId={id} category={category} />
    </div>
  );
}
