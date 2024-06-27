import ProductCard from "@/app/(home)/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/food_list";

const MenuSection = () => {
  return (
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
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="beverages">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
