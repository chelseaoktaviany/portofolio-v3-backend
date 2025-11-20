import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

interface UserType {
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
}: UserType) => {
  // Hash password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // fix this user creation
  const user = await prisma.users.create({
    data: {
      firstName,
      lastName,
      username,
      emailAddress,
      password: hashedPassword,
      createdAt: new Date(),
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

export const loginUser = async (emailAddress: string, password: string) => {
  const user = await prisma.users.findUnique({ where: { emailAddress } });

  if (!user) {
    throw new Error("Invalid e-mail address or password");
  }

  // check if password is correct with registered password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid e-mail address or password");
  }

  // remove password before returning
  const { password: _, ...safeUser } = user;

  return safeUser;
};
