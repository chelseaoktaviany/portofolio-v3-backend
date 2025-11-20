import prisma from "../lib/prisma";
import multer from "multer";

import { SkillType } from "../types/skills";

// get all skills
export const getAllSkills = async () => {
  const skills = await prisma.skills.findMany({
    orderBy: { skillTitle: "asc" },
  });

  return skills;
};

// create a skill
export const createSkill = async ({ skillTitle, skillImage }: SkillType) => {
  const skill = await prisma.skills.create({
    data: { skillTitle, skillImage },
  });

  return skill;
};

// upload a skill image
export const uploadSkillImage = async (skillImage: string) => {};
