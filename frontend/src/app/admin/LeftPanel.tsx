"use client";

import { Button } from "@/components/ui/button";

export const LeftPanel = () => {
  return (
    <div className="w-min-[205px] h-min-screen bg-[#FFFFFF] flex px-5 py-9 flex-col gap-10 border-2 border-amber-500 ">
      <img src="/LogoContainer.png" className="w-[165px] h-11" />
      <Button className="w-41.25 h-10 gap-2.5 px-6 py-2 flex justify-start rounded-full">
        <img src="/DashboardIcon.png" className="w-5.5 h-5.5 text-[#FFFFFF]" />
        <p className="text-[14px] font-medium">Food menu</p>
      </Button>
      <Button className="w-41.25 h-10 text-[#FFFFFF] gap-2.5 px-6 py-2 flex justify-start rounded-full">
        <img src="/TruckIcon.png" className="w-5.5 h-5.5" />
        <p className="text-[14px] font-medium">Orders</p>
      </Button>
    </div>
  );
};
