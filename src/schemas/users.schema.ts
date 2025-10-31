import { z } from "zod";

// registration schema
export const registerSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20).optional(),
  username: z.string().toLowerCase(),
  emailAddress: z.email().toLowerCase(),
  password: z.string().min(6).max(32),
});
