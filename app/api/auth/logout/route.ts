import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/constants";

export async function POST() {
  const res = NextResponse.json({ success: true });

  res.cookies.set(AUTH_COOKIE, "", { maxAge: 0, path: "/" });

  return res;
}