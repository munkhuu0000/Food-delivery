"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import { Soup } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MiniFoodCard } from "./MiniFoodCard";
import { foods } from "../MainPage/Foodsection";
import { X } from "lucide-react";
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
import { Clock } from "lucide-react";
import { Map } from "lucide-react";

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
          className="w-133.75 max-w-133.75 min-w-133.75 bg-[#404040] overflow-y-auto p-5 [&>button]:hidden"
        >
          <SheetHeader className="w-full">
            <SheetTitle className="flex flex-row gap-3 justify-between">
              <div className="flex flex-row gap-3">
                <ShoppingCart className="w-6 h-6 text-[#FAFAFA]" />
                <p className="text-[20px] font-semibold text-[#FAFAFA]">
                  Order detail
                </p>
              </div>
              <SheetClose>
                <div className="w-9 h-9 border bg-transparent border-[#FAFAFA] text-[#FAFAFA] rounded-full flex justify-center items-center hover:bg-[#FAFAFA] hover:text-[#404040]">
                  <X className="w-4 h-4 rounded-full" />
                </div>
              </SheetClose>
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
              <div className="w-full bg-[#FAFAFA] rounded-4xl flex-5 flex flex-col overflow-y-scroll scrollbar-custom">
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
              <div className="w-full bg-[#FAFAFA] rounded-4xl flex flex-col flex-1 p-5 gap-3">
                <div className="w-full h-29 border-0 flex flex-col gap-2 border-b border-dashed border-[#09090B80]">
                  <p className="font-semibold  text-[20px] text-[#71717A]">
                    Payment info
                  </p>
                  <div className="w-full flex flex-row justify-between">
                    <p className="font-normal text-[14px] text-[#71717A]">
                      Items
                    </p>
                    <p className="text-[#09090B] text-[16px] font-bold flex items-center">
                      $250
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
                <div className="w-full flex flex-row justify-between">
                  <p className="font-normal text-[14px] text-[#71717A]">
                    Total
                  </p>
                  <p className="text-[#09090B] text-[16px] font-bold flex items-center">
                    $250.99
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger className="w-full">
                    <div className="w-full h-9 bg-[#EF4444] rounded-full flex flex-row items-center justify-center gap-1 px-3 py-2 hover:bg-[#404040] text-[14px] text-[#FAFAFA] font-medium">
                      Checkout
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-166 h-109.75 [&>button]:hidden flex flex-col items-center">
                    <DialogHeader>
                      <DialogTitle className="text-[#09090B] text-[24px] font-semibold">
                        Your order has been successfully placed !
                      </DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <img
                      src="/kid.png"
                      alt=""
                      className="object-contain w-39 h-66.25"
                    />
                    <DialogFooter>
                      <DialogClose>
                        <div className="w-47 h-11 rounded-full bg-[#F4F4F5] flex justify-center items-center hover:bg-[#404040] hover:text-[#FAFAFA]">
                          Back to home
                        </div>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
            <TabsContent
              value="Order"
              className="w-full min-h-screen rounded-4xl flex flex-col gap-6 items-center"
            >
              <div className="w-full h-full bg-[#FAFAFA] rounded-4xl flex-5 flex flex-col p-5 gap-3">
                <div className="w-full border-0 flex flex-col gap-2 border-b border-dashed border-[#09090B80] py-3">
                  <p className="font-semibold  text-[20px] text-[#09090B]">
                    Order history
                  </p>
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                      <p className="font-bold text-[16px] text-[#09090B]">
                        $26.57
                      </p>
                      <p className="font-bold text-[16px] text-[#09090B]">
                        (#20156)
                      </p>
                    </div>
                    <Button
                      variant={"outline"}
                      className="rounded-full border-[#EF4444]"
                    >
                      Pending
                    </Button>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                      <Soup className="text-[#71717A]" />
                      <p className="font-normal text-[14px] text-[#71717A]">
                        Finger food
                      </p>
                    </div>
                    <p className="text-[#09090B] text-[16px] font-bold flex items-center">
                      x1
                    </p>
                  </div>
                  <div className="w-full flex flex-row gap-3">
                    <Clock className="text-[#71717A]" />
                    <p className="font-normal text-[14px] text-[#71717A]">
                      2025/12/30
                    </p>
                  </div>
                  <div className="w-full flex flex-row gap-3">
                    <Map className="text-[#71717A]" />
                    <p className="font-normal text-[14px] text-[#71717A]">
                      12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100
                      айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо,
                      СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн
                      гарцны хойд талд 4д ногоон20
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
