"use client";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";
import { FormAddProfile } from "../../FormAddProfile";

export function AddProfile() {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className="group hover:cursor-pointer">
                        <div
                            className="w-[140px] h-[140px] flex flex-col justify-center items-center group-hover:bg-slate-300 rounded-md">
                            <PlusCircle className="w-16 h-16 text-gray-500" />
                        </div>
                        <p className="mt-2 text-gray-500 uppercase text-lg text-center">Add Profile</p>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-black">
                    <DialogHeader>
                        <DialogTitle>New Profile</DialogTitle>
                        <DialogDescription>
                            Add a new profile to your account.a
                        </DialogDescription>
                    </DialogHeader>
                    <FormAddProfile setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </>
    )
}