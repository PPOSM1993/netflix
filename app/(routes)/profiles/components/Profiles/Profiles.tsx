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

export default function Profiles(props: ProfilesProps) {
    const { users } = props;
    const [manageProfile, setManageProfile] = useState(false);

    const deleteUser = async (userIdNetflix: string) => {
        try {
            axios.delete("/api/userNetflix", { data: { userIdNetflix } });
        } catch (error) {
            console.error(error);
            toast({ title: "❌ Ops! Something went wrong", variant: "destructive" });
        }
    }

    return (
        <>
            <div className="flex gap-7">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="text-center relative cursor-pointer"
                    >
                        <Image
                            src={user.avatarUrl || ""}
                            alt={`Profile Image ${user.profileName}`}
                            width={140}
                            height={140}
                            className={cn(
                                manageProfile ? "blur-md" : "",
                                "border-transparent hover:border-2 hover:border-white rounded-md"
                            )}
                        />
                        <p className="mt-2 text-gray-500 uppercase text-lg text-center">
                            {user.profileName}
                        </p>

                        <div
                            className={cn(
                                "top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                                manageProfile ? "absolute" : "hidden"
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
                    onClick={() => setManageProfile(true)}
                >
                    Profile Admin
                </Button>
            </div>
        </>
    );
}
