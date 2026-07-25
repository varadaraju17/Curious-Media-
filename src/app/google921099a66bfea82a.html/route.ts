import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("google-site-verification: google921099a66bfea82a.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
