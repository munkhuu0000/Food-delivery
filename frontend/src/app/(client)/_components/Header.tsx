"use client";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { MapPin } from "lucide-react";

const App = () => {
  return <MapPin />;
};

export default App;

export const Header = () => {
  return (
    <div className="w-screen h-17 bg-primary px-22 py-3 flex justify-between">
      <img src="/Logo=Horizon.png" alt="" />
      <div className="w-min-64 h-9 bg-[#FFFFFF] rounded-full flex flex-row items-center justify-center gap-1 px-3 py-2">
        <MapPin className="w-5 h-5 text-[#EF4444]" />
        <p className="text-[12px] font-normal text-[#EF4444]">
          Delivery address:
        </p>
        <Input type="email" placeholder="Add location " className="w-19 " />
        <ChevronRight />
      </div>
    </div>
  );
};
