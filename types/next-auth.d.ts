import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    user: {
      id: string;
      username: string;
      email: string;
    };
  }

  interface User extends DefaultUser {
    id: string;
    username: string;
    email: string;
  }
}
