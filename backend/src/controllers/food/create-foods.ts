import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";

export const createFoods: RequestHandler = async (req, res) => {
  const body = req.body;

  try {
    const foods = await FoodModel.insertMany(body);

    res.status(201).json({
      count: foods.length,
      data: foods,
    });
  } catch (error) {
    res.status(400).json({ message: "error", error });
  }
};
//   const foods = await FoodModel.insertMany({
//     name: body.name,
//     price: body.price,
//     image: body.image,
//     ingredients: body.ingredients,
//     categoryIds: body.categoryIds,
//   });

//   res.status(201).json(foods);
// };
