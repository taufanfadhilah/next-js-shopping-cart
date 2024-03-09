"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn, money } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";
import { removeCart } from "@/lib/features/cart.slice";
import { useToast } from "./ui/use-toast";

export function CartTable({ className }: { className?: string }) {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const totalPrice = useMemo(
    () =>
      money(
        cartItems.reduce((total, cart) => total + cart.item.price * cart.qty, 0)
      ),
    [cartItems]
  );

  const handleRemoveCart = (index: number) => {
    dispatch(removeCart(index));
    toast({
      title: "Item Removed",
      description: "1 item is removed from cart.",
      variant: "destructive",
      duration: 1500
    });
  };

  return (
    <Table className={cn(className)}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Qty</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((cart, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{cart.item.name}</TableCell>
            <TableCell>{cart.qty}</TableCell>
            <TableCell>{money(cart.item.price)}</TableCell>
            <TableCell>{money(cart.item.price * cart.qty)}</TableCell>
            <TableCell>
              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={() => handleRemoveCart(index)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            Total item:{" "}
            <Badge variant={"outline"} className="ml-2">
              {cartItems.length}
            </Badge>
          </TableCell>
          <TableCell colSpan={2}>{totalPrice}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
