import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const deleteFood: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const foods = await FoodModel.deleteOne({
    _id: id,
  });

  res.status(200).json(foods);
};
