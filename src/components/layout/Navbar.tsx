import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
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
                <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl tracking-tight text-primary">
                        Hoy Tu<span className="text-foreground">Emprendes</span>
                    </Link>
                </div>

                {/* Navegación Desktop (Visible desde md en adelante) */}
                <div className="hidden md:flex items-center gap-8">

                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {link.title}
                        </Link>
                    ))}
                    <Button size="sm">Únete a la Red</Button>
                    <ModeToggle />
                </div>

                {/* Navegación Mobile (Visible solo en pantallas pequeñas) */}
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
                                <Button className="w-full mt-4">Únete a la Red</Button>

                                <p className="text-xs text-muted-foreground mt-10">
                                    © 2024 Soacha Emprende. <br />
                                    Impulsando el talento de nuestra ciudad.
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;