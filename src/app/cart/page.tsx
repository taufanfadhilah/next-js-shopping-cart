import { CartTable } from "@/components/CartTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Cart() {
  return (
    <div>
      <h1 className="font-bold text-2xl underline mb-4">Your cart items</h1>
      <Link href={"/"}>
        <Button variant={"outline"} size={"sm"}>
          Continue shopping
        </Button>
      </Link>
      <CartTable className="mt-4" />
    </div>
  );
}

export default Cart;
