"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { foodCard } from "../Header component/MiniFoodCard";

export const FoodCard = ({ image, title, overview, price }: foodCard) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleButtonClick = () => {
    setIsAdded((prev) => !prev);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="w-99.5 h-87 rounded-4xl p-4 bg-[#FFFFFF] flex flex-col gap-2">
            <div className="w-91.5 h-52.5 rounded-4xl relative">
              <img
                src={image}
                alt=""
                className="w-91.5 h-52.5 object-cover rounded-4xl"
              />
              <div
                className={`
            w-11 h-11 rounded-full z-10 absolute top-[75%] left-[85%] 
            flex items-center justify-center transition-all duration-300
            ${isAdded ? "[bg-#18181B]" : "bg-[#FFFFFF]"}
            shadow-lg
          `}
                onClick={handleButtonClick}
              >
                {isAdded ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <Plus className="w-6 h-6 text-[#EF4444]" />
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-[#EF4444] text-2xl font-semibold">{title}</p>
              <p className="text-[#09090B] text-[18px] font-semibold">
                {price}
              </p>
            </div>
            <p className="text-[#09090B] text-[14px] font-normal">{overview}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-206.5 h-103 bg-[#FFFFFF] p-6 gap-6 flex justify-center items-center rounded-4xl">
          <DialogHeader className="sr-only">
            <DialogTitle className="sr-only"></DialogTitle>
            <DialogDescription className="sr-only"></DialogDescription>
          </DialogHeader>
          <div className="w-94.25 h-91 border-rose-800 border-2"></div>
          <div className="w-94.25 h-91 border-rose-800 border-2"></div>
        </DialogContent>
      </Dialog>
    </>
  );
};
