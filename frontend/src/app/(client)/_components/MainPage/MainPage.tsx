"use client";

import { FoodItem, foodItems } from "../../page";
import { FoodCard } from "./FoodCard";
import { FoodSection } from "./Foodsection";
interface MainPageProps {
  categories: { categoryName: string; categoryId: string }[];
  food: FoodItem[];
  onItemClick: (item: FoodItem) => void;
}

export const MainPage = ({ categories, food, onItemClick }: MainPageProps) => {
  return (
    <>
      <div className="w-screen ">
        <img src="/BG.png" alt="" className="w-screen" />
      </div>
      <div>
        {categories.slice(1, 5).map((el) => (
          <FoodSection key={el?.categoryId} categoryName={el?.categoryName} />
        ))}
        {food.map((foods) => (
          <FoodCard key={foods?.id} food={foods} onClick={onItemClick} />
        ))}
      </div>
    </>
  );
};
