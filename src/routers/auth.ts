import { Router } from "express";

import { registerUser, loginUser } from "../controllers/auth.controller";
import { registerSchema, loginSchema } from "../validators/auth.validator";

import auth from "../lib/auth";

const router = Router();

router.post("/register", async (req, res, next) => {
  const data = registerSchema.parse({ body: req.body });

  const user = await registerUser(data.body);

  try {
    // sending response
    res.status(201).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      emailAddress: user.emailAddress,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { emailAddress, password } = loginSchema.parse(req.body);

    const user = await loginUser(emailAddress, password);

    const session = await auth.login({
      email: emailAddress,
      password,
    });

    res.status(200).json({
      message: "Logged in successfully!",
      session,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
