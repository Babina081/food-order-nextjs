import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="container flex flex-col gap-4 w-full py-10 h-full">
      <h1 className="ham-h1 font-semibold text-2xl text-center border-b-2 border-primary w-auto mx-auto mb-8 text-primary">
        Know About Us
      </h1>

      <h3 className="text-xl font-bold text-primary">Who We Are ?</h3>

      <p className="text-md text-justify">
        Indulge in culinary excellence delivered right to your doorstep with
        <span className="font-bold"> FOOD-ORDER</span> app. Each dish is
        prepared by meticulous chefs to ensure the utmost quality and taste,
        perfect for packaging and delivery. Whether you are in Pokhara Valley or
        beyond, experience our curated menu crafted for your satisfaction.{" "}
        <br />A unified system for placing food orders from various eateries,
        utilizing an internal delivery team to retrieve orders from restaurants
        and transport them to customers throughout urban areas. Savor the finest
        dining experience effortlessly by visiting{" "}
        <Link
          href="/"
          className="font-bold italic underline cursor-pointer hover:text-primary"
        >
          www.food-order.com.np
        </Link>{" "}
        and placing your order today.
      </p>

      <h3 className="text-xl font-bold text-primary">Why Choose Us ?</h3>
      <p className="text-md text-justify">
        Food-Order is the premier food delivery service in Pokhara, dedicated to
        delivering top-notch, chef-prepared meals right to your doorstep. Our
        menu features only the finest, hygienically-prepared dishes that are
        perfect for delivery. Our internationally trained chefs oversee the
        preparation of all meals, using only the freshest and healthiest
        ingredients in our extremely clean kitchen.
        <br />
        Whether you are ordering for one or for the whole family, we offer a
        diverse range of menu options that will delight your taste buds and
        satisfy your appetite. Place your order now by calling 9812345678,
        messaging us on Viber/WhatsApp, or visiting our website at
        <Link
          href="/"
          className="font-bold italic underline cursor-pointer hover:text-primary"
        >
          www.food-order.com.np
        </Link>{" "}
      </p>
    </section>
  );
};

export default AboutPage;
