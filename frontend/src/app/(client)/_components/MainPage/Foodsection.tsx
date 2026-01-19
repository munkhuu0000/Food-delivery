"use client";

import Link from "next/link";
import { FoodType, CategoriesType } from "@/app/admin/page";
import { FoodCard } from "./FoodCard";

// type FoodSectionProps = {
//   categoryName: string;
// };
interface FoodSectionProps {
  categoryName: string;
  id: string;
  food: FoodType[];
}

export const FoodSection = (props: FoodSectionProps) => {
  const { categoryName, id, food } = props;
  return (
    <div className="w-screen px-22 bg-[#404040] flex items-center flex-col pt-10">
      <Link href={`/menu/${categoryName}`}>
        <p className="font-semibold text-3xl text-[#FFFFFF] place-self-start;">
          {categoryName}
        </p>
      </Link>
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-5 py-10">
        {food.slice(0, 6).map((el) => (
          <FoodCard
            key={el?._id}
            id={el._id}
            image={el.image}
            overview={el.ingredients}
            title={el.name}
            price={el.price}
            categoryId={el.categoryIds}
          />
        ))}
      </div>
    </div>
  );
};
