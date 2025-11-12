import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: { enabled: true },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: ["http://localhost:3001"],
  session: {
    modelName: "sessions",
    fields: {
      userId: "id",
    },
    expiresIn: 604800, // 7 days
    updateAge: 86400, // 1 day
    disableSessionRefresh: true,
    storeSessionInDatabase: true,
    cookieCache: {
      enabled: true,
      maxAge: 300, // 5 minutes
    },
  },
});

export default auth;
