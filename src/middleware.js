// pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "UNKNOWN";

  if (country === "CA") {
    return NextResponse.redirect("https://www.forcefinance.ca");
  } else {
    return NextResponse.redirect("https://www.forcefinance.com");
  }
}
