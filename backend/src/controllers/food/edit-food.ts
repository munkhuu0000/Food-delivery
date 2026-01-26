import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const editFood: RequestHandler = async (req, res) => {
  const body = req.body;

  const food = await FoodModel.updateOne({
    name: body.name,
    price: body.price,
    image: body.image,
    ingredients: body.ingredients,
    categoryIds: body.categoryIds,
  });

  res.status(201).json(food);
};
