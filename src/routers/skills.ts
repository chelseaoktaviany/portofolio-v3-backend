import { Request, Response, NextFunction } from "express";
import { Router } from "express";

// controllers
import { getAllSkills, createSkill } from "../controllers/skills.controller";

// validators

const router = Router();

// get all skills
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await getAllSkills();

    res.status(200).json({
      message: "Retrieved all skills successfully",
      data: skills,
    });
  } catch (err) {
    next(err);
  }
});

// create a skill
router.post("/", async (req: Request, res: Response, next: NextFunction) => {});

export default router;
