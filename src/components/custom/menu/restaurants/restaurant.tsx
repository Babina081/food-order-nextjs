"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { restaurantsInfo } from "@/data/restaurants_list";
import RestaurantCard from "@/components/custom/menu/restaurants/restaurant_card";
import { Search } from "lucide-react";
import ProgressBar from "../../progress_bar";
import ProgressCircle from "../../progress_circle";
import SearchForm from "./searchForm";
import { RestaurantInfoType } from "@/app/(home)/menu/page";

interface Props {
  restaurants: RestaurantInfoType[];
}

export const Restaurant: React.FC<Props> = ({ restaurants }) => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<RestaurantInfoType[]>(restaurants);
  // const handleSearch = (query: string) => {
  //   setFilteredRestaurants(
  //     restaurantsInfo.filter((resInfo) =>
  //       resInfo.name.toLowerCase().includes(query.toLowerCase())
  //     )
  //   );
  // };

  return (
    <section className="">
      <ProgressBar />
      <ProgressCircle />
      {/* <SearchForm onSearch={handleSearch} /> */}
      <div className="pb-12 ">
        <Tabs defaultValue="all" className="  ">
          <div className="overflow-x-auto flex flex-nowrap ">
            {" "}
            <TabsList className="flex">
              <TabsTrigger value="all" className="text-lg ">
                All
              </TabsTrigger>
              <TabsTrigger value="delivery" className="text-lg">
                Delivery
              </TabsTrigger>
              <TabsTrigger value="takeaway" className="text-lg">
                Takeaway
              </TabsTrigger>
              <TabsTrigger value="delivery-takeaway" className="text-lg">
                Takeaway & Delivery
              </TabsTrigger>
            </TabsList>
          </div>

          <>
            <TabsContent value="all">
              <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {/* {
                  restaurantsInfo.map((resInfo) => {
                    return (
                      <>
                        <RestaurantCard
                          key={resInfo.id}
                          resInfo={resInfo}
                        ></RestaurantCard>
                      </>
                    );
                  })} */}
                {filteredRestaurants.map((resInfo) => {
                  return (
                    <RestaurantCard
                      key={resInfo.id}
                      resInfo={resInfo}
                    ></RestaurantCard>
                  );
                })}
              </div>
            </TabsContent>
            {/* <TabsContent value="delivery">
              <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {!handleSearch &&
                  restaurantsInfo
                    .filter((resInfo) => resInfo.services.includes("delivery"))
                    .map((resInfo) => {
                      return (
                        <RestaurantCard
                          key={resInfo.id}
                          resInfo={resInfo}
                        ></RestaurantCard>
                      );
                    })}
                {filteredRestaurants.map((resInfo) => {
                  return (
                    <RestaurantCard
                      key={resInfo.id}
                      resInfo={resInfo}
                    ></RestaurantCard>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="takeaway">
              <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {!handleSearch &&
                  restaurantsInfo
                    .filter((resInfo) => resInfo.services.includes("takeaway"))
                    .map((resInfo) => {
                      return (
                        <RestaurantCard
                          key={resInfo.id}
                          resInfo={resInfo}
                        ></RestaurantCard>
                      );
                    })}
                {filteredRestaurants.map((resInfo) => {
                  return (
                    <RestaurantCard
                      key={resInfo.id}
                      resInfo={resInfo}
                    ></RestaurantCard>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="delivery-takeaway">
              <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {!handleSearch &&
                  restaurantsInfo
                    .filter(
                      (resInfo) =>
                        resInfo.services.includes("delivery") &&
                        resInfo.services.includes("takeaway")
                    )
                    .map((resInfo) => {
                      return (
                        <RestaurantCard
                          key={resInfo.id}
                          resInfo={resInfo}
                        ></RestaurantCard>
                      );
                    })}
                {filteredRestaurants.map((resInfo) => {
                  return (
                    <RestaurantCard
                      key={resInfo.id}
                      resInfo={resInfo}
                    ></RestaurantCard>
                  );
                })}
              </div>
            </TabsContent> */}
          </>
        </Tabs>
      </div>
    </section>
  );
};
