import type { RequestHandler } from "express";
import { userModel } from "../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;

  const isUsernameExist = await userModel.findOne({ username });
  if (isUsernameExist)
    return res.status(400).json({ message: "Username already exists." });

  const isEmailExist = await userModel.findOne({ email });
  if (isEmailExist)
    return res.status(400).json({ message: "Email already exists." });

  const user = await userModel.create({
    username,
    password,
    email,
  });
  res.status(200).json({ user });
};
