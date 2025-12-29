"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  // const totalFoodPrice =
  return (
    <div className="rounded-full bg-[#F4F4F5] w-9 h-9 flex justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-133.75 max-w-133.75 min-w-133.75 bg-[#404040] overflow-y-auto p-5"
        >
          <SheetHeader className="w-full">
            <SheetTitle className="flex flex-row gap-3">
              <>
                <ShoppingCart className="w-6 h-6 text-[#FAFAFA]" />
                <p className="text-[20px] font-semibold text-[#FAFAFA]">
                  Order detail
                </p>
              </>
            </SheetTitle>
          </SheetHeader>
          <Tabs defaultValue="Cart" className="w-full h-11 flex gap-6">
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
            <TabsContent
              value="Cart"
              className="w-full rounded-4xl flex flex-col gap-6 items-center"
            >
              <div className="w-full h-50 bg-[#FAFAFA] rounded-4xl flex-7 flex flex-col overflow-y-scroll scrollbar-custom">
                {foods.map((food) => (
                  <MiniFoodCard
                    key={food.id}
                    image={food.image}
                    title={food.title}
                    overview={food.overview}
                    price={food.price}
                  />
                ))}
                <div className="w-full h-29 border-0 flex flex-col gap-3 p-5">
                  <Label
                    htmlFor="Delivery location"
                    className="font-semibold  text-[20px] text-[#71717A]"
                  >
                    Delivery location
                  </Label>
                  <Input
                    id="Delivery location"
                    placeholder="Please share your complete address"
                    className="w-full min-h-20"
                  />
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] rounded-4xl flex flex-col flex-3 p-5">
                <div className="w-full h-29 border-0 flex flex-col gap-2 border-b border-dashed border-[#09090B80]">
                  <p className="font-semibold  text-[20px] text-[#71717A]">
                    Payment info
                  </p>
                  <div className="w-full flex flex-row justify-between">
                    <p className="font-normal text-[14px] text-[#71717A]">
                      Items
                    </p>
                    <p className="text-[#09090B] text-[16px] font-bold flex items-center">
                      $2500
                    </p>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <p className="font-normal text-[14px] text-[#71717A]">
                      Shipping info
                    </p>
                    <p className="text-[#09090B] text-[16px] font-bold flex items-center">
                      $0.99
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Order"></TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
