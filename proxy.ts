import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  const isLoginPage = req.nextUrl.pathname === "/login";

  if (isAdminRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isLoginPage && session) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
