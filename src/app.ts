import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

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

const port = process.env.PORT || 3000;

// check if api is running or not
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

// running the server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
