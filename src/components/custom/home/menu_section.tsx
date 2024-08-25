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
  const [foodPage, setFoodPage] = useState(1);
  const [beveragesPage, setBeveragesPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("food");
  const filteredFoodProducts = products.filter(
    (product) => product.category === "food"
  );
  const filteredBeveragesProducts = products.filter(
    (product) => product.category === "beverage"
  );
  const foodTotalPages = Math.ceil(
    filteredFoodProducts.length / PRODUCTS_PER_PAGE
  );
  const beveragesTotalPages = Math.ceil(
    filteredBeveragesProducts.length / PRODUCTS_PER_PAGE
  );

  const handleFoodPageChange = (page: number) => {
    if (page >= 1 && page <= foodTotalPages) {
      setFoodPage(page);
    }
  };

  const handleBeveragesPageChange = (page: number) => {
    if (page >= 1 && page <= beveragesTotalPages) {
      setBeveragesPage(page);
    }
  };

  const displayedFoodProducts = filteredFoodProducts.slice(
    (foodPage - 1) * PRODUCTS_PER_PAGE,
    foodPage * PRODUCTS_PER_PAGE
  );

  const displayedBeveragesProducts = filteredBeveragesProducts.slice(
    (beveragesPage - 1) * PRODUCTS_PER_PAGE,
    beveragesPage * PRODUCTS_PER_PAGE
  );
  return (
    <section className="container">
      <div className="pb-12">
        <Tabs
          defaultValue="food"
          onValueChange={(value) => {
            setCurrentCategory(value);
            if (value === "food") {
              setFoodPage(1); // Reset to page 1 on category change
            } else if (value === "beverages") {
              setBeveragesPage(1); // Reset to page 1 on category change
            }
          }}
        >
          <TabsList>
            <TabsTrigger value="food" className="text-lg">
              Food
            </TabsTrigger>
            <TabsTrigger value="beverages" className="text-lg">
              Beverages
            </TabsTrigger>
          </TabsList>

          {/* Food Tab Content */}
          <TabsContent value="food">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {displayedFoodProducts.length ? (
                displayedFoodProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>

            {foodTotalPages > 1 && (
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handleFoodPageChange(foodPage - 1)}
                      className={`${
                        foodPage === 1
                          ? "opacity-30 cursor-default"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                  {Array.from(
                    { length: foodTotalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handleFoodPageChange(page)}
                        className={`cursor-pointer rounded-full ${
                          foodPage === page
                            ? "hover:bg-orange-300 bg-orange-400 text-white hover:text-white rounded-full"
                            : ""
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handleFoodPageChange(foodPage + 1)}
                      className={`${
                        foodPage === foodTotalPages
                          ? "opacity-30 cursor-default"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </TabsContent>

          {/* Beverages Tab Content */}
          <TabsContent value="beverages">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {displayedBeveragesProducts.length ? (
                displayedBeveragesProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>

            {beveragesTotalPages > 1 && (
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        handleBeveragesPageChange(beveragesPage - 1)
                      }
                      className={`${
                        beveragesPage === 1
                          ? "opacity-30 cursor-default"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                  {Array.from(
                    { length: beveragesTotalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handleBeveragesPageChange(page)}
                        className={`cursor-pointer rounded-full ${
                          beveragesPage === page
                            ? "hover:bg-orange-300 bg-orange-400 text-white hover:text-white rounded-full"
                            : ""
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handleBeveragesPageChange(beveragesPage + 1)
                      }
                      className={`${
                        beveragesPage === beveragesTotalPages
                          ? "opacity-30 cursor-default"
                          : "cursor-pointer"
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
