import { Restaurant } from "@/components/custom/restaurant";
import React from "react";

const MenuPage = () => {
  return (
    <section className="container flex flex-col w-full mx-auto gap-4 py-10 ">
      <h1 className=" font-bold text-3xl text-center border-b-2 border-primary  w-auto mx-auto  text-primary ">
        Restaurants
      </h1>
      <Restaurant></Restaurant>
    </section>
  );
};

export default MenuPage;
