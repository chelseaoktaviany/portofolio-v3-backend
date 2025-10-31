import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

// import routers
import authRouter from "./routers/auth.route";

// load environment variables
dotenv.config();

// using expressjs
const app = express();

// using morgan
app.use(morgan("dev"));

// using cors
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// using express json
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

app.use("/api/auth", authRouter);

export default app;
