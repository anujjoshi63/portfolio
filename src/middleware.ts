import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const redirects: { [key: string]: string } = {
  "/gh": "https://github.com/anujjoshi63",
  "/li": "https://linkedin.com/in/thejoshi",
  "/resume": "https://teensy.tech/anujresume",
};

export function middleware(request: NextRequest) {
  const url = redirects[request.nextUrl.pathname];
  if (url && isValidUrl(url)) {
    return NextResponse.redirect(url);
  }
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export const config = {
  matcher: "/:path*",
};
