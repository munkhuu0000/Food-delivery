"use client";

import { FoodItemType } from "../../page";
import { FoodCard } from "./FoodCard";
import { FoodSection } from "./Foodsection";
interface MainPageProps {
  categories: { categoryName: string; categoryId: string }[];
  food: FoodItemType[];
  onItemClick: (item: FoodItemType) => void;
}

export const MainPage = ({ categories, food, onItemClick }: MainPageProps) => {
  return (
    <>
      <div className="w-screen ">
        <img src="/BG.png" alt="" className="w-screen" />
      </div>
      <div>
        {categories.slice(1, 5).map((el) => (
          <FoodSection
            key={el?.categoryId}
            categoryName={el?.categoryName}
            id={el?.categoryId}
          />
        ))}
      </div>
    </>
  );
};
