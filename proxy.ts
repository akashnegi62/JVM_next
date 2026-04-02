import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Function MUST be named "proxy" and exported
export function proxy(request: NextRequest) {
  // Match the cookie name from your login API
  const token = request.cookies.get("auth_token")?.value;

  const pathname = request.nextUrl.pathname;

  // Handle both /login and /(auth)/login (route groups don't appear in pathname)
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/login";

  // 🔒 Block /admin if no valid token
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🔁 Redirect /login to /admin if already authenticated
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// Config export is still required
export const config = {
  matcher: ["/admin/:path*", "/login"],
};
