// import type { RequestHandler } from "express";
// import { OrderModel } from "../../database/schema/food.schema.js";

// // {
// //     "foodIds": [1, 2, 4],
// //     "status": "delivered"
// // }

// export const createFood: RequestHandler = async (req, res) => {
//   const body = req.body;

//   const foodIds = body.foodIds;
//   const foods = foodIds.map((foodId) => {
//     const food = await OrderModel.find({
//       id: foodId,
//     });
//   });

//   const updatedFoods = foods

//   const food = await OrderModel.find({
//     name: body.name,
//     price: body.price,
//   });

//   res.status(201).json(food);
// };
