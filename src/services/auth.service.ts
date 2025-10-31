import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const auth = betterAuth({
  provider: ["credentials"],
  secret: process.env.AUTH_SECRET!,
  async authorize(credentials: { emailAddress: string; password: string }) {
    const user = await prisma.users.findUnique({
      where: { emailAddress: credentials.emailAddress },
    });

    if (!user) return null;

    const isValid = await compare(credentials.password, user.password);
    if (!isValid) return null;

    return { id: user.id, emailAddress: user.emailAddress };
  },
});
