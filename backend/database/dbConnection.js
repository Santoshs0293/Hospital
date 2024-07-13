import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
      useNewUrlParser: true, // Add this line for MongoDB version >= 3.1.0
      useUnifiedTopology: true, // Add this line for MongoDB version >= 3.1.0
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};
