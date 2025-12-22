import mongoose, { connect } from "mongoose";

export const connectTodatabase = async () => {
  await connect(
    `mongodb+srv://Munkhuu:jlbj9ktPjyv4E2d5@cluster0.v7g2ieo.mongodb.net/?appName=Cluster0`
  );
};
