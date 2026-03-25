"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Declarar L como any para evitar errores de importación
declare const L: any;

export default function SoachaMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);

    // Centro de Soacha
    const soachaCenter = [4.5792, -74.2177];

    useEffect(() => {
        // Cargar Leaflet dinámicamente para evitar errores de SSR
        const loadLeaflet = async () => {
            try {
                const L = (await import("leaflet")).default;
                await import("leaflet/dist/leaflet.css");

                if (!mapRef.current || mapInstanceRef.current) return;

                // Solucionar problema de iconos
                delete (L.Icon.Default.prototype as any)._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
                    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
                    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
                });

                // Inicializar el mapa
                const map = L.map(mapRef.current).setView(soachaCenter, 13);
                mapInstanceRef.current = map;

                // Capa de OpenStreetMap
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    maxZoom: 18,
                }).addTo(map);

                // Agregar marcadores de ejemplo
                const negociosEjemplo = [
                    { nombre: "Panadería Alejandria", lat: 4.585, lng: -74.215, comuna: "Comuna 1" },
                    { nombre: "Café El Vergel", lat: 4.578, lng: -74.220, comuna: "Comuna 3" },
                    { nombre: "Textiles Tejiendo Sueños", lat: 4.575, lng: -74.222, comuna: "Comuna 4" },
                ];

                negociosEjemplo.forEach((negocio) => {
                    const marker = L.marker([negocio.lat, negocio.lng]).addTo(map);
                    marker.bindPopup(`
                        <div class="p-2">
                            <strong>${negocio.nombre}</strong><br>
                            ${negocio.comuna}
                        </div>
                    `);
                });

                // Limpiar al desmontar
                return () => {
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                };
            } catch (error) {
                console.error("Error loading Leaflet:", error);
            }
        };

        loadLeaflet();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    const zoomToAll = () => {
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView(soachaCenter, 12);
        }
    };

    const zoomToComunas = () => {
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView([4.575, -74.220], 13);
        }
    };

    const zoomToCorregimientos = () => {
        if (mapInstanceRef.current) {
            mapInstanceRef.current.setView([4.562, -74.232], 12);
        }
    };

    return (
        <div className="w-full h-full relative">
            <div ref={mapRef} className="w-full h-full rounded-3xl" style={{ minHeight: "500px" }} />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-[1000]">
                <Button
                    size="sm"
                    className="flex-1 bg-background/90 backdrop-blur-sm text-foreground hover:bg-muted border shadow-md"
                    onClick={zoomToComunas}
                >
                    Comuna 1-6
                </Button>
                <Button
                    size="sm"
                    className="flex-1 bg-background/90 backdrop-blur-sm text-foreground hover:bg-muted border shadow-md"
                    onClick={zoomToCorregimientos}
                >
                    Corregimientos
                </Button>
                <Button
                    size="sm"
                    className="flex-1 bg-primary/90 backdrop-blur-sm text-white hover:bg-primary border shadow-md"
                    onClick={zoomToAll}
                >
                    Ver todo
                </Button>
            </div>
        </div>
    );
}