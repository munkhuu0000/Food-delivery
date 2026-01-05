// "use client";
// import { foodCategory } from "@/app/(client)/_components/MainPage/MainPageSections";
// import { food } from "@/app/(client)/_components/MainPage/Foodsection";
// import { Badge } from "@/components/ui/badge";
// import { useState } from "react";

// export function FoodBadge() {
//   const [selectedCategoryId, setSelectedCategoryId] = useState<string>("C0");

//   const filteredFoods = foods.filter((food) => {
//     if (selectedCategoryId === "C0") return true;
//     return food?.categoryId === selectedCategoryId;
//   });
//   return (
//     <div className="w-[calc(100vw-205px)] h-min-screen p-6">
//       <div className="w-full h-44 bg-[#FFFFFF]">
//         <p className="text-[#09090B] text-[20px] font-bold">Dishes category</p>
//         <div className="w-full flex flex-row gap-3">
//           {foodCategory?.map((category) => (
//             <Badge
//               variant="outline"
//               key={category?.categoryId}
//               className={`flex flex-row gap-2 py-2 px-4 ${
//                 selectedCategoryId === category.categoryId
//                   ? "border-[#EF4444]"
//                   : "outline"
//               }`}
//               onClick={() => setSelectedCategoryId(category.categoryId)}
//             >
//               {category?.categoryName}
//               {filteredFoods?.length}
//             </Badge>
//           ))}
//           {/* Шүүсэн хоолнуудыг харуулах хэсэг */}
//           {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredFoods.length > 0 ? (
//               filteredFoods.map((food) => (
//                 <div
//                   key={food.id}
//                   className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//                 >
//                   <img
//                     src={food.image}
//                     alt={food.title}
//                     className="w-full h-48 object-cover rounded"
//                   />
//                   <h3 className="text-lg font-semibold mt-2">{food.title}</h3>
//                   <p className="text-sm text-gray-600">{food.overview}</p>
//                   <p className="text-xl font-bold mt-2">${food.price}</p>
//                 </div>
//               ))
//             ) : (
//               <p>Энэ категорид хоол байхгүй байна.</p>
//             )}
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
