import type { RequestHandler } from "express";
import { categoryModel } from "../../database/schema/category.schema.js";

export const deleteCategories: RequestHandler = async (req, res) => {
  const body = req.body;

  const categories = await categoryModel.deleteMany({
    _id: body._id,
  });

  res.status(200).json(categories);
};
