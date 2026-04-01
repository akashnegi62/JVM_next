import { cookies } from "next/headers";
import { AUTH_COOKIE } from "./constants";

export async function setAuthCookie() {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE, "true", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();

  cookieStore.delete(AUTH_COOKIE);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();

  return cookieStore.get(AUTH_COOKIE)?.value === "true";
}
