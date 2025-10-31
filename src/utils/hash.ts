import bcrypt from "bcrypt";

// hashing password
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

// comparing password
export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
