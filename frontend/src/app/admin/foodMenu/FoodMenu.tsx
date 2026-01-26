"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminFoodCard } from "./AdminFoodCard";
import { FoodType, CategoriesType } from "../page";
import { FoodForm } from "./FoodForm";

type FoodMenuProps = {
  categories: CategoriesType[];
  foods: FoodType[];
  setFoods: React.Dispatch<React.SetStateAction<FoodType[]>>;
};

export function FoodMenu(props: FoodMenuProps) {
  const { categories, foods, setFoods } = props;
  const [open, setOpen] = useState(false);
  const [editFood, setEditFood] = useState<FoodType | null>(null);
  const defaultValues = {
    foodname: editFood?.name || "",
    foodPrice: editFood?.price || 0,
    category: editFood?.categoryIds[0] || { _id: "", name: "" },
    ingredients: editFood?.ingredients || "",
    image: editFood?.image || "",
    _id: editFood?._id,
  };

  const handleAddNew = () => {
    setEditFood(null);
    setOpen(true);
  };

  const handleEdit = (food: FoodType) => {
    setEditFood(food);
    setOpen(true);
  };

  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-row gap-4 flex-wrap">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            onClick={handleAddNew}
            className="w-70 h-60 border border-[#EF4444] border-dashed stroke-dasharray='8%2c 8' flex flex-col justify-center items-center"
          >
            <Button className="w-10 h-10 rounded-full bg-[#EF4444] text-white">
              <Plus />
            </Button>
            <p className="text-[14px] font-medium">Add new Dish</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-115 flex gap-6 flex-col">
          <DialogHeader>
            <DialogTitle>{editFood ? "Edit dish" : "Add New Dish"}</DialogTitle>
            <DialogDescription className="text-[18px] font-semibold text-[#09090B]"></DialogDescription>
          </DialogHeader>
          <FoodForm
            foods={foods}
            categories={categories}
            defaultValues={defaultValues}
            setFoods={setFoods}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
      <div className="flex-1 h-auto flex flex-row gap-4 items-start justify-start rounded-4xl flex-wrap">
        {foods.map((el) => (
          <AdminFoodCard key={el?._id} {...el} onEdit={() => handleEdit(el)} />
        ))}
      </div>
    </div>
  );
}
