import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname == "/dashboard") {
    // Extract JWT token from request cookies
    const token = request.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
