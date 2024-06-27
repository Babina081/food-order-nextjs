import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import ProductCard from "./(home)/components/product-card";
import CarouselBannerImage from "./(home)/components/carousel-banner-image";
import { products } from "@/data/food_list";

export default function Home() {
  return (
    <>
      <section className=" pt-[3rem] pb-[3rem] relative z-0 container  ">
        <div className="flex flex-col md:flex-row items-center justify-between overflow-hidden gap-4 w-full">
          <div className=" text-center md:text-left  w-auto md:w-2/4  lg:w-[60%] ">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black font-sans ">
              Delivering satisfaction everyday
              <br />
              <span className="text-primary">You call, we deliver !</span>
            </h1>
            <p className="text-lg lg:text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Order Now
            </Button>
          </div>

          <div className=" w-auto md:w-2/4  lg:w-[40%]">
            {/* <CarouselBannerImage /> */}
            <Image
              src="/burger.svg"
              alt="burger"
              width={400}
              height={400}
              className="w-full h-full  "
            ></Image>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="  py-12">
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
