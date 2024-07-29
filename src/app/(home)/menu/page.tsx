import { Restaurant } from "@/components/custom/menu/restaurants/restaurant";
import { GetServerSideProps } from "next";
// import { Restaurant } from "@/data/restaurants_list";
import React, { useEffect, useState } from "react";

export interface RestaurantInfoType {
  _id: string;
  name: string;
  address: string;
  rating: number;
  reviewNum: number;
  locationUrl: string;
  orderLimit: number;
  image: string;
  images: string[];
  isAvailable: boolean;
  isFeatured: boolean;
  isFavorite: boolean;
  dateCreated: Date;
  __v: number;
  id: string;
}

interface MenuPageProps {
  restaurants: RestaurantInfoType[];
}

const getRestaurants = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/restaurants`, {
      method: "GET",
    });
    console.log("response is.................." + response.ok);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("json is.................." + JSON.stringify(json));

    // const data = JSON.stringify(json);

    return json.restaurantList;
  } catch (error) {
    console.log(error);
  }
};

export default async function MenuPage() {
  const restaurants = await getRestaurants();

  return (
    <section className="container flex flex-col w-full mx-auto gap-4 py-10 ">
      <h1 className=" font-bold text-3xl text-center border-b-2 border-primary  w-auto mx-auto  text-primary ">
        Restaurants
      </h1>
      {restaurants ? (
        <Restaurant restaurants={restaurants} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
