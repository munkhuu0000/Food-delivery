"use client";
import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export const Location = () => {
  return (
    <div className="w-min-64 h-9 bg-[#FFFFFF] rounded-full flex flex-row items-center justify-center gap-1 px-3 py-2">
      <MapPin className="w-5 h-5 text-[#EF4444]" />
      <p className="text-[12px] font-normal text-[#EF4444]">
        Delivery address:
      </p>
      <Dialog>
        <DialogTrigger className="text-[12px] font-normal text-[#71717A] flex flex-row items-center">
          Add location <ChevronRight />
        </DialogTrigger>
        <DialogContent className="w-130.5 h-min-72">
          <DialogHeader>
            <DialogTitle>Please write your delivery address!</DialogTitle>
            <DialogDescription>
              <Textarea placeholder=" Please share your complete address." />
            </DialogDescription>
          </DialogHeader>
          <div className="flex row gap-4 justify-end">
            <Button variant="outline" className="w-19.75 h-10">
              Cancel
            </Button>
            <Button variant="default" className="w-28.75 h-10">
              Deliver here
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
