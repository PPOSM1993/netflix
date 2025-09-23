import React from "react";
import { cn } from "@/lib/utils";
import { Search, BellRing } from "lucide-react";
import { Logo } from "@/components/Logo/Logo";
export default function NavbarDesktop() {

    return (
        <>
            <div
                className={cn(
                    "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
                )}
            >
                <div className="px-[4%] mx-auto h-full">
                    <div className="flex gap-4 justify-between h-full items-center">
                        <div className="flex gap-2 items-center">
                            <Logo />
                            <div className="ml-10 flex gap-4">
                                <p>Home</p>
                                <p>Movies</p>
                                <p>Series</p>
                                <p>Profile</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Search className="cursor-pointer" />
                            <BellRing className="cursor-pointer" />

                            <div className="flex gap-2 items-center">
                                {/* TODO: Add user profile */}
                                <p>Pedro</p>
                                <p>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}