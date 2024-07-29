"use client";
import ProductCard from "@/app/(home)/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/food_list";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const PRODUCTS_PER_PAGE = 12;

const MenuSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("food");
  const filteredProducts = products.filter(
    (product) => product.category === currentCategory
  );
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
  return (
    <section className="container">
      <div className="  pb-12">
        <Tabs
          defaultValue="food"
          onValueChange={(value) => {
            setCurrentCategory(value);
            setCurrentPage(1); // Reset to page 1 on category change
          }}
          className=""
        >
          <TabsList>
            <TabsTrigger value="food" className="text-lg">
              Food
            </TabsTrigger>
            <TabsTrigger value="beverages" className="text-lg">
              Beverages
            </TabsTrigger>
          </TabsList>
          <TabsContent value={currentCategory}>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {displayedProducts.length ? (
                displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={`cursor-pointer  ${
                        currentPage === 1 ? "opacity-30" : " cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        className={`cursor-pointer rounded-full ${
                          currentPage === page
                            ? "hover:bg-orange-300 bg-orange-400 text-white hover:text-white  rounded-full"
                            : ""
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={`${
                        currentPage === totalPages
                          ? "opacity-30"
                          : "cursor-pointer "
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
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
