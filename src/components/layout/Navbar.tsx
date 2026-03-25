import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import Logo from './Logo';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
    // Definimos los links para no repetir código
    const navLinks = [
        { title: "Inicio", href: "/" },
        { title: "Cifras de Impacto", href: "/cifras" },
        { title: "Casos de Éxito", href: "/casos-exito" },
        { title: "Aprende", href: "/aprende" },
        { title: "Explora", href: "/explora" },
        { title: "Descubre tu potencial", href: "/descubre" },
        { title: "Red de Apoyo", href: "/apoyo" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo Lado Izquierdo */}
                <div className="flex flex-1 justify-start items-center">
                    <Logo />
                </div>

                {/* Navegación Desktop (Visible desde md en adelante, centrado) */}
                <div className="hidden md:flex justify-center items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Lado Derecho: Toggle y/o Menú Móvil */}
                <div className="flex flex-1 justify-end items-center gap-4">
                    {/* Theme Toggle Solo Desktop */}
                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>

                    {/* Navegación Mobile */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Abrir menú">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left text-primary font-bold">
                                        Menú de Navegación
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 mt-10">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.href}
                                            className="text-lg font-semibold border-b pb-2 transition-colors hover:text-primary"
                                        >
                                            {link.title}
                                        </Link>
                                    ))}

                                    {/* Theme toggle en móvil */}
                                    <div className="flex items-center justify-between border-t pt-4">
                                        <span className="font-medium text-foreground">Apariencia</span>
                                        <ModeToggle />
                                    </div>

                                    <p className="text-xs text-muted-foreground mt-10">
                                        © 2024 Soacha Emprende. <br />
                                        Impulsando el talento de nuestra ciudad.
                                    </p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;