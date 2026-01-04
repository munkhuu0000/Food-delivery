"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { foodCard } from "../Header component/MiniFoodCard";
import { FoodItem } from "../../page";
import { Card, CardContent } from "@/components/ui/card";

interface FoodCardProps {
  food: FoodItem;
  onClick: (item: FoodItem) => void;
}

export const FoodCard = ({ food, onClick }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 p-0 bg-white">
      <div className="relative h-40 overflow-hidden group">
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Button
          size="icon"
          className="absolute bottom-3 right-3 w-8 h-8 bg-white text-gray-900 rounded-full shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg transition-all"
          onClick={() => onClick(food)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1.5">
          <h4 className="text-red-500 font-bold text-base leading-tight">
            {food.title}
          </h4>
          <span className="text-gray-900 font-bold text-sm whitespace-nowrap ml-2">
            {food.price}
          </span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
          {food?.overview}
        </p>
      </CardContent>
    </Card>
    // <div className="relative">
    //   <div className="w-99.5 h-87 rounded-4xl p-4 bg-[#FFFFFF] flex flex-col gap-2">
    //     <div className="w-91.5 h-52.5 rounded-4xl">
    //       <img
    //         src={image}
    //         alt=""
    //         className="w-91.5 h-52.5 object-cover rounded-4xl"
    //       />
    //     </div>
    //     <div className="flex flex-row justify-between">
    //       <p className="text-[#EF4444] text-2xl font-semibold">{title}</p>
    //       <p className="text-[#09090B] text-[18px] font-semibold">${price}</p>
    //     </div>
    //     <p className="text-[#09090B] text-[14px] font-normal">{overview}</p>
    //   </div>
    //   <Dialog>
    //     <DialogTrigger>
    //       <div
    //         className="w-11 h-11 rounded-full z-10 absolute top-[45%] left-[80%] flex items-center
    //      justify-center transition-all duration-300 bg-[#FFFFFF] shadow-lg"
    //         onClick={handleButtonClick}
    //       >
    //         {isAdded ? (
    //           <Check className="w-6 h-6 text-[#EF4444]" />
    //         ) : (
    //           <Plus className="w-6 h-6 text-[#EF4444]" />
    //         )}
    //       </div>
    //     </DialogTrigger>
    //     <DialogContent className="min-w-206.5 min-h-103 bg-[#FFFFFF] p-6 gap-6 flex justify-center items-center rounded-4xl [&>button]:hidden">
    //       <DialogHeader className="sr-only">
    //         <DialogTitle className="sr-only"></DialogTitle>
    //         <DialogDescription className="sr-only"></DialogDescription>
    //       </DialogHeader>
    //       <div className="w-94.25 h-91 flex flex-row">
    //         <img
    //           src={image}
    //           alt=""
    //           className="w-full h-full object-cover rounded-4xl"
    //         />
    //       </div>
    //       <div className="w-94.25 h-91 flex flex-col justify-between gap-3 p-3">
    //         <div>
    //           <DialogClose>
    //             <div className="w-9 h-9 border border-[#E4E4E7] text-[#FAFAFA] rounded-full flex justify-center items-center hover:bg-[#FAFAFA] hover:text-[#404040] absolute left-[92%] top-[5%]">
    //               <X className="w-4 h-4 rounded-full text-[#18181B]" />
    //             </div>
    //           </DialogClose>
    //           <p className="text-[#EF4444] text-[30px] font-semibold">
    //             {title}
    //           </p>
    //           <p className="text-[#09090B] text-[14px] font-normal">
    //             {overview}
    //           </p>
    //         </div>
    //         <div className="w-full flex flex-col justify-between items-center gap-3">
    //           <div className="flex flex-row justify-between w-full ">
    //             <div className="flex flex-col">
    //               <p className="text-[16px] font-normal">Total price</p>
    //               <p className="text-[#09090B] text-[24px] font-semibold flex items-center justify-center">
    //                 {/* ${totalPrice.toFixed(2)} */}
    //               </p>
    //             </div>
    //             <div className="flex flex-row gap-3 items-center">
    //               <Button
    //                 onClick={handleMinusButtonClick}
    //                 variant={"outline"}
    //                 className="w-11 h-11 border-0 rounded-full hover:border hover:border-[#09090B]"
    //                 disabled={foodCount <= 1}
    //               >
    //                 <Minus className="w-4 h-4" />
    //               </Button>
    //               <p>{foodCount}</p>
    //               <Button
    //                 onClick={handlePlusButtonClick}
    //                 variant={"outline"}
    //                 className="w-11 h-11 border-0 rounded-full hover:border hover:border-[#09090B]"
    //               >
    //                 <Plus className="w-4 h-4" />
    //               </Button>
    //             </div>
    //           </div>
    //           <Button className="w-full h-11 rounded-full">Add to cart</Button>
    //         </div>
    //       </div>
    //     </DialogContent>
    //   </Dialog>
    // </div>
  );
};
