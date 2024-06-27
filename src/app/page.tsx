
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProductCard from "./(home)/components/product-card";
import CarouselBannerImage from "./(home)/components/carousel-banner-image";
import { products } from "@/data/food_list";
import BannerSection from "@/components/custom/home/banner_section";

export default function Home() {
  return (
    <>
    <BannerSection/>

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
