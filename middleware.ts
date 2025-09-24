import { NextResponse } from "next/server"

export async function middleware(req) {
  const pathname = req.nextUrl.pathname

  // Ignorar rutas internas y páginas públicas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname === "/favicon.ico" ||
    pathname === "/login" ||
    pathname === "/register" ||
    req.nextUrl.origin === "http://localhost:3000"
  ) {
    return NextResponse.next()
  }

  const token = req.cookies.get("next-auth.session-token") // Verifica sesión

  if (!token) {
    // Redirige a /register si no hay sesión
    return NextResponse.redirect(new URL("/register", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api/auth|favicon.ico).*)"]
}
