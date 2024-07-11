import { NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";

async function verifyJWT(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request) {
  // Extract JWT token from request cookies
  const token = request.cookies.get("token");

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    const decoded = await verifyJWT(token.value);
    if (token && decoded) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const decoded = await verifyJWT(token.value);
    if (!decoded) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
