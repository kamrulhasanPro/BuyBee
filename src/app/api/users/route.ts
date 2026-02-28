import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // const db = await connectDB();
  // console.log(db);

  return NextResponse.json({ name: "kamrul" });
}
