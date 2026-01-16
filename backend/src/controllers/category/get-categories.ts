import type { RequestHandler } from "express";
import { categoryModel } from "../../database/schema/category.schema.js";

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await categoryModel.find({});
  res.status(200).json(categories);
};
