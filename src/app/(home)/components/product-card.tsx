import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ToppingList from "./topping-list";
import { ShoppingCart } from "lucide-react";
import burgerImage from "../../../../public/burger.svg";
import { useAppDispatch } from "@/lib/store/hooks";
import { add } from "@/lib/store/features/cart/cartSlice";
import toast from "react-hot-toast";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  restaurantId: number;
  quantity: number;
};

type PropTypes = { product: Product };

const sizeOptions: Record<string, number> = {
  small: 0,
  medium: 50,
  large: 100,
};

const crustOptions: Record<string, number> = {
  thin: 0,
  thick: 50,
};

const ProductCard = ({ product }: PropTypes) => {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("small");
  const [selectedCrust, setSelectedCrust] = useState("thin");
  const [toppings, setToppings] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleAddToCart = (product: any) => {
    // const selectedProduct = {
    //   ...product,
    //   selectedSize,
    //   selectedCrust,
    //   toppings,
    //   totalPrice,
    // };
    dispatch(add(product));
    // console.log("Adding to cart", product);
    // dispatch(add(product));
    toast.success(`${product.name} Added to cart`);
    setIsDialogOpen(false);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    calculateTotal(size, selectedCrust, toppings);
  };

  const handleCrustChange = (crust: string) => {
    setSelectedCrust(crust);
    calculateTotal(selectedSize, crust, toppings);
  };

  const handleToppingsChange = (selectedToppings: string[]) => {
    setToppings(selectedToppings);
    calculateTotal(selectedSize, selectedCrust, selectedToppings);
  };

  const calculateTotal = (
    size: string,
    crust: string,
    selectedToppings: string[]
  ) => {
    const sizeCost = sizeOptions[size]; // No error
    const crustCost = crustOptions[crust]; // No error
    const toppingsCost = selectedToppings.length * 20; // Example: Each topping costs Rs 20
    const total = product.price + sizeCost + crustCost + toppingsCost;
    setTotalPrice(total);
  };

  return (
    <Card className="border-none rounded-xl ">
      <CardHeader className="flex items-center justify-center">
        <Image
          alt="burger image"
          src={burgerImage}
          priority
          width={150}
          height={150}
        ></Image>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-4">
        <p>
          <span>From</span>
          <span className="font-bold"> Rs {product.price}</span>
        </p>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
            Choose
          </DialogTrigger>

          <DialogContent className="max-w-3xl p-0 " id="dialog-description">
            <DialogTitle className="hidden">
              Are you absolutely sure?
            </DialogTitle>
            <div className="flex ">
              <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
                <Image
                  alt={product.name}
                  src={burgerImage}
                  priority
                  width={450}
                  height={450}
                ></Image>
              </div>
              <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>
                <div>
                  <h4 className="mt-6">Choose the Size</h4>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                    onValueChange={handleSizeChange}
                  >
                    {Object.keys(sizeOptions).map((size) => (
                      <div key={size}>
                        <RadioGroupItem
                          value={size}
                          id={size}
                          className="peer sr-only"
                          aria-label="Small"
                        />
                        <Label
                          htmlFor={size}
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)} - Rs{" "}
                          {sizeOptions[size]}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="mt-6">Choose the Crust</h4>
                  <RadioGroup
                    defaultValue="thin"
                    className="grid grid-cols-3 gap-4 mt-2"
                    onValueChange={handleCrustChange}
                  >
                    {Object.keys(crustOptions).map((crust) => (
                      <div key={crust}>
                        <RadioGroupItem
                          value={crust}
                          id={crust}
                          className="peer sr-only"
                          aria-label={crust}
                        />
                        <Label
                          htmlFor={crust}
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {crust.charAt(0).toUpperCase() + crust.slice(1)} - Rs{" "}
                          {crustOptions[crust]}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <ToppingList
                  onToppingsChange={handleToppingsChange}
                ></ToppingList>

                <div className="flex items-center mt-12 justify-between ">
                  <span className="font-bold">Rs {totalPrice}</span>
                  <Button onClick={() => handleAddToCart(product)}>
                    <ShoppingCart size={20} />
                    <span className=" ml-2">Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
