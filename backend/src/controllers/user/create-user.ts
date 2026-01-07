import type { RequestHandler } from "express";
import { userModel } from "../../database/schema/user.schema.js";

export const createUser: RequestHandler = async (req, res) => {
  const body = req.body;

  const user = await userModel.create({
    username: body.name,
    email: body.email,
    password: body.password,
    profileImage: body.profileImage,
    address: body.address,
  });

  res.status(201).json(user);
};
