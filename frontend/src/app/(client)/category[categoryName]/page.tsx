"use client";

import { use } from "react";

const Category = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);
  return <div>{categoryName}</div>;
};
export default Category;
