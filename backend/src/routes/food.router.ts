import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods.js";
import { createFood } from "../controllers/food/create-food.js";
import { createFoods } from "../controllers/food/create-foods.js";
import { deleteFood } from "../controllers/food/delete-food.js";

const FoodRouter = Router();
FoodRouter.get("/", getFoods)
  .post("/", createFood)
  .post("/create", createFoods)
  .delete("/:id", deleteFood);

export { FoodRouter };
