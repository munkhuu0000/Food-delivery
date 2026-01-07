import type { RequestHandler } from "express";
import { categoryModel } from "../../database/schema/category.schema.js";

export const getCategories: RequestHandler = async (req, res) => {
  const body = req.body;

  const categories = await categoryModel.create({
    name: body.name,
  });

  res.status(200).json(categories);
};
