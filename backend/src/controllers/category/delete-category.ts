import type { RequestHandler } from "express";
import { categoryModel } from "../../database/schema/category.schema.js";

export const deleteCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const categories = await categoryModel.deleteOne({
    _id: id,
  });

  res.status(200).json(categories);
};
