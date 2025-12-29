"use client";

import { use } from "react";
import { MiniFoodCard } from "../../_components/Header component/MiniFoodCard";

const Category = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);
  return <div>{categoryName}</div>;
};
export default Category;
