import { connectDB } from "@/lib/db";
import Product from "@/modules/Product";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { _id: ObjectId } },
) {
  try {
    await connectDB();
    const { _id } = await params;

    // validation
    const validId = ObjectId.isValid(_id);
    if (!validId) {
      return NextResponse.json({
        error: "please provide valid object id",
      });
    }

    const products = await Product.findById(_id);
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
