"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { foods } from "../MainPage/Foodsection";
import { Minus } from "lucide-react";

export type foodCard = {
  image: string;
  price: number;
  overview: string;
  title: string;
};

export const MiniFoodCard = ({ image, title, overview, price }: foodCard) => {
  const [foodCount, setFoodcount] = useState<number>(1);
  const handlePlusButtonClick = () => {
    setFoodcount((prev) => prev + 1);
  };
  const handleMinusButtonClick = () => {
    setFoodcount((prev) => prev - 1);
  };
  const totalPrice = price * foodCount;
  return (
    <div className="w-full flex flex-row border-b border-dashed border-[#09090B80] p-5 gap-3">
      <img src={image} alt="" className="w-31 h-30 object-cover rounded-xl" />
      <div className="flex flex-col justify-between w-76.25 h-30">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-[#EF4444] text-[16px] font-bold">{title}</p>
            <p className="text-[#09090B] text-[12px] font-normal">{overview}</p>
          </div>
          <Button className="w-9 h-9 border bg-[#FAFAFA] border-[#EF4444] text-[#EF4444] rounded-full hover:bg-[#404040]">
            <X className="w-4 h-4 rounded-full bg-transparent" />
          </Button>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <Button
              onClick={handleMinusButtonClick}
              variant={"outline"}
              className="w-9 h-9 border-none border-0"
              disabled={foodCount <= 1}
            >
              <Minus />
            </Button>
            <p>{foodCount}</p>
            <Button
              onClick={handlePlusButtonClick}
              variant={"outline"}
              className="w-9 h-9"
            >
              <Plus />
            </Button>
          </div>
          <p className="text-[#09090B] text-[18px] font-semibold flex items-center">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
