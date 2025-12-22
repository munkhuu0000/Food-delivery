"use client";

import { FoodSection } from "./Foodsection";

const foodCategory = [
  {
    categoryName: "Appetizers",
  },
  {
    categoryName: "Salads",
  },
  {
    categoryName: "Lunchfavorites",
  },
  {
    categoryName: "Drinks",
  },
];

export const MainPageSections = () => {
  return (
    <div>
      {foodCategory.map((el) => {
        return (
          <FoodSection key={el?.categoryName} categoryName={el?.categoryName} />
        );
      })}
    </div>
  );
};
