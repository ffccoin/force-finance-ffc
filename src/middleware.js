// pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "UNKNOWN";
  console.log("middleware", req.url);
  if (req.url === "www.forcefinancecoin.ca" && country !== "CA") {
    return NextResponse.redirect("https://www.forcefinancecoin.com");
  } else if (req.url === "www.forcefinancecoin.com" && country === "CA") {
    return NextResponse.redirect("https://www.forcefinancecoin.ca");
  }
  return NextRequest.next();
}
