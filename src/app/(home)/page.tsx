import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import ProductCard, { Product } from "./components/product-card";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/burger.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/burger.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/burger.png",
    price: 500,
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/burger.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/burger.png",
    price: 500,
  },
  {
    id: "6",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/burger.png",
    price: 500,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white  py-44">
        <div className="container flex items-center justify-between ">
          <div>
            <h1 className="text-7xl font-black font-sans ">
              Delivering satisfaction everyday
              <br />
              <span className="text-primary">You call, we deliver !</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get Your Pizza Now
            </Button>
          </div>
          <div>
            <Image
              src="/burger.svg"
              alt="burger"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza" className="">
            <TabsList>
              <TabsTrigger value="pizza" className="text-lg">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-lg">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              {" "}
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
