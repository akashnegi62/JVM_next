// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const method = request.method;

  // ✅ Public API for contact form submit
  if (pathname === "/api/contacts" && method === "POST") {
    return NextResponse.next();
  }

  // ✅ Redirect /admin to /login
  if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Public auth routes + login pages
  if (
    pathname.startsWith("/api/auth/") ||
    pathname === "/admin/login" ||
    pathname === "/login"
  ) {
    const token = request.cookies.get("auth_session")?.value;

    // If already logged in → send to dashboard
    if (token && (pathname === "/admin/login" || pathname === "/login")) {
      const user = await verifyToken(token);

      if (user) {
        return NextResponse.redirect(
          new URL("/admin/contacts", request.url)
        );
      }
    }

    return NextResponse.next();
  }

  // 🔒 Protect admin child routes only
  if (pathname.startsWith("/admin/")) {
    const token = request.cookies.get("auth_session")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    const user = await verifyToken(token);

    if (!user) {
      const res = NextResponse.redirect(
        new URL("/admin/login", request.url)
      );

      res.cookies.delete("auth_session");

      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/admin/login" , "/admin"],
};