import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { userModel } from "../database/schema/user.schema.js";

export const authMiddleWare: RequestHandler = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ mesage: "Unauthorized" });
  const token = authorization.split(" ")[1] as string;

  try {
    const { user } = jwt.verify(token, "Secretkey") as {
      user: { _id: string };
    };

    req.userId = user._id;
    // jwt.verify(token, "SecretKey") as {
    //   user: Omit<typeof userModel, "password">;
    // };
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
