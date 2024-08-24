"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
// import { useDispatch, useSelector } from "react-redux";
import { remove } from "@/lib/store/features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.items);
  console.log("list......", products);

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  console.log(products);

  const handleRemove = (productId: string) => {
    dispatch(remove(productId));
  };

  return (
    <section className="container flex flex-col gap-4 w-full py-10 h-full">
      <h1 className=" font-bold text-3xl text-center border-b-2 border-primary  w-auto mx-auto mb-8 text-primary ">
        Your Cart List
      </h1>
      <Table className="border-orange-300 border ">
        <TableHeader className="bg-orange-300 font-bold text-lg ">
          <TableRow className="">
            <TableHead className="w-1/5 text-left">Item-Image</TableHead>

            <TableHead className="w-2/5 text-left">Items</TableHead>

            <TableHead className="w-1/5 text-center">Quantity</TableHead>
            <TableHead className="text-right w-1/5">Amount</TableHead>
            <TableHead className="text-right w-1/5">Action</TableHead>
          </TableRow>
        </TableHeader>
        {products.map((product, index) => {
          return (
            <TableBody key={index}>
              <TableRow>
                <TableCell className="font-medium">
                  {" "}
                  <Image
                    src={product.image || "/burger.png"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="border border-primary rounded-lg object-cover object-center"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>

                <TableCell className="flex justify-between items-center">
                  <Button className="bg-green-500 hover:bg-green-300 hover:opacity-55">
                    <Plus />
                  </Button>
                  <div>1</div>
                  <Button variant={"destructive"} className="hover:opacity-55">
                    <Minus />
                  </Button>
                </TableCell>
                <TableCell className="text-right">${product.price}</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button
                    className="btn rounded-full"
                    onClick={() => handleRemove(product.id)}
                  >
                    <X className=" " />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default CartPage;
