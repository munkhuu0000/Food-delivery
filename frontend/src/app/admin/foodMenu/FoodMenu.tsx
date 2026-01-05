// "use client";
// import { foodCategory } from "@/app/(client)/_components/MainPage/MainPageSections";
// import { foods } from "@/app/(client)/_components/MainPage/Foodsection";
// import { Badge } from "@/components/ui/badge";
// import { useState } from "react";
// import { FoodBadge } from "./FoodBadge";

// export function FoodMenu() {
//   const [selectedCategoryId, setSelectedCategoryId] = useState<string>("C0");

//   const filteredFoods = foods.filter((food) => {
//     if (selectedCategoryId === "C0") return true;
//     return food?.categoryId === selectedCategoryId;
//   });
//   return (
//     <div className="w-[calc(100vw-205px)] h-min-screen p-6">
//       <FoodBadge />
//     </div>
//   );
// }
