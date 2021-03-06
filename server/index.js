import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoute from "./routes/products.js";
import userRoute from "./routes/users.js";
import cartRoute from "./routes/carts.js";

const app = express();
dotenv.config();

//Middleware
//express.json parses any json data coming back from req into a js obj; attaches js obj to req obj.
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Greeting route
app.get("/", (req, res) => {
  res.send("Hello world...");
});

//Routes
app.use("/products", productRoute);
app.use("/users", userRoute);
app.use("/carts", cartRoute);

//Database connection
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
