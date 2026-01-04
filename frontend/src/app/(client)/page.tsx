"use client";

import { useState } from "react";
import { useCart } from "./_components/context/CartContext";
import { MainPage } from "./_components/MainPage/MainPage";
import { toast } from "sonner";

export interface FoodItem {
  id: number;
  image: string;
  title: string;
  price: string;
  overview: string;
  categoryId: string;
}
export const foodCategory = [
  {
    categoryName: "All Dishes",
    categoryId: "C0",
  },
  {
    categoryName: "Appetizers",
    categoryId: "C1",
  },
  {
    categoryName: "Salads",
    categoryId: "C2",
  },
  {
    categoryName: "Lunchfavorites",
    categoryId: "C3",
  },
  {
    categoryName: "Drinks",
    categoryId: "C4",
  },
];
export const foodItems = [
  {
    id: 12,
    image: "fingerfood.png",
    title: "Finger food",
    price: "12.99",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: 13,
    image: "fingerfood.png",
    title: "Finger food",
    price: "12.99",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: 14,
    image: "fingerfood.png",
    title: "Finger food1",
    price: "12.99",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C2",
  },
  {
    id: 15,
    image: "fingerfood.png",
    title: "Finger food2",
    price: "12.99",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C3",
  },
  {
    id: 16,
    image: "fingerfood.png",
    title: "Finger food",
    price: "12.99",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
  {
    id: 17,
    image: "fingerfood.png",
    title: "Finger food",
    price: "12.99",
    overview:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    categoryId: "C1",
  },
];

export default function Home() {
  const { addToCart, setisCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const handleAddtoCart = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainPage
        categories={foodCategory}
        food={foodItems}
        onItemClick={setSelectedFood}
      />
    </div>
  );
}
