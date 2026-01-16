"use client";

import { Badge } from "@/components/ui/badge";
import { FoodType, CategoriesType } from "../page";

type FoodBadgeProps = {
  categories: CategoriesType[];
  foods: FoodType[];
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
};

export function FoodBadge(props: FoodBadgeProps) {
  const { categories, foods, selectedCategoryId, onCategoryChange } = props;
  const AllDishesId = "696783cbf10d3a004417b6d6";
  const sortedCategories = [...categories].sort((a, b) => {
    if (a._id === "AllDishesId") return -1;
    if (b._id === "AllDishesId") return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-col gap-4 h-24 bg-[#FFFFFF]">
      <p className="text-[#09090B] text-[20px] font-bold">Dishes category</p>
      <div className="w-full flex flex-row gap-3">
        {sortedCategories.map((category) => {
          const isActive = selectedCategoryId === category?._id;
          const count =
            category._id === AllDishesId
              ? foods.length
              : foods.filter((food) =>
                  food.categoryIds.some((c) => c._id === category._id)
                ).length;
          return (
            <Badge
              variant="outline"
              key={category?._id}
              onClick={() => onCategoryChange(category?._id)}
              className={`flex flex-row gap-2 py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors ${
                isActive ? "border border-[#EF4444]  " : ""
              }`}
            >
              {category?.name}
              <span className="text-xs ">{count}</span>
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
