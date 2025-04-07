import NextAuth, { Session, SessionStrategy } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

type SafeUser = {
  id: string;
  username: string;
  email: string;
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(process.env.NEXTAUTH_URL + "/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user.user;
        }
        return null; // In place of user return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: SafeUser }) {
      if (user) {
        token.user = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.user) {
        session.user = token.user as SafeUser;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
