"use client";

import { FoodCard } from "./FoodCard";

const foods = [
  {
    image: "fingerfood.png",
    title: "finger food",
    price: "12.99$",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "fingerfood.png",
    title: "finger food",
    price: "12.99$",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "fingerfood.png",
    title: "finger food",
    price: "12.99$",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "fingerfood.png",
    title: "finger food",
    price: "12.99$",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "fingerfood.png",
    title: "finger food",
    price: "12.99$",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "fingerfood.png",
    title: "finger food",
    price: "12.99$",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

export const FoodSections = () => {
  return (
    <>
      <div className="w-screen h-180 px-22 bg-[#404040] gap-54">
        <p className="font-semibold text-3xl text-[#FFFFFF]">Appetizers</p>
        <div className="w-100% grid grid-rows-2 grid-cols-3 gap-9 justify-center ">
          {foods.map((food, index) => (
            <FoodCard
              key={index}
              image={food.image}
              title={food.title}
              price={food.price}
              overview={food.overview}
            />
          ))}
        </div>
      </div>
    </>
  );
};
