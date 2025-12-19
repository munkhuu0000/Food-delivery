"use client";
import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserButton = () => {
  return (
    <div>
      <div className="rounded-full bg-[#EF4444] border-0 w-9 h-9 flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-47 h-26 flex flex-col justify-center items-center gap-2">
            <DropdownMenuLabel>Test@gmail.com</DropdownMenuLabel>
            <Button variant="outline" className="rounded-full bg-[#F4F4F5]">
              Sign out
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
