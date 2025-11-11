import { Router } from "express";

const router = Router();

router.get("/me", async (req, res) => {
  return res.json({ message: "Use better-auth endpoints under /api/auth" });
});

export default router;
