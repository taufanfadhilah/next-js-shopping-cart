import { cn } from "@/lib/utils";
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

type ProductCardProps = React.ComponentProps<typeof Card> & {
  title: string;
};

export function ProductCard({ className, title, ...props }: ProductCardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <div className="image-container">
          <Image
            src="/vegetables.webp"
            alt="product-thumbnail"
            className="image mb-2"
            layout="fill"
            quality={100}
            loading="lazy"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Rp. 1.500</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          veniam neque similique temporibus.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
