import type { RequestHandler } from "express";
import { orderModel } from "../../database/schema/order.schema.js";

export const getOrders: RequestHandler = async (_req, res) => {
  const orders = await orderModel.find({});
  res.status(200).json(orders);
};
