import express from "express";
import { connectTodatabase } from "./database/index.js";
import { FoodRouter } from "./routes/food.router.js";
import { CategoryRouter } from "./routes/category.router.js";
import { OrderRouter } from "./routes/order.router.js";
import { UserRouter } from "./routes/user.router.js";

await connectTodatabase();

const app = express();

app.use(express.json());
app.use("/food", FoodRouter);
app.use("/category", CategoryRouter);
app.use("/order", OrderRouter);
app.use("/user", UserRouter);

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`);
});
