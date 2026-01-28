import type { RequestHandler } from "express";
import { userModel } from "../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const getMe: RequestHandler = async (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const token = authorization.split(" ")[1] as string;

  try {
    const { user } = jwt.verify(token, "Secretkey") as {
      user: Omit<typeof userModel, "">;
    };

    res.status(200).json({ user });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
