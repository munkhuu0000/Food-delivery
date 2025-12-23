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

export const AddCartButton = () => {
  return (
    <div className="rounded-full bg-[#F4F4F5] w-9 h-9 flex justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="bg-[#404040] w-min-[535px] h-screen ">
          <SheetHeader>
            <SheetTitle className=" flex flex-row gap-3 ">
              <>
                <ShoppingCart className="w-6 h-6 text-[#FAFAFA]" />
                <p className="text-[20px] font-semibold text-[#FAFAFA]">
                  Order detail
                </p>
              </>
            </SheetTitle>
            <SheetDescription className="w-full h-full">
              <Tabs defaultValue="Cart" className="w-full h-11">
                <TabsList className="w-full h-11 rounded-full">
                  <TabsTrigger
                    value="Cart"
                    className=" rounded-full h-9 data-[state=active]:bg-red-500"
                  >
                    <p className="text-[18px] font-normal">Cart</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="Order"
                    className=" rounded-full h-9 data-[state=active]:bg-red-500"
                  >
                    <p className="text-[18px] font-normal">Order</p>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Cart">
                  <div className="w-117.75 h-133 bg-[#FAFAFA] rounded-4xl"></div>
                </TabsContent>
                <TabsContent value="Order"></TabsContent>
              </Tabs>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
