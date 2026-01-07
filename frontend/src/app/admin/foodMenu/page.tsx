"use client";

import { FoodBadge } from "./FoodBadge";
import { FoodMenu } from "./FoodMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <FoodBadge />
      <FoodMenu />
    </div>
  );
}
