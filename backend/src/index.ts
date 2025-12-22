import express from "express";
import { connectTodatabase } from "./database/index.js";

await connectTodatabase();

const app = express();

app.get("/", (req, res) => {
  res.send("hi!!!");
});

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`);
});
