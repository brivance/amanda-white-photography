import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Error logging out", error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div>
      {loading ? (
        <div>Logging out...</div> // Optional loading state
      ) : (
        <button onClick={handleLogout}>Logout</button> // Logout button
      )}
    </div>
  );
};

export default LogoutButton;
