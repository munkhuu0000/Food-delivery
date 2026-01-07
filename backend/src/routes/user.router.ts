import { Router } from "express";
import { getCategories } from "../controllers/category/get-categories.js";
import { createCategory } from "../controllers/category/create-category.js";
import { createUser } from "../controllers/user/create-user.js";
import { getUsers } from "../controllers/user/get-users.js";

const UserRouter = Router();
UserRouter.get("/", getUsers).post("/", createUser);

export { UserRouter };
