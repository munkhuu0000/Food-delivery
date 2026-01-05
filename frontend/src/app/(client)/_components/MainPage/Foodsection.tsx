"use client";

import Link from "next/link";
import { FoodItemType, foodItems } from "../../page";
import { FoodCard } from "./FoodCard";

// type FoodSectionProps = {
//   categoryName: string;
// };
interface FoodSectionProps {
  key: string;
  categoryName: string;
  id: string;
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
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-3">
        {foodItems.map((el) => (
          <FoodCard
            key={el?.id}
            id={el.id}
            image={el.image}
            overview={el.overview}
            title={el.title}
            price={el.price}
            categoryId={el.categoryId}
          />
        ))}
      </div>
    </div>
  );
};
