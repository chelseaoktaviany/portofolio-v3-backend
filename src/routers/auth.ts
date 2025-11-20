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

    // using betterAuth (server-side authentication)
    const data = await auth.api.signInEmail({
      body: { email: user.emailAddress, password },
      asResponse: true,
    });

    console.log(data);

    res.status(200).json({
      message: "Logged in successfully!",
      data,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
