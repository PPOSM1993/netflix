
import Link from "next/link";
import Image from "next/image";


export function Logo() {
  return (
    <Link href="/" className="font-extrabold text-2xl text-[#E50914]">
      {/* Estan las 2 opciones, Logo de Letras o Logo de Imagen */}
     {/**
      * 
      *       <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
      />
      */}
      <h1 className="text-4xl">NETFLIX</h1>
    </Link>
  );
}