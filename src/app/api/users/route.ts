import { connectDB } from "@/lib/db";
import User from "@/modules/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    // const searchParams = req.nextUrl.searchParams;
    // const email = searchParams.get("email");

    // if (email) {
    //   const user = await User.findOne({ email });
    //   if (!user) {
    //     return NextResponse.json(null, { status: 404 });
    //   }
    //   return NextResponse.json(user, { status: 200 });
    // }

    const users = await User.find();
    if (!users) {
      return NextResponse.json(null, { status: 404 });
    }
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong.", error },
      { status: 404 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const user = await req.json();
    console.log(user);

    // check user
    const isExistUser = await User.findOne({ email: user?.email });

    if (isExistUser) {
      return NextResponse.json({ error: "Already Exist this user." });
    }

    // create user
    const newUser = new User(user);
    await newUser.save();
    return NextResponse.json({ message: "success", newUser });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 404 },
    );
  }
}
