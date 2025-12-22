"use client";
import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddCartButton } from "./AddCartButton";
import { UserButton } from "./UserButton";
import { Location } from "./Location";
import { SignUpLogIn } from "./SignUpLogIn";

export const Header = () => {
  return (
    <div className="w-screen h-17 bg-[#18181B] px-22 py-3 flex flex-row justify-between">
      <img src="/Logo=Horizon.png" alt="" />
      <div className="flex flex-row gap-3">
        <SignUpLogIn />
        <Location />
        <AddCartButton />
        <UserButton />
      </div>
    </div>
  );
};
