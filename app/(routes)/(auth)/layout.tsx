import { Logo } from "@/components/Shared/Logo";
import { Toaster } from "@/components/ui/toaster";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <div className="relative min-h-screen">
          {/* Fondo */}
          <div className="absolute inset-0 -z-10 bg-black">
            <div className="h-full w-full bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat opacity-40" />
          </div>

          {/* Logo */}
          <div className="px-8 py-5 max-w-7xl mx-auto">
            <Logo />
          </div>

          {/* Contenedor centrado */}
          <div className="flex min-h-screen w-full items-center justify-center gap-4">
            <div className="bg-black/70 px-14 py-16 w-full max-w-md">
              {children}
              <Toaster />

            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  )
}
