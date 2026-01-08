"use client";

import { LayoutDashboard } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Truck } from "lucide-react";
import Link from "next/link";

export const LeftPanel = () => {
  return (
    <div className="w-51.25 h-min-screen bg-[#FFFFFF] flex px-5 py-9 flex-col gap-10">
      <img src="/LogoContainer.png" className="w-[165px] h-11" />
      <ToggleGroup
        type="single"
        defaultValue="food-menu"
        className="flex flex-col gap-10"
      >
        <Link href="/admin">
          <ToggleGroupItem
            value="food-menu"
            aria-label="Food menu"
            className="w-41 h-10 justify-start rounded-full px-6 py-3 data-[state=on]:rounded-full data-[state=on]:bg-black  data-[state=on]:text-white hover:bg-gray-100"
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            <span className="text-[14px] font-medium">Food menu</span>
          </ToggleGroupItem>
        </Link>
        <Link href="/admin/order">
          <ToggleGroupItem
            value="orders"
            aria-label="Orders"
            className="w-41 h-10 justify-start rounded-full px-6 py-3 data-[state=on]:bg-black data-[state=on]:text-white hover:bg-gray-100"
          >
            <Truck className="w-5 h-5 mr-3" />
            <span className="text-[14px] font-medium">Orders</span>
          </ToggleGroupItem>
        </Link>
      </ToggleGroup>
    </div>
  );
};
