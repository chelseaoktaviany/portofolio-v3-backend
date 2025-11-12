import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

// import routers
import authRoutes from "./routers/auth";

// error handler
import { errorHandler } from "./middleware/errorHandler";

// load environment variables
dotenv.config();

// using expressjs
const app = express();

// using morgan
app.use(morgan("dev"));

// using cors
app.use(cors({ origin: "*", credentials: true }));

// routes
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

// using express json
app.use(express.json());

// api routes
app.use("/api/auth", authRoutes);

// error handler
app.use(errorHandler);

export default app;
