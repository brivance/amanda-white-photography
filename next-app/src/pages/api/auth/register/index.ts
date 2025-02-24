import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import prisma from "@lib/prisma";
import { z } from "zod";

export const RegisterParams = z.object({
  email: z.string().email(),
  registrationCode: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
});

type RegisterParams = z.infer<typeof RegisterParams>;

const createUser = async ({
  email,
  username,
  password,
}: Omit<RegisterParams, "registrationCode">) => {
  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });

  return newUser;
};

export type RegisterResponse = Awaited<ReturnType<typeof createUser>>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse | { error: string }>
): Promise<void> {
  if (req.method === "POST") {
    try {
      const validatedData = RegisterParams.parse(req.body);
      if (validatedData.registrationCode !== process.env.REGISTRATION_CODE) {
        return res.status(400).json({ error: "Invalid registration code" });
      }
      const existingUser = await prisma.user.findUnique({
        where: {
          username: validatedData.username,
        },
      });
      if (existingUser) {
        return res.status(400).json({ error: "Username already in use" });
      }
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      console.log("hashedPassword", hashedPassword);
      console.log("username", validatedData.username);
      console.log("email", validatedData.email);
      const newUser = await createUser({
        email: validatedData.email,
        username: validatedData.username,
        password: hashedPassword,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Invalid input or server error" });
    }
  } else {
    console.error("Method not allowed");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
