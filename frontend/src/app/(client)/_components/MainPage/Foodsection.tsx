"use client";

import Link from "next/link";
import { FoodCard } from "./FoodCard";

export const foods = [
  {
    id: "food12",
    image: "fingerfood.png",
    title: "Finger food",
    price: 12.99,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: "food13",
    image: "fingerfood.png",
    title: "Finger food",
    price: 12.99,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: "food14",
    image: "fingerfood.png",
    title: "Finger food",
    price: 12.99,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: "food15",
    image: "fingerfood.png",
    title: "Finger food",
    price: 12.99,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: "food16",
    image: "fingerfood.png",
    title: "Finger food",
    price: 12.99,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: "food17",
    image: "fingerfood.png",
    title: "Finger food",
    price: 12.99,
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
];
type FoodSectionProps = {
  categoryName: string;
};

export const FoodSection = (props: FoodSectionProps) => {
  const { categoryName } = props;
  return (
    <div className="w-screen px-22 bg-[#404040] gap-13.5 flex items-center flex-col">
      <Link href={`/menu/${categoryName}`}>
        <p className="font-semibold text-3xl text-[#FFFFFF] place-self-start;">
          {categoryName}
        </p>
      </Link>
      <div className="w-316 grid grid-rows-2 grid-cols-3 gap-9 justify-center pb-13.5 ">
        {foods.map((food) => (
          <FoodCard
            key={food?.id}
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
