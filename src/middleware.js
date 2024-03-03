import { NextRequest, NextResponse } from "next/server";

export const runtime = "experimental-edge";

export function middleware(req) {
  if (req.geo.country === "CA") {
    return NextResponse.redirect("https://www.forcefinancecoin.ca/");
  }
  if (req.geo.country !== "CA") {
    return NextResponse.redirect("https://www.forcefinancecoin.com/");
  }
}
