"use client";

import { Badge } from "@/components/ui/badge";
import { FoodType, CategoriesType } from "../page";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { api } from "@/lib/axios";
import { Plus } from "lucide-react";

type FoodBadgeProps = {
  categories: CategoriesType[];
  foods: FoodType[];
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
  setCategory: React.Dispatch<React.SetStateAction<CategoriesType[]>>;
};

export function FoodBadge(props: FoodBadgeProps) {
  const {
    categories,
    foods,
    selectedCategoryId,
    onCategoryChange,
    setCategory,
  } = props;
  const AllDishesId = "696783cbf10d3a004417b6d6";
  const sortedCategories = [...categories].sort((a, b) => {
    if (a._id === "AllDishesId") return -1;
    if (b._id === "AllDishesId") return 1;
    return a.name.localeCompare(b.name);
  });

  const handleDeleteCategory = (id: string) => {
    setCategory((prev) => prev.filter((cat) => cat._id !== id));
  };

  const handleDelete = async (e: React.MouseEvent, categoryId: string) => {
    e.stopPropagation();

    if (confirm("Are you sure to delete this category?")) {
      try {
        await api.delete(`category/${categoryId}`);
        handleDeleteCategory(categoryId);
      } catch (error) {
        console.error("Can not deleted", error);
        alert("Can not deleted.");
      }
    }
  };

  const handleAddCategory = async () => {
    const categoryName = prompt("Insert category name:");

    if (categoryName && categoryName.trim() !== "") {
      try {
        const response = await api.post("category", { name: categoryName });
        setCategory((prev) => [...prev, response.data]);
        alert("Succesfully added");
      } catch (error) {
        console.error("Can't add category", error);
        alert("Can not added");
      }
    }
  };

  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-col gap-4 h-24 bg-[#FFFFFF]">
      <p className="text-[#09090B] text-[20px] font-bold">Dishes category</p>
      <div className="w-full flex flex-row gap-3 items-center">
        {sortedCategories.map((category) => {
          const isActive = selectedCategoryId === category?._id;
          const count =
            category._id === AllDishesId
              ? foods.length
              : foods.filter((food) =>
                  food.categoryIds.some((c) => c._id === category._id),
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
              <Button
                variant="outline"
                className="w-7 h-7 hover:border-[#EF4444]"
                onClick={(e) => handleDelete(e, category._id)}
              >
                <Trash />
              </Button>
            </Badge>
          );
        })}
        <Button
          variant={"outline"}
          className="w-9 h-9 rounded-full bg-[#EF4444] text-white"
          onClick={handleAddCategory}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
