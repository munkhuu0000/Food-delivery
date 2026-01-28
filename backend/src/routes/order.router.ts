import { Router } from "express";
import { createOrder } from "../controllers/order/create-order.js";
import { getUserOrders } from "../controllers/order/getUserOrders.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";

const OrderRouter = Router();
OrderRouter.get("/", authMiddleWare, getUserOrders).post(
  "/",
  authMiddleWare,
  createOrder,
);

export { OrderRouter };
