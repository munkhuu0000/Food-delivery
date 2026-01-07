import type { RequestHandler } from "express";
import { userModel } from "../../database/schema/user.schema.js";

export const getUsers: RequestHandler = async (_req, res) => {
  const users = await userModel.find({});
  res.status(200).json(users);
};
