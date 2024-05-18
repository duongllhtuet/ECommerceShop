import express from "express";
import cors from "cors";
import { connectDB } from "./config/data.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

import path from 'path'
import { fileURLToPath } from "url";

// Resolving dirname for EX module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// use client app
app.use(express.static(path.join(__dirname, '/client/dist')))

// render client for any path
app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
