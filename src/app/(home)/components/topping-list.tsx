"use client";
import React from "react";
import ToppingCard, { Topping } from "./topping-card";

const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: "/Subject.png",
    price: 500,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Chicken",
    image: "/Subject.png",
    price: 500,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Chicken",
    image: "/Subject.png",
    price: 500,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]);

  const handleCheckboxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedToppings.some(
      (element) => element.id === topping.id
    );

    //implicit return
    if (isAlreadyExists) {
      setSelectedToppings((prev) =>
        prev.filter((elm) => elm.id !== topping.id)
      );
      return;
    }

    setSelectedToppings((prev) => [...prev, topping]);
  };

  return (
    <section className="mt-6">
      <h3>Extra Toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => (
          <ToppingCard
            topping={topping}
            key={topping.id}
            selectedToppings={selectedToppings}
            handleCheckboxCheck={handleCheckboxCheck}
          />
        ))}
      </div>
    </section>
  );
};

export default ToppingList;
