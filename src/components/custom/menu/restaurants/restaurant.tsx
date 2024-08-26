"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantCard from "@/components/custom/menu/restaurants/restaurant_card";
import { RestaurantInfoType } from "@/app/(home)/restaurants/page";
import { restaurantsInfo } from "@/data/restaurants_list";
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, ArrowUpAZ, Clock } from "lucide-react";
import OpenCloseStatus from "./open_close_status";

interface Props {
  restaurants: RestaurantInfoType[];
}

export const Restaurant: React.FC<Props> = () => {
  const getInitialSortOrder = (): "asc" | "desc" => {
    if (typeof window !== "undefined") {
      const savedSortOrder = localStorage.getItem("sortOrder");
      if (savedSortOrder === "asc" || savedSortOrder === "desc") {
        return savedSortOrder;
      }
    }
    return "asc"; // default value
  };
  const [restaurantList, setRestaurantList] =
    useState<RestaurantInfoType[]>(restaurantsInfo);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    getInitialSortOrder
  );
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    sortRestaurants(sortOrder);
  }, [sortOrder, availabilityFilter]);

  const sortRestaurants = (order: "asc" | "desc") => {
    const sortedList = [...restaurantList].sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setRestaurantList(sortedList);
  };

  const handleSortAscending = () => {
    setSortOrder("asc");
    sortRestaurants("asc");
  };

  const handleSortDescending = () => {
    setSortOrder("desc");
    sortRestaurants("desc");
  };

  const filterRestaurants = (filterType: string) => {
    let filteredList = [...restaurantList];

    if (availabilityFilter !== null) {
      filteredList = filteredList.filter(
        (resInfo) => resInfo.isAvailable === availabilityFilter
      );
    }

    if (filterType === "all") {
      return filteredList;
    }
    if (filterType === "delivery-takeaway") {
      return filteredList.filter(
        (resInfo) =>
          resInfo.services.includes("delivery") &&
          resInfo.services.includes("takeaway")
      );
    }
    return filteredList.filter((resInfo) =>
      resInfo.services.includes(filterType)
    );
  };

  const handleAvailabilityFilter = (isAvailable: boolean | null) => {
    setAvailabilityFilter(isAvailable);
    if (isAvailable === null) {
      // Reset sort order to default (ascending) when clearing the filter
      setSortOrder("asc");
      sortRestaurants("asc");
    }
  };

  return (
    <div className=" w-5/5 flex gap-2 relative">
      <div className="hidden sm:flex w-1/5 bg-gray-400/20 rounded-lg p-2  flex-col sticky top-0 h-[50vh]">
        <Button
          className="text-lg font-bold mb-4 w-full lg:w-1/2"
          onClick={() => handleAvailabilityFilter(null)}
        >
          Clear filter
        </Button>
        <div className="flex gap-2 items-center ">
          <Clock className="h-4 w-4" />
          <span className="font-bold">Opening status</span>
        </div>
        <div className="w-full mx-auto h-[0.1px] m-2 bg-gray-500/20 rounded-full"></div>
        <OpenCloseStatus
          onFilterChange={handleAvailabilityFilter}
        ></OpenCloseStatus>
      </div>
      <div className="w-full sm:w-3/5 overflow-y-auto h-screen">
        <div className="pb-12 ">
          <Tabs defaultValue="all" className="  ">
            <div className="overflow-x-auto flex flex-nowrap sticky top-0 bg-white z-10 ">
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
              {["all", "delivery", "takeaway", "delivery-takeaway"].map(
                (type) => (
                  <TabsContent key={type} value={type}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
                      {filterRestaurants(type).map((resInfo) => (
                        <RestaurantCard key={resInfo.id} resInfo={resInfo} />
                      ))}
                    </div>
                  </TabsContent>
                )
              )}
            </>
          </Tabs>
        </div>
      </div>
      <div className="hidden w-1/5 bg-gray-400/20 rounded-lg p-2  sm:flex flex-col gap-3 sticky top-0  h-[50vh]">
        <div className="mb-2 font-bold">Sort By</div>
        <button
          className={`flex gap-2 items-center ${
            sortOrder === "asc" ? "text-orange-400" : "hover:text-orange-400"
          }`}
          onClick={handleSortAscending}
        >
          <ArrowDownAZ />
          <span>Ascending</span>
        </button>
        <button
          className={`flex gap-2 items-center ${
            sortOrder === "desc" ? "text-orange-400" : "hover:text-orange-400"
          }`}
          onClick={handleSortDescending}
        >
          <ArrowUpAZ />
          <span>Descending</span>
        </button>
      </div>
    </div>
  );
};
