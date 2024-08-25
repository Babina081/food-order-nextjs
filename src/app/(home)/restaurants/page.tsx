
import { Restaurant } from "@/components/custom/menu/restaurants/restaurant";
import { MenuProps, restaurantsInfo } from "@/data/restaurants_list";
// import { Restaurant } from "@/data/restaurants_list";
import React, { useEffect, useState } from "react";

export interface RestaurantInfoType {
  id: string | number;
  name: string;
  locationUrl: string;
  address: string;
  isAvailable: boolean;
  isFavorite?: boolean;
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
      <Restaurant restaurants={restaurantsInfo} />
    </section>
  );
}
