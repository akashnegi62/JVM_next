"use client";

import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  };

  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">Admin Panel</h2>

      <button
        onClick={handleLogout}
        className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80"
      >
        Logout
      </button>
    </header>
  );
}