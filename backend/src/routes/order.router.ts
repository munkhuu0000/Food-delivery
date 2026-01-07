import { Router } from "express";
import { getOrders } from "../controllers/order/get-orders.js";
import { createOrder } from "../controllers/order/create-order.js";

const OrderRouter = Router();
OrderRouter.get("/", getOrders).post("/", createOrder);

export { OrderRouter };
