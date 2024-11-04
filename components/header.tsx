"use client";

import { MoonIcon, SunIcon, UserCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "./auth-provider";
import Link from "next/link";

export default function Header() {
  const { setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Noites Abertas</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/eventos" className="text-muted-foreground hover:text-foreground">
              Eventos
            </Link>
            <Link href="/zonas" className="text-muted-foreground hover:text-foreground">
              Zonas
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Cambiar tema</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Claro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Escuro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                Sistema
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <UserCircle className="h-5 w-5" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/perfil">O meu perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/eventos-gardados">Eventos gardados</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  Pechar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="default">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}