"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
    <div className="rounded-full">
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <div>Cancel</div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <Sheet>
          <SheetTrigger>
            <ShoppingCart />
          </SheetTrigger>
          <SheetContent className="bg-[#18181B33] w-min-[535px] h-screen opacity-100">
            <SheetHeader>
              <SheetTitle className=" flex flex-row gap-3"></SheetTitle>

              <SheetDescription className="w-full h-full">
                <>
                  <ShoppingCart /> Order detail
                </>
                <Tabs defaultValue="Cart" className="w-full h-full">
                  <TabsList className="w-full h-full">
                    <TabsTrigger
                      value="Cart"
                      className="text-[18px] font-normal rounded-5"
                    >
                      Cart
                    </TabsTrigger>
                    <TabsTrigger value="Order">Order</TabsTrigger>
                  </TabsList>
                  <TabsContent value="Cart">Foods</TabsContent>
                  <TabsContent value="Order">More Foods</TabsContent>
                </Tabs>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet> */}
    </div>
  );
};
