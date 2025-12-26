"use client";

import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MiniFoodCard } from "./MiniFoodCard";
import { foods } from "../MainPage/Foodsection";

export const AddCartButton = () => {
  return (
    <div className="rounded-full bg-[#F4F4F5] w-9 h-9 flex justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="bg-[#404040] w-133.75 min-h-screen ">
          <SheetHeader>
            <SheetTitle className=" flex flex-row gap-3 ">
              <>
                <ShoppingCart className="w-6 h-6 text-[#FAFAFA]" />
                <p className="text-[20px] font-semibold text-[#FAFAFA]">
                  Order detail
                </p>
              </>
            </SheetTitle>
          </SheetHeader>
          <Tabs defaultValue="Cart" className="w-full h-11">
            <TabsList className="w-full h-11 rounded-full">
              <TabsTrigger
                value="Cart"
                className=" rounded-full h-9 data-[state=active]:bg-red-500"
              >
                <div className="text-[18px] font-normal">Cart</div>
              </TabsTrigger>
              <TabsTrigger
                value="Order"
                className=" rounded-full h-9 data-[state=active]:bg-red-500"
              >
                <div className="text-[18px] font-normal">Order</div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Cart" className="w-200 p-4 rounded-4xl">
              <div className="w-117.75 h-133 bg-[#FAFAFA] rounded-4xl">
                {foods.map((food) => (
                  <MiniFoodCard
                    key={food.id}
                    image={food.image}
                    title={food.title}
                    overview={food.overview}
                    price={food.price}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Order"></TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
