import bcrypt from "bcrypt";

import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;

    if (!email || !name || !password) {
      throw new NextResponse("Invalid email or password", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, name, hashedPassword },
    });

    return NextResponse.json(user);
  } catch (err) {
    console.log("=>  file: route.ts:24  POST  err:", err);
    return new NextResponse("internal error", { status: 500 });
  }
}
