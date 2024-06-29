import ProductCard from "@/app/(home)/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/food_list";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MenuSection = () => {
  return (
    <section className="container">
      <div className="  pb-12">
        <Tabs defaultValue="food" className="">
          <TabsList>
            <TabsTrigger value="food" className="text-lg">
              Food
            </TabsTrigger>
            <TabsTrigger value="beverages" className="text-lg">
              Beverages
            </TabsTrigger>
          </TabsList>
          <TabsContent value="food">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {products
                .filter((product) => product.category === "food")
                .map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>

            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TabsContent>
          <TabsContent value="beverages">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {products
                .filter((product) => product.category === "beverage")
                .map((product) => (
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
