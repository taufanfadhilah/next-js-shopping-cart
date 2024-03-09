"use client";
import { cn, money } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Item } from "@/types/item";
import { useAppDispatch } from "@/lib/hooks";
import { CartState, addToCart } from "@/lib/features/cart.slice";

type ProductCardProps = React.ComponentProps<typeof Card> & {
  item: Item;
};

export function ProductCard({ className, item, ...props }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const data: CartState = {
      item: item,
      qty: 2,
    };
    dispatch(addToCart(data));
  };

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <div className="image-container">
          <Image
            src="/vegetables.webp"
            alt="product-thumbnail"
            className="image mb-2"
            fill
            quality={100}
            loading="lazy"
          />
        </div>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{money(item.price)}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          veniam neque similique temporibus.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
