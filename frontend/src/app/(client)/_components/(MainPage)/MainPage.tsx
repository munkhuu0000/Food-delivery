"use client";

import { FoodSections } from "./Foodsections";

export const MainPage = () => {
  return (
    <>
      <div className="w-screen ">
        <img src="/BG.png" alt="" className="w-screen" />
      </div>
      <FoodSections />
      <FoodSections />
      <FoodSections />
      <FoodSections />
    </>
  );
};
