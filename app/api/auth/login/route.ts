import { NextResponse } from "next/server";
import { ADMIN_CREDENTIALS, AUTH_COOKIE } from "@/lib/constants";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const res = NextResponse.json({ success: true });

    res.cookies.set(AUTH_COOKIE, "true", {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });

    return res;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}