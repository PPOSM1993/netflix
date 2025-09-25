import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const user = await currentUser();


    const { profileName, avatarUrl } = await req.json();

    if (!user) {
        return NextResponse.json({ message: "No user logged in" }, { status: 401 });
    }

    if (!profileName || !avatarUrl || !user?.id) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const userCreated = await db.userNetflix.create({
        data: {
            profileName,
            avatarUrl,
            userId: user.id,
        }
    });

    return NextResponse.json(userCreated);
}

export async function DELETE(req: Request) {
    const user = await currentUser();

    if (!user) {
        return NextResponse.json({ message: "No user logged in" }, { status: 401 });
    }
    const { userIdNetflix } = await req.json();

    if(!userIdNetflix) {
        return new NextResponse("Id is required", { status: 400 });
    }

    const userDeleted = await db.userNetflix.deleteMany({
        where: {
            userId: userIdNetflix,
        }
    });

    return NextResponse.json(userDeleted);
}