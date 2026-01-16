import type { RequestHandler } from "express";
import { categoryModel } from "../../database/schema/category.schema.js";

export const updateCategories: RequestHandler = async (req, res) => {
  const body = req.body;

  const categories = await categoryModel.updateOne({
    name: body.name,
  });

  res.status(200).json(categories);
};
