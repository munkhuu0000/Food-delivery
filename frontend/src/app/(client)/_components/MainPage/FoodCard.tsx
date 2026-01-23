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
import { useCart } from "../../../context/CartContext";
import { FoodType, CategoriesType } from "@/app/admin/page";

// s

export const FoodCard = (props: FoodType) => {
  const { setSelectedFood, selectedFood, handleAddtoCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const getTotalPrice = () => {
    if (!quantity) return "$0.00";
    else return `$${(price * quantity).toFixed(2)}`;
  };
  const { _id, image, ingredients, name, price, categoryIds } = props;

  const onAddToCartClick = (item: FoodType, qty: number) => {
    handleAddtoCart(item, qty);
    setQuantity(1);
    console.log(item, qty);
  };

  return (
    <Dialog>
      <div className="relative group w-99.5 rounded-4xl p-4 bg-[#FFFFFF] ">
        <div className="w-full h-52.5 rounded-4xl overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-4xl transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <p className="text-[#EF4444] text-2xl font-semibold">{name}</p>
          <p className="text-[#09090B] text-[18px] font-semibold">₮{price}</p>
        </div>
        <p className="text-[#09090B] text-[14px] font-normal">{ingredients}</p>
        <DialogTrigger asChild>
          <Button
            className="w-11 h-11 rounded-full z-10 absolute bottom-30 right-10 flex items-center
          justify-center transition-all duration-300 bg-[#FFFFFF] shadow-lg"
            onClick={() => setSelectedFood}
          >
            {isAdded ? (
              <Check className="w-6 h-6 text-[#EF4444]" />
            ) : (
              <Plus className="w-6 h-6 text-[#EF4444]" />
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-206.5 min-h-103 bg-[#FFFFFF] p-6 gap-6 flex justify-center items-center rounded-4xl [&>button]:hidden">
          <DialogHeader className="sr-only">
            <DialogTitle className="sr-only"></DialogTitle>
            <DialogDescription className="sr-only"></DialogDescription>
          </DialogHeader>
          <div className="w-94.25 h-91 flex flex-row">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div className="w-94.25 h-91 flex flex-col justify-between gap-3 p-3">
            <div>
              <DialogClose>
                <div className="w-9 h-9 border border-[#E4E4E7] text-[#FAFAFA] rounded-full flex justify-center items-center hover:bg-[#FAFAFA] hover:text-[#404040] absolute left-[92%] top-[5%]">
                  <X className="w-4 h-4 rounded-full text-[#18181B]" />
                </div>
              </DialogClose>
              <p className="text-[#EF4444] text-[30px] font-semibold">{name}</p>
              <p className="text-[#09090B] text-[14px] font-normal">
                {ingredients}
              </p>
            </div>
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="text-[16px] font-normal">Total price</p>
                  <p className="text-[#09090B] text-[24px] font-semibold flex items-center justify-center">
                    {getTotalPrice()}
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    variant={"outline"}
                    className="w-11 h-11 border-0 rounded-full hover:border hover:border-[#09090B]"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  {quantity}
                  <Button
                    onClick={() => setQuantity(quantity + 1)}
                    variant={"outline"}
                    className="w-11 h-11 border-0 rounded-full hover:border hover:border-[#09090B]"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <DialogClose asChild>
                <Button
                  className="w-full h-11 rounded-full"
                  onClick={() => onAddToCartClick(props, quantity)}
                >
                  Add to cart
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};
