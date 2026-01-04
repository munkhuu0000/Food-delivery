"use client";

import Link from "next/link";
import { FoodCard } from "./FoodCard";
import { FoodItem, foodItems } from "../../page";

// type FoodSectionProps = {
//   categoryName: string;
// };
interface FoodSectionProps {
  key: string;
  categoryName: string;
}

export const FoodSection = (props: FoodSectionProps) => {
  const { categoryName } = props;
  return (
    <div className="w-screen px-22 bg-[#404040] gap-13.5 flex items-center flex-col">
      <Link href={`/menu/${categoryName}`}>
        <p className="font-semibold text-3xl text-[#FFFFFF] place-self-start;">
          {categoryName}
        </p>
      </Link>
    </div>
  );
};
