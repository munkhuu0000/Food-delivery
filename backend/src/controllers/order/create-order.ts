import type { RequestHandler } from "express";
import { orderModel } from "../../database/schema/order.schema.js";

export const createOrder: RequestHandler = async (req, res) => {
  const body = req.body;

  const order = await orderModel.create({
    userId: body.userId,
    orderItems: body.orderItems,
    status: body.status,
  });

  res.status(201).json(order);
};
