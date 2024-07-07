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
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CartPage = () => {
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
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              {" "}
              <Image
                src="/food1.png"
                alt="food image"
                width={50}
                height={50}
                className="border border-primary"
              />
            </TableCell>
            <TableCell className="font-medium">INV001</TableCell>

            <TableCell className="flex justify-between items-center">
              <Button className="bg-green-500 hover:bg-green-300 hover:opacity-55">
                <Plus />
              </Button>
              <div>1</div>
              <Button variant={"destructive"} className="hover:opacity-55">
                <Minus />
              </Button>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default CartPage;
