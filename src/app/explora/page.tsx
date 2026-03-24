import { Metadata } from "next";
import {
    Map,
    Search,
    SlidersHorizontal,
    Store,
    MapPin,
    Star
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Explora Negocios Locales | Soacha Emprende",
    description: "Descubre el ecosistema comercial de Soacha. Filtra por comunas y categorías.",
};

export default function ExploraPage() {
    return (
        <div className="container mx-auto py-10 px-4 space-y-8">

            {/* 1. HEADER & BUSCADOR */}
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

            {/* 2. FILTROS RÁPIDOS POR CATEGORÍA
          Componente futuro: @/features/explora/components/CategoryFilters
      */}
            <div className="flex flex-wrap gap-2 pb-2">
                {["Todos", "Gastronomía", "Moda", "Tecnología", "Artesanías", "Servicios"].map((cat) => (
                    <Badge key={cat} variant="secondary" className="px-4 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        {cat}
                    </Badge>
                ))}
            </div>

            {/* 3. LAYOUT PRINCIPAL: LISTADO Y MAPA
          En escritorio usamos un grid para mostrar el mapa al lado.
      */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* COLUMNA DE RESULTADOS (Izquierda) */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Mostrando 12 resultados en Soacha
                        </h2>
                    </div>

                    {/* Iteración de Negocios
              Componente futuro: @/features/explora/components/BusinessCard
          */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all">
                                <div className="aspect-video bg-muted relative">
                                    <div className="absolute top-2 right-2">
                                        <Badge className="bg-background/80 backdrop-blur-md text-foreground">
                                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" /> 4.8
                                        </Badge>
                                    </div>
                                    {/* Placeholder de Imagen */}
                                    <div className="w-full h-full flex items-center justify-center italic text-xs text-muted-foreground">
                                        Imagen del Negocio {i}
                                    </div>
                                </div>
                                <div className="p-4 space-y-2">
                                    <h3 className="font-bold text-lg">Pan artesanal Comuna 2</h3>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <MapPin className="h-3 w-3 mr-1" /> San Mateo, Soacha
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        Especialistas en pan de masa madre y productos típicos de la región.
                                    </p>
                                    <div className="pt-2">
                                        <Button variant="link" className="p-0 h-auto text-primary">
                                            Ver detalles →
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center pt-6">
                        <Button variant="outline">Cargar más negocios</Button>
                    </div>
                </div>

                {/* COLUMNA DE MAPA (Derecha - Sticky)
            Componente futuro: @/features/explora/components/SoachaMap
        */}
                <div className="hidden lg:block lg:col-span-5 relative">
                    <div className="sticky top-24 h-[calc(100vh-140px)] rounded-3xl border bg-muted overflow-hidden">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                            <Map className="h-12 w-12 text-primary opacity-20" />
                            <div className="space-y-2">
                                <p className="font-medium">Mapa Interactivo de Soacha</p>
                                <p className="text-xs text-muted-foreground max-w-[200px]">
                                    Visualiza los emprendimientos por Comunas y Corregimientos.
                                </p>
                            </div>
                            <div className="border-2 border-dashed rounded-lg p-4 w-full">
                                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                                    Componente: SoachaMap (Mapbox/Leaflet)
                                </p>
                            </div>
                        </div>
                        {/* Overlay de botones de control */}
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <Button size="sm" className="flex-1 bg-background text-foreground hover:bg-muted">
                                Comuna 1-6
                            </Button>
                            <Button size="sm" className="flex-1 bg-background text-foreground hover:bg-muted">
                                Corregimientos
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

            {/* 4. BANNER DE REGISTRO */}
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