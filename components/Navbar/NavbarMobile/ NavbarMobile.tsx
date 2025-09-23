import React from "react";
import { Logo } from "@/components/Shared/Logo/Logo";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { BellRing, Menu, Search } from "lucide-react";
import { itemsNavbar } from "@/data/itemsNavbar";

export default function NavbarMobile() {
    return (
        <div className="p-4 flex justify-between">
            <Logo />

            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>

                <SheetContent side="left" className="bg-black">
                    {/* --- Encabezado accesible --- */}
                    <SheetHeader>
                        {/* Si quieres mostrar el título visible: */}
                        {/* <SheetTitle>Menú de navegación</SheetTitle> */}

                        {/* Si NO quieres mostrarlo visualmente: */}
                        <SheetTitle className="text-left text-2xl">Menú</SheetTitle>

                        {/* Descripción opcional (puedes eliminar si no necesitas) */}
                        <SheetDescription className="sr-only">
                            Sección de enlaces de la aplicación
                        </SheetDescription>
                    </SheetHeader>

                    {/* --- Contenido --- */}
                    <div className="flex flex-col gap-4 mt-4">
                        {itemsNavbar.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="hover:text-gray-300 transition-all duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="border-[1px] border-white/70 my-5" />

                    <div className="flex justify-left gap-4 mt-4">
                        <Search className="cursor-pointer" />
                        <BellRing className="cursor-pointer" />
                        {/* TODO: Add user profile */}
                        <p>Pedro</p>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
