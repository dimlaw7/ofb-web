import { NextResponse } from "next/server";
import isAuthenticated from "./hooks/isAuthenticated";

export function middleware(request) {
  // Extract JWT token from request cookies
  const token = request.cookies.get("token");
  const isLoggedIn = isAuthenticated(token);

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
