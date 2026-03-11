import { Metadata } from "next";
import {
    BarChartBig,
    Download,
    Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Metadata para SEO local
export const metadata: Metadata = {
    title: "Cifras de Emprendimiento | Soacha Emprende",
    description: "Análisis detallado de la economía y el crecimiento empresarial en Soacha, Cundinamarca.",
};

export default function CifrasPage() {
    return (
        <div className="container mx-auto py-10 px-4 space-y-10">

            {/* Encabezado de la Página */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Impacto Económico en Soacha
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Visualiza el crecimiento del tejido empresarial de nuestra ciudad en tiempo real.
                    </p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-9">
                        <Filter className="mr-2 h-4 w-4" /> Filtrar Periodo
                    </Button>
                    <Button size="sm" className="h-9">
                        <Download className="mr-2 h-4 w-4" /> Exportar Datos
                    </Button>
                </div>
            </header>

            {/* PASO 1: RESUMEN DE KPI (Key Performance Indicators)
        Aquí llamaremos a un componente que muestre tarjetas con datos rápidos.
        Ejemplo: <StatsOverview /> (Basado en el StatsGrid que ya hicimos o uno más específico)
      */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Espacio para componente: @/features/stats/components/StatsCards */}
                <div className="h-32 rounded-xl border-2 border-dashed flex items-center justify-center text-muted-foreground">
                    Componente: StatsCards (Resumen de indicadores clave)
                </div>
                <div className="h-32 rounded-xl border-2 border-dashed flex items-center justify-center text-muted-foreground">
                    Cifra: PIB Local Soacha
                </div>
                <div className="h-32 rounded-xl border-2 border-dashed flex items-center justify-center text-muted-foreground">
                    Cifra: Empleos Formales
                </div>
                <div className="h-32 rounded-xl border-2 border-dashed flex items-center justify-center text-muted-foreground">
                    Cifra: Densidad Empresarial
                </div>
            </div>

            {/* PASO 2: VISUALIZACIÓN GRÁFICA
        Gráficos de barras o líneas para mostrar tendencias.
      */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                {/* Gráfico Principal (Ocupa más espacio) */}
                <div className="col-span-full lg:col-span-4 rounded-xl border bg-card p-6 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center">
                        <BarChartBig className="mr-2 h-5 w-5 text-primary" />
                        Crecimiento Mensual de Empresas
                    </h3>
                    {/* Espacio para componente: @/features/stats/components/MainGrowthChart (Usando Recharts) */}
                    <div className="h-[350px] bg-muted/20 rounded-lg flex items-center justify-center border border-dashed text-sm italic">
                        Visualización: Gráfico de Líneas Recharts
                    </div>
                </div>

                {/* Distribución por Sector */}
                <div className="col-span-full lg:col-span-3 rounded-xl border bg-card p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Distribución por Sectores</h3>
                    {/* Espacio para componente: @/features/stats/components/SectorPieChart */}
                    <div className="h-[350px] bg-muted/20 rounded-lg flex items-center justify-center border border-dashed text-sm italic">
                        Visualización: Gráfico de Torta (Comercio, Servicios, Industria)
                    </div>
                </div>
            </div>

            {/* PASO 3: TABLA DETALLADA O TOP BARRIOS/COMUNAS
        Lista de las zonas de Soacha con mayor actividad.
      */}
            <section className="rounded-xl border bg-card overflow-hidden">
                <div className="p-6 border-b">
                    <h3 className="font-semibold">Actividad por Comunas</h3>
                </div>
                {/* Espacio para componente: @/features/stats/components/ComunasTable */}
                <div className="p-8 text-center text-muted-foreground italic">
                    Tabla: Detalle de emprendimientos por Comuna (1 a 6 y Corregimientos)
                </div>
            </section>

        </div>
    );
}