import { Router } from "express";

import { registerUser } from "../controllers/auth.controller";
import { registerSchema } from "../validators/auth.validator";

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

export default router;
