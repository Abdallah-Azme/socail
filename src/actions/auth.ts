"use server";
import jwt from "jsonwebtoken";

export const auth = async (value: string | undefined) => {
  if (value) {
    const cookieObject = (await jwt.decode(value)) as { email: string };
    return cookieObject?.email;
  }
  return null;
};
