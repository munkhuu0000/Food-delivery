"use client";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FoodType } from "../page";
import { FoodForm } from "./FoodForm";

export const AdminFoodCard = ({
  food,
  onEdit,
}: {
  food: FoodType;
  onEdit: () => void;
}) => {
  return (
    <Dialog>
      <div className="relative group w-70 h-60 rounded-4xl p-3 bg-[#FFFFFF] border flex flex-col justify-center items-center ">
        <div className="w-59.5 h-32.25 rounded-4xl overflow-hidden ">
          <img
            src={food.image}
            alt=""
            className="w-full h-full object-cover rounded-4xl transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4 w-full flex flex-row justify-between items-center">
          <p className="text-[#EF4444] text-2xl font-semibold">{food.name}</p>
          <p className="text-[#09090B] text-[18px] font-semibold">
            ₮{food.price}
          </p>
        </div>
        <p className="text-[#09090B] text-[14px] font-normal">
          {food.ingredients}
        </p>
        <DialogTrigger asChild>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="w-11 h-11 rounded-full z-10 absolute bottom-30 right-10 flex items-center
          justify-center transition-all duration-300 bg-[#FFFFFF] shadow-lg"
          >
            <Pencil className="w-6 h-6 text-[#EF4444]" />
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-206.5 min-h-103 bg-[#FFFFFF] p-6 gap-6 flex justify-center items-center rounded-4xl [&>button]:hidden">
          <DialogHeader className="sr-only">
            <DialogTitle className="sr-only"></DialogTitle>
            <DialogDescription className="sr-only"></DialogDescription>
          </DialogHeader>
          {/* <FoodForm /> */}
        </DialogContent>
      </div>
    </Dialog>
  );
};
