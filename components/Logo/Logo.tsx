import Link from "next/link";
import Image from "next/image";


export function Logo() {
  return (
    <Link href="/" className="font-extrabold text-2xl text-[#E50914]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
      />
    </Link>
  );
}