import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

//connection made to mongodb
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, passwordHash } = reqBody;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(passwordHash, salt);
    const newUser = new User({
      name,
      email,
      passwordHash: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ ws_error: error.message }, { status: 500 });
  }
}
