"use client";

import React, { useState } from "react";
import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile/AddProfile";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import axios from "axios";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useCurrentNetflixUser } from "@/hooks/use-current.users";
import { UserNetflix } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function Profiles(props: ProfilesProps) {
    const { users } = props;
    const { changeCurrentUser, currentUser } = useCurrentNetflixUser();
    console.log(currentUser);



    const [profiles, setProfiles] = useState(users);
    const [manageProfiles, setManageProfiles] = useState(false);
    const router = useRouter(); // 👈 aquí inicializas

    const onClickUser = (user: UserNetflix) => {
        changeCurrentUser(user);
        router.push("/"); // 👈 ya funciona en App Router
    };

    const deleteUser = async (userIdNetflix: string) => {
        try {
            await axios.delete("/api/userNetflix", { data: { userIdNetflix } });

            setProfiles((prev) => prev.filter((u) => u.id !== userIdNetflix));

            toast({ title: "Perfil eliminado correctamente ✅" });
        } catch (error) {
            console.log(error);
            toast({ title: "Ops! Ha ocurrido un error", variant: "destructive" });
        }
    };

    return (
        <>
            <div className="flex gap-7">
                {profiles.map((user) => (
                    <div
                        key={user.id}
                        className="text-center relative cursor-pointer"
                        onClick={() => onClickUser(user)}
                    >
                        <Image
                            src={user.avatarUrl || ""}
                            alt={`Profile Image ${user.profileName}`}
                            width={140}
                            height={140}
                            className={cn(
                                manageProfiles ? "blur-md" : "",
                                "border-transparent hover:border-2 hover:border-white rounded-md"
                            )}
                        />
                        <p className="mt-2 text-gray-500 uppercase text-lg text-center">
                            {user.profileName}
                        </p>

                        <div
                            className={cn(
                                "top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                                manageProfiles ? "absolute" : "hidden"
                            )}
                        >
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <div className="bg-white rounded-full hover:bg-red-100 p-1">
                                        <Trash2 className="w-6 h-6 text-red-500 " />
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-zinc-900">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete Profile</AlertDialogTitle>
                                        <AlertDialogDescription className="text-white">
                                            Are you sure you want to delete this profile?
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Back to Profile</AlertDialogCancel>
                                        <AlertDialogAction
                                            className="text-red-500 border-red-500 border"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
                <AddProfile />
            </div>

            <div className="mt-16 flex items-center justify-center">
                <Button
                    variant="outline"
                    size="lg"
                    className="text-gray-500 border-gray-500"
                    onClick={() => setManageProfiles(!manageProfiles)}
                >
                    Admim Profiles
                </Button>
            </div>
        </>
    );
}
