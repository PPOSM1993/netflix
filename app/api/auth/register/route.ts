import bcrypyt from "bcryptjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    console.log(email);
    console.log(password);

    try {
        const hashedPassword = await bcrypyt.hash(password, 10);
        const existingUser = await db.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json("Email already exists", { status: 400 });
        }
        const userCreated = await db.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        });
        return NextResponse.json(userCreated);
    } catch (error) {
      console.error(error);
        return NextResponse.json("Internal Error", { status: 500 });
    }
}