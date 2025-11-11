import { Router } from "express";

import { registerUser } from "../controllers/auth.controller";

import { registerSchema, RegisterSchema } from "../validators/users.validator";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const data: RegisterSchema = registerSchema.parse({ body: req.body });

    const user = await registerUser(data.body);

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

export default router;
