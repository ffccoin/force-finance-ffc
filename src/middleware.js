import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  console.log("BASEPATH:", req.nextUrl.hostname);
  if (
    req.geo.country === "CA" &&
    req.nextUrl.hostname === "www.forcefinancecoin.com"
  ) {
    return NextResponse.redirect("https://www.forcefinancecoin.ca/");
  }
  if (
    req.geo.country !== "CA" &&
    req.nextUrl.hostname === "www.forcefinancecoin.ca"
  ) {
    return NextResponse.redirect("https://www.forcefinancecoin.com/");
  }
}
