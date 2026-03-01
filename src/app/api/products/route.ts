import { connectDB } from "@/lib/db";
import Product from "@/modules/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("search");

    console.log({ search, name: "server" });
    const query = search
      ? {
          title: { $regex: search, $options: "i" },
        }
      : {};
    await connectDB();
    const products = await Product.find(query).lean();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong....",
        error,
      },
      { status: 500 },
    );
  }
}
