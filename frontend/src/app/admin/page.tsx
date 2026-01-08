"use client";

import { FoodBadge } from "./foodMenu/FoodBadge";
import { FoodMenu } from "./foodMenu/FoodMenu";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <FoodBadge />
      <FoodMenu />
    </div>
  );
};
export default Page;
