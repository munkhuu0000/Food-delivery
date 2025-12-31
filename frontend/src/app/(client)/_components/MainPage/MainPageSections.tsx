"use client";

import { FoodSection } from "./Foodsection";

export const foodCategory = [
  {
    categoryName: "All Dishes",
    categoryId: "C0",
  },
  {
    categoryName: "Appetizers",
    categoryId: "C1",
  },
  {
    categoryName: "Salads",
    categoryId: "C2",
  },
  {
    categoryName: "Lunchfavorites",
    categoryId: "C3",
  },
  {
    categoryName: "Drinks",
    categoryId: "C4",
  },
];

export const MainPageSections = () => {
  return (
    <div>
      {foodCategory.map((el) => {
        return (
          <FoodSection key={el?.categoryId} categoryName={el?.categoryName} />
        );
      })}
    </div>
  );
};
