import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

interface UserTypes {
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
  password: string;
}

export const registerUser = async ({
  firstName,
  lastName,
  username,
  emailAddress,
  password,
}: UserTypes) => {
  // // Hash password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // fix this user creation
  const user = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      username: username,
      emailAddress: emailAddress,
      password: hashedPassword,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      username: true,
      emailAddress: true,
      createdAt: true,
    },
  });
  return user;
};
