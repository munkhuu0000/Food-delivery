"use client";

import Link from "next/link";
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
type FoodSectionProps = {
  categoryName: string;
};

export const FoodSection = (props: FoodSectionProps) => {
  const { categoryName } = props;
  return (
    <div className="w-screen px-22 bg-[#404040] gap-13.5 flex items-center flex-col">
      <Link href={`/category/${categoryName}`}>
        <p className="font-semibold text-3xl text-[#FFFFFF] place-self-start;">
          {categoryName}
        </p>
      </Link>
      <div className="w-316 grid grid-rows-2 grid-cols-3 gap-9 justify-center pb-13.5 ">
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
  );
};
