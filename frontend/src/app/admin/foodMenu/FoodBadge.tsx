"use client";
import { foodCategory } from "@/app/(client)/page";
import { foodItems } from "@/app/(client)/page";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function FoodBadge() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("C0");

  const filteredFoods = foodItems.filter((food) => {
    if (selectedCategoryId === "C0") return true;
    return food?.categoryId === selectedCategoryId;
  });
  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-col gap-4 h-24 bg-[#FFFFFF]">
      <p className="text-[#09090B] text-[20px] font-bold">Dishes category</p>
      <div className="w-full flex flex-row gap-3">
        {foodCategory?.map((category) => (
          <Badge
            variant="outline"
            key={category?.categoryId}
            className={`flex flex-row gap-2 py-2 px-4 ${
              selectedCategoryId === category.categoryId
                ? "border-[#EF4444]"
                : "outline"
            }`}
            onClick={() => setSelectedCategoryId(category.categoryId)}
          >
            {category?.categoryName}
            {filteredFoods?.length}
          </Badge>
        ))}
      </div>
    </div>
  );
}
