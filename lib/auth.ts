import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

/**
 * Redirects unauthenticated users to the login page.
 * If the user is authenticated, it allows access to the requested page.
 * Optionally, it stores the target page in a query parameter so users can be redirected back.
 */
export const requireAuth = async (context: GetServerSidePropsContext) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    // If the user is not authenticated, redirect them to the login page
    const callbackUrl = context.resolvedUrl; // The page the user tried to access
    return {
      redirect: {
        destination: `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`,
        permanent: false,
      },
    };
  }

  // If authenticated, return an empty object
  return { props: {} };
};
