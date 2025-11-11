import { z } from "zod";

// registration schema
export const registerSchema = z.object({
  body: z
    .object({
      firstName: z.string().min(3).max(20),
      lastName: z.string().min(3).max(20),
      username: z.string().toLowerCase(),
      emailAddress: z.email("Your e-mail address must be valid").toLowerCase(),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(
          32,
          "Password confirmation with greater than 32 characters is not allowed"
        ),
      passwordConfirm: z
        .string()
        .min(6, "Password confirmation must be at least 6 characters"),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Password does not match",
      path: ["passwordConfirm"],
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

// login schema
export const loginSchema = z.object({
  body: z.object({
    emailAddress: z.email(),
    password: z.string().min(6),
  }),
});
