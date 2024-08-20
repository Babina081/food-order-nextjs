import OpenCloseStatus from "@/components/custom/menu/restaurants/open_close_status";
import { Restaurant } from "@/components/custom/menu/restaurants/restaurant";
import { Button } from "@/components/ui/button";
import { MenuProps } from "@/data/restaurants_list";
import { ArrowDownAZ, ArrowUpAZ, ArrowUpZA, Clock } from "lucide-react";
import { GetServerSideProps } from "next";
// import { Restaurant } from "@/data/restaurants_list";
import React, { useEffect, useState } from "react";

export interface RestaurantInfoType {
  id: number;
  name: string;
  locationUrl: string;
  address: string;
  isAvailable: boolean;
  isFavorite: boolean;
  favCount: number;
  menuLists: MenuProps[];
  services: string[];
  restaurantImage: string;
  gallery: string[];
  minOrder: number;
  reviewNum?: number;
  rating: number;
  image: string;
  images: string[];
  isFeatured: boolean;
  orderLimit: number;
  dateCreated: Date;
}

interface MenuPageProps {
  restaurants: RestaurantInfoType[];
}

// const getRestaurants = async () => {
//   try {
//     const response = await fetch(`http://localhost:3000/api/v1/restaurants`, {
//       method: "GET",
//     });
//     console.log("response is.................." + response.ok);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const json = await response.json();
//     console.log("json is.................." + JSON.stringify(json));

//     // const data = JSON.stringify(json);

//     return json.restaurantList;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function MenuPage() {
  // const restaurants = await getRestaurants();

  return (
    <section className="container flex flex-col mx-auto gap-4 py-10 ">
      <h1 className=" font-bold text-3xl text-center border-b-2 border-primary  w-4/5 mx-auto  text-primary ">
        Restaurants
      </h1>
      <div className=" w-5/5 flex gap-2">
        <div className="hidden sm:flex w-1/5 bg-gray-400/20 rounded-lg p-2  flex-col ">
          <Button className="text-lg font-bold mb-4 w-full lg:w-1/2">
            Clear filter
          </Button>
          <div className="flex gap-2 items-center ">
            <Clock className="h-4 w-4" />
            <span className="font-bold">Opening status</span>
          </div>
          <div className="w-full mx-auto h-[0.1px] m-2 bg-gray-500/20 rounded-full"></div>
          <OpenCloseStatus></OpenCloseStatus>
        </div>
        <div className="w-full sm:w-3/5 ">
          {/* {restaurants ? (
            <Restaurant restaurants={restaurants} />
          ) : (
            <p>Loading...</p>
          )} */}
          <Restaurant restaurants={[]}></Restaurant>
        </div>
        <div className="hidden w-1/5 bg-gray-400/20 rounded-lg p-2 h-auto sm:flex flex-col gap-3">
          <div className="mb-2 font-bold">Sort By</div>
          <button className="flex gap-2 items-center hover:text-orange-400">
            <ArrowDownAZ />
            <span>Ascending</span>
          </button>
          <button className="flex gap-2 items-center hover:text-orange-400">
            <ArrowUpAZ />
            <span>Dscending</span>
          </button>
        </div>
      </div>
    </section>
  );
}
