import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const VALID_USER = "admin";
const VALID_PASS = "password";
const secret = new TextEncoder().encode("my-super-secret-key-123");

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === VALID_USER && password === VALID_PASS) {
    const token = await new SignJWT({ role: "admin", user: username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);

    // ✅ Fix: await cookies()
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // "lax" works better for local dev redirects
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
