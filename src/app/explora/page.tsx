"use client";

import { useState } from "react";
import {
    Map,
    Search,
    SlidersHorizontal,
    MapPin,
    Star
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SoachaMap from "@/components/explora/SoachaMap";

// ============================================
// DATOS DE NEGOCIOS (Centralizados)
// ============================================
const negocios = [
    {
        id: 1,
        nombre: "Panadería Artesanal Alejandria",
        ubicacion: "San Mateo, Soacha",
        descripcion: "Especialistas en pan de masa madre y productos típicos de la región. Más de 10 años de experiencia.",
        calificacion: 4.8,
        imagen: "/negocios/panaderia-alejandria.webp",
        categoria: "Gastronomía"
    },
    {
        id: 2,
        nombre: "Café Cultural El Vergel",
        ubicacion: "Comuna 3, Soacha",
        descripcion: "Café de especialidad con granos cultivados en Cundinamarca. Ambiente cultural y música en vivo.",
        calificacion: 4.9,
        imagen: "/negocios/cafe-el-vergel.webp",
        categoria: "Gastronomía"
    },
    {
        id: 3,
        nombre: "Textiles Artesanales Tejiendo Sueños",
        ubicacion: "Comuna 4, Soacha",
        descripcion: "Prendas y accesorios elaborados por artesanas locales con técnicas tradicionales.",
        calificacion: 4.7,
        imagen: "/negocios/textiles-tejiendo-suenos.webp",
        categoria: "Artesanías"
    },
    {
        id: 4,
        nombre: "Construcciones EcoSoacha",
        ubicacion: "Corregimiento 2, Soacha",
        descripcion: "Proyectos de vivienda sostenible y materiales reciclados. Innovación en construcción.",
        calificacion: 4.8,
        imagen: "/negocios/ecosoacha.webp",
        categoria: "Servicios"
    },
    {
        id: 5,
        nombre: "Moda Urbana Soacha",
        ubicacion: "Comuna 1, Soacha",
        descripcion: "Ropa urbana diseñada por jóvenes emprendedores locales. Estilo único y precios accesibles.",
        calificacion: 4.6,
        imagen: "/negocios/moda-urbana.webp",
        categoria: "Moda"
    },
    {
        id: 6,
        nombre: "Tech Solutions Soacha",
        ubicacion: "Comuna 5, Soacha",
        descripcion: "Reparación de dispositivos y asesoría tecnológica para pequeños negocios.",
        calificacion: 4.7,
        imagen: "/negocios/tech-solutions.webp",
        categoria: "Tecnología"
    }
];

// ============================================
// COMPONENTE: Tarjeta de Negocio
// ============================================
function BusinessCard({ negocio }: { negocio: typeof negocios[0] }) {
    return (
        <div className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video bg-muted relative">
                <div className="absolute top-2 right-2">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {negocio.calificacion}
                    </Badge>
                </div>
                <img
                    src={negocio.imagen}
                    alt={negocio.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "/placeholder-negocio.webp";
                    }}
                />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg line-clamp-1">{negocio.nombre}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1 shrink-0" />
                    <span className="line-clamp-1">{negocio.ubicacion}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                    {negocio.descripcion}
                </p>
                <div className="pt-2">
                    <Button variant="link" className="p-0 h-auto text-primary">
                        Ver detalles →
                    </Button>
                </div>
            </div>
        </div>
    );
}

// ============================================
// COMPONENTE: Lista de Negocios con Carga Progresiva
// ============================================
function BusinessList({ negocios, initialCount = 4 }: { negocios: typeof negocios, initialCount?: number }) {
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const hasMore = visibleCount < negocios.length;

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 4, negocios.length));
    };

    const visibleNegocios = negocios.slice(0, visibleCount);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleNegocios.map((negocio) => (
                    <BusinessCard key={negocio.id} negocio={negocio} />
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center pt-6">
                    <Button variant="outline" onClick={loadMore}>
                        Cargar más negocios
                    </Button>
                </div>
            )}
        </div>
    );
}

// ============================================
// PÁGINA PRINCIPAL
// ============================================
export default function ExploraPage() {
    return (
        <div className="container mx-auto py-10 px-4 space-y-8">

            {/* HEADER & BUSCADOR */}
            <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Directorio Local</h1>
                    <p className="text-muted-foreground">
                        Encuentra y apoya el talento de nuestra ciudad.
                    </p>
                </div>

                <div className="flex w-full max-w-sm items-center space-x-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Buscar por nombre o producto..." className="pl-10" />
                    </div>
                    <Button variant="outline" size="icon">
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </header>

            {/* FILTROS RÁPIDOS POR CATEGORÍA */}
            <div className="flex flex-wrap gap-2 pb-2">
                {["Todos", "Gastronomía", "Moda", "Tecnología", "Artesanías", "Servicios"].map((cat) => (
                    <Badge key={cat} variant="secondary" className="px-4 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        {cat}
                    </Badge>
                ))}
            </div>

            {/* LAYOUT PRINCIPAL: LISTADO Y MAPA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* COLUMNA DE RESULTADOS */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Mostrando {negocios.length} negocios en Soacha
                        </h2>
                    </div>

                    {/* Lista de Negocios */}
                    <BusinessList negocios={negocios} initialCount={4} />
                </div>

                {/* COLUMNA DE MAPA */}
                <div className="hidden lg:block lg:col-span-5 relative">
                    <div className="sticky top-24 h-[calc(100vh-140px)] rounded-3xl border overflow-hidden bg-muted/10">
                        <SoachaMap />
                    </div>
                </div>

            </div>

            {/* BANNER DE REGISTRO */}
            <section className="rounded-3xl bg-primary/5 border border-primary/20 p-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">¿Tienes un negocio en Soacha?</h2>
                        <p className="text-muted-foreground">Súmate al directorio más grande de la ciudad y aumenta tus ventas.</p>
                    </div>
                    <Button size="lg" className="shrink-0">Registrar mi Negocio</Button>
                </div>
            </section>

        </div>
    );
}