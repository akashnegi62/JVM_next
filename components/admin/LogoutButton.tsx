"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // Call the API route to clear the cookie
      await fetch("/api/auth/logout", { method: "POST" });

      // Redirect to login
      router.push("/(auth)/login");
      router.refresh(); // Ensure state is cleared
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-2 bg-white border border-red-200 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition font-medium shadow-sm disabled:opacity-50"
    >
      {loading ? (
        <span className="text-sm">Logging out...</span>
      ) : (
        <>
          <FaSignOutAlt />
          <span>Logout</span>
        </>
      )}
    </button>
  );
}
