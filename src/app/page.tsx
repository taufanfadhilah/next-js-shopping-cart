"use client";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import items from "@/data/items.json";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
  const cartItems = useAppSelector((state) => state.cart);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="font-bold text-2xl underline">Groceries Showcase</h1>
        <div>
          <Link href="/cart">
            Cart items <Badge variant="outline">{cartItems.length}</Badge>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
