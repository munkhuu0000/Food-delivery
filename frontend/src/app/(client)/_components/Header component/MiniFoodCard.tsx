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

type foodCard = {
  image: string;
  price: string;
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
  return (
    <div className="w-109.75 h-30 flex flex-row ">
      <img src={image} alt="" className="w-31 h-30 object-cover rounded-xl" />
      <div className="flex flex-col justify-between w-76.25 h-30">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-[#EF4444] text-[16px] font-bold">{title}</p>
            <p className="text-[#09090B] text-[12px] font-normal">{overview}</p>
          </div>
          <Button className="w-9 h-9 border border-[#EF4444] text-[#EF4444]">
            <X />
          </Button>
        </div>
        <div>
          <Button onClick={handleMinusButtonClick}>
            <Minus />
          </Button>
          <p>{foodCount}</p>
          <Button onClick={handlePlusButtonClick}>
            <Plus />
          </Button>
        </div>
        <p className="text-[#09090B] text-[18px] font-semibold">{price}</p>
      </div>
    </div>
  );
};
