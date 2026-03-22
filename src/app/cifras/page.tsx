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
         {/* Tarjeta 1: Resumen general (opcional, podrías poner un título) */}
         <div className="rounded-xl border bg-card p-6 shadow-sm">
         <p className="text-sm text-muted-foreground">Indicadores Clave</p>
         <p className="text-2xl font-bold mt-2">Soacha</p>
         <p className="text-xs text-muted-foreground mt-1">Datos 2021 - 2022</p>
         </div>

         {/* Tarjeta: PIB Local Soacha */}
         <div className="rounded-xl border bg-card p-6 shadow-sm">
         <p className="text-sm text-muted-foreground">PIB Local Soacha</p>
         <p className="text-2xl font-bold mt-2">7.93</p>
         <p className="text-xs text-muted-foreground mt-1">Billones COP</p>
        </div>

         {/* Tarjeta: Empleos Formales */}
         <div className="rounded-xl border bg-card p-6 shadow-sm">
         <p className="text-sm text-muted-foreground">Empleos Formales</p>
         <p className="text-2xl font-bold mt-2">36.6%</p>
         <p className="text-xs text-muted-foreground mt-1">de la población ocupada</p>
         </div>

         {/* Tarjeta: Densidad Empresarial */}
         <div className="rounded-xl border bg-card p-6 shadow-sm">
         <p className="text-sm text-muted-foreground">Densidad Empresarial</p>
         <p className="text-2xl font-bold mt-2">570</p>
         <p className="text-xs text-muted-foreground mt-1">unidades económicas visibles</p>
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
                    <div className="h-[350px] flex flex-col items-center justify-center">
                    <div className="relative w-48 h-48">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        {/* Sector Servicios 81.6% */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="transparent"
                            stroke="#3b82f6"
                            strokeWidth="10"
                            strokeDasharray={`${81.6 * 2.827} 282.7`}
                            strokeLinecap="round"
                        />
                        {/* Sector Industria 17.6% */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="transparent"
                            stroke="#f59e0b"
                            strokeWidth="10"
                            strokeDasharray={`${17.6 * 2.827} 282.7`}
                            strokeDashoffset={`-${81.6 * 2.827}`}
                            strokeLinecap="round"
                        />
                        {/* Sector Primario 0.8% */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="transparent"
                            stroke="#10b981"
                            strokeWidth="10"
                            strokeDasharray={`${0.8 * 2.827} 282.7`}
                            strokeDashoffset={`-${(81.6 + 17.6) * 2.827}`}
                            strokeLinecap="round"
                        />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold">Sectores</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm">Servicios: 81.6%</span>
                            </div>
                            <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <span className="text-sm">Industria y Construcción: 17.6%</span>
                            </div>
                            <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <span className="text-sm">Sector Primario: 0.8%</span>
                            </div>
                        </div>
                        </div>    
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
                    <section className="rounded-xl border bg-card overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-muted/50">
        <tr>
          <th className="text-center p-4 font-medium">Comuna</th>
          <th className="text-center p-4 font-medium">Emprendimientos Registrados</th>
          <th className="text-center p-4 font-medium">Participación (%)</th>
        </tr>
      </thead>
      <tbody>
        {[
          { comuna: 'Comuna 1', emprendimientos: 1245, participacion: 18.2 },
          { comuna: 'Comuna 2', emprendimientos: 982, participacion: 14.3 },
          { comuna: 'Comuna 3', emprendimientos: 2103, participacion: 30.7 },
          { comuna: 'Comuna 4', emprendimientos: 876, participacion: 12.8 },
          { comuna: 'Comuna 5', emprendimientos: 654, participacion: 9.5 },
          { comuna: 'Comuna 6', emprendimientos: 438, participacion: 6.4 },
          { comuna: 'Corregimientos', emprendimientos: 562, participacion: 8.1 },
        ].map((item, idx) => (
          <tr key={idx} className="border-t">
            <td className="p-4 font-medium">{item.comuna}</td>
            <td className="p-4">{item.emprendimientos.toLocaleString()}</td>
            <td className="p-4">{item.participacion}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="p-4 text-xs text-muted-foreground border-t">
    Datos basados en información del DANE y Cámara de Comercio 2021 - 2022.
  </div>
</section>
                </div>
            </section>

        </div>
    );
}