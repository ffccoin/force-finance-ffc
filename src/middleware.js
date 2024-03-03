// pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  console.log("Request URL:", req.geo.country);

  // if country is canada
  if (req.geo.country === "CA") {
    return NextResponse.redirect(new URL("www.forcefinancecoin.ca"));
  } else {
    return NextResponse.redirect(new URL("www.forcefinancecoin.com"));
  }
  return NextResponse.next();
}
