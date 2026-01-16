"use client";

import { useEffect, useState } from "react";
import { useCart } from "./_components/context/CartContext";
import { MainPage } from "./_components/MainPage/MainPage";
import { toast } from "sonner";
import { FoodType, CategoriesType } from "../admin/page";
import { api } from "@/lib/axios";

export default function Home() {
  const { addToCart, setisCartOpen, getTotalItems, setSelectedFood } =
    useCart();
  const [category, setCategory] = useState<CategoriesType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<FoodType[]>("/food");
      setFoods(data);
      console.log(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await api.get<CategoriesType[]>("/category");
      setCategory(data);
      console.log(data);
    };
    getCategories();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <MainPage categories={category} foods={foods} />
    </div>
  );
}
