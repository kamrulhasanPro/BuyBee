import { connectDB } from "@/lib/db";
import Product from "@/modules/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong....",
        error,
      },
      { status: 200 },
    );
  }
}
