"use client";

import { FoodType, CategoriesType } from "@/app/admin/page";
import { FoodSection } from "./Foodsection";
interface MainPageProps {
  categories: CategoriesType[];
  foods: FoodType[];
}

export const MainPage = ({ categories, foods }: MainPageProps) => {
  return (
    <>
      <div className="w-screen ">
        <img src="/BG.png" alt="" className="w-screen" />
      </div>
      <div>
        {categories.slice(1, 5).map((el) => (
          <FoodSection
            key={el?._id}
            categoryName={el?.name}
            id={el?._id}
            food={foods}
          />
        ))}
      </div>
    </>
  );
};
