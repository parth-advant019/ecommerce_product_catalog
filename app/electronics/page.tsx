import IndividualProduct from "@/components/products/IndividualProduct";
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
