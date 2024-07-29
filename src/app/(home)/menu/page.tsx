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

export const getRestaurants:GetServerSideProps = async () => {
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
const MenuPage: React.FC<MenuPageProps> = ({restaurants}) => {
  // const restaurants = await getRestaurants();
  // const [restaurants, setRestaurants] = useState<RestaurantInfoType[] | null>(
  //   null
  // );

  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     try {
  //       const data = await getRestaurants();
  //       if (data) {
  //         setRestaurants(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching restaurants:", error);
  //     }
  //   };
  //   fetchRestaurants();
  // }, []);

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
};

export default MenuPage;
