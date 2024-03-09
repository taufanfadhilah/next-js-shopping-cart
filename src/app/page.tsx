import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl underline">Groceries Showcase</h1>
        <div>
          <Link href="/cart">
            Cart items <Badge variant="outline">0</Badge>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Array.apply(null, Array(8)).map((_, index) => (
          <ProductCard key={index} title={`Item ${index}`} />
        ))}
      </div>
    </>
  );
}
