import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import LogoutButton from "@/components/admin/LogoutButton";

const secret = new TextEncoder().encode("my-super-secret-key-123");

export default async function AdminDashboard() {
  // Fix: await cookies()
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    redirect("/(auth)/login");
  }

  try {
    await jwtVerify(token, secret);
  } catch (error) {
    redirect("/(auth)/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Overview of your real estate platform
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-sm text-gray-500">Total Projects</h2>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-sm text-gray-500">Contact Requests</h2>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-sm text-gray-500">Users</h2>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="text-gray-500 text-sm">
            No activity yet. Once you connect Prisma + database, updates will
            appear here.
          </div>
        </div>
      </div>
    </div>
  );
}
