"use client";

import { useEffect, useState } from "react";
import { FoodBadge } from "./foodMenu/FoodBadge";
import { api } from "@/lib/axios";
import { FoodMenu } from "./foodMenu/FoodMenu";

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  ingredients: string;
  categoryIds: { _id: string; name: string }[];
  image: string;
};
export type CategoriesType = {
  _id: string;
  name: string;
};

const Page = () => {
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
  const AllDishesId = "696783cbf10d3a004417b6d6";
  const [selectedCategoriesId, setSelectedCategoriesId] =
    useState<string>(AllDishesId);
  const filteredFoods = foods.filter((food) => {
    if (selectedCategoriesId === AllDishesId) return true;
    return food.categoryIds.some((c) => c._id === selectedCategoriesId);
  });

  return (
    <div className="flex min-h-screen flex-col">
      <FoodBadge
        categories={category}
        foods={foods}
        selectedCategoryId={selectedCategoriesId}
        onCategoryChange={setSelectedCategoriesId}
      />
      <FoodMenu categories={category} foods={filteredFoods} />
    </div>
  );
};
export default Page;
