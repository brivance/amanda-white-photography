import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import prisma from "@lib/prisma";
import { z } from "zod";

export const LoginParams = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type LoginParams = z.infer<typeof LoginParams>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    try {
      const validatedData = LoginParams.parse(req.body);

      const existingUser = await prisma.user.findUnique({
        where: {
          username: validatedData.username,
        },
      });

      if (!existingUser) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }

      const passwordMatch = await bcrypt.compare(
        validatedData.password,
        existingUser.password
      );
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      console.log("user logged in successfully");
      return res
        .status(201)
        .json({ message: "User logged in successfully", user: existingUser });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Invalid input or server error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
