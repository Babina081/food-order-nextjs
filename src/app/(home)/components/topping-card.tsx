"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
export type Topping = {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
};
type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckboxCheck: (topping: Topping) => void;
};

const ToppingCard = ({
  topping,
  selectedToppings,
  handleCheckboxCheck,
}: PropType) => {
  const isCurrentSelected = selectedToppings.some(
    (element) => element.id === topping.id
  );
  return (
    <Button
      variant={"outline"}
      onClick={() => handleCheckboxCheck(topping)}
      className={cn(
        "flex flex-col h-40 relative",
        isCurrentSelected ? "border-primary" : ""
      )}
    >
      <Image
        src={topping.image}
        alt={topping.name}
        width={80}
        height={80}
      ></Image>
      <h4>{topping.name}</h4>
      <p>Rs {topping.price}</p>
      {isCurrentSelected && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}
    </Button>
  );
};

export default ToppingCard;
