import express from "express";
import auth from "./lib/auth";

import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

// import routers
import userRoutes from "./routers/users";

// error handler
import { errorHandler } from "./middleware/errorHandler";

// mounting toExpressHandler
import { toNodeHandler } from "better-auth/node";

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

app.use("/api/auth", toNodeHandler(auth));

// using express json
app.use(express.json());

// api routes
app.use("/api/users", userRoutes);

// error handler
app.use(errorHandler);

export default app;
