import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { restaurantsInfo } from "@/data/restaurants_list";
import RestaurantCard from "@/app/menu/components/restaurant_card";
import { Search } from "lucide-react";
import ProgressBar from "../../progress_bar";
import ProgressCircle from "../../progress_circle";

export const Restaurant = () => {
  return (
    <section className="">
      <ProgressBar />
      <ProgressCircle />
      <form className="p-4">
        <div className="bg-white border-2 shadow p-2 relative rounded-xl flex">
          <input
            type="text"
            placeholder="Look for Restaurants!"
            className=" border-white outline-none border-0 w-full rounded-xl p-2"
          />
          <span className="w-auto flex justify-end items-center text-gray-500 p-2">
            <Search />
          </span>
        </div>
      </form>
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
                {restaurantsInfo.map((resInfo) => {
                  return (
                    <RestaurantCard
                      key={resInfo.id}
                      resInfo={resInfo}
                    ></RestaurantCard>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="delivery">
              <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                {restaurantsInfo
                  .filter((resInfo) => resInfo.services.includes("delivery"))
                  .map((resInfo) => {
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
                {restaurantsInfo
                  .filter((resInfo) => resInfo.services.includes("takeaway"))
                  .map((resInfo) => {
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
                {restaurantsInfo
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
              </div>
            </TabsContent>
          </>
        </Tabs>
      </div>
    </section>
  );
};
