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
                        Fuerza Laboral Por Actividades
                    </h3>
                    {/* Espacio para componente: @/features/stats/components/MainGrowthChart (Usando Recharts) */}
                    <div className="h-[350px] bg-muted/20 rounded-lg flex items-center justify-center border border-dashed text-sm italic">
                        <div className="w-full overflow-x-auto">
                <div className="min-w-[800px]">
                    <svg viewBox="0 0 900 400" className="w-full h-auto">
                    {/* Ejes */}
                    <line x1="70" y1="30" x2="70" y2="350" stroke="#e2e8f0" strokeWidth="2" />
                    <line x1="70" y1="350" x2="880" y2="350" stroke="#e2e8f0" strokeWidth="2" />

                    {/* Etiquetas eje Y */}
                    <text x="55" y="350" textAnchor="end" className="text-xs fill-muted-foreground">0%</text>
                    <text x="55" y="285" textAnchor="end" className="text-xs fill-muted-foreground">5%</text>
                    <text x="55" y="220" textAnchor="end" className="text-xs fill-muted-foreground">10%</text>
                    <text x="55" y="155" textAnchor="end" className="text-xs fill-muted-foreground">15%</text>
                    <text x="55" y="90" textAnchor="end" className="text-xs fill-muted-foreground">20%</text>

                    {/* Líneas de guía */}
                    <line x1="70" y1="350" x2="880" y2="350" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="70" y1="285" x2="880" y2="285" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="70" y1="220" x2="880" y2="220" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="70" y1="155" x2="880" y2="155" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="70" y1="90" x2="880" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="5,5" />

                    {/* Datos */}
                    {[
                        { name: 'Comercio', fullName: 'Comercio y reparación', value: 18.9, color: '#34da12', x: 100 },
                        { name: 'Industria', fullName: 'Industrias manufactureras', value: 18.7, color: '#60a5fa', x: 180 },
                        { name: 'Otras ramas', fullName: 'Otras ramas*', value: 11.3, color: '#d5ec00', x: 260 },
                        { name: 'Adm. Pública', fullName: 'Adm. pública y salud', value: 11.2, color: '#2563eb', x: 340 },
                        { name: 'Act. Profes.', fullName: 'Act. profesionales', value: 10.5, color: '#e01a1a', x: 420 },
                        { name: 'Transporte', fullName: 'Transporte', value: 8.7, color: '#60a5fa', x: 500 },
                        { name: 'Act. Artísticas', fullName: 'Act. artísticas', value: 7.6, color: '#3cc1ca', x: 580 },
                        { name: 'Construcción', fullName: 'Construcción', value: 6.9, color: '#2563eb', x: 660 },
                        { name: 'Alojamiento', fullName: 'Alojamiento', value: 6.4, color: '#8c3bf6', x: 740 },
                    ].map((item, idx) => {
                        const barHeight = (item.value / 20) * 260; // 20% máximo = 260px altura
                        const yPos = 350 - barHeight;

                        return (
                        <g key={idx}>
                            {/* Barra */}
                            <rect
                            x={item.x}
                            y={yPos}
                            width="45"
                            height={barHeight}
                            fill={item.color}
                            rx="4"
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                            >
                            <title>{`${item.fullName}: ${item.value}%`}</title>
                            </rect>
                            {/* Valor encima */}
                            <text
                            x={item.x + 22}
                            y={yPos - 5}
                            textAnchor="middle"
                            className="text-xs font-medium fill-current"
                            >
                            {item.value}%
                            </text>
                            {/* Etiqueta debajo (rotada o en dos líneas si es necesario) */}
                            <text
                            x={item.x + 22}
                            y="370"
                            textAnchor="middle"
                            className="text-[10px] fill-muted-foreground"
                            >
                            {item.name}
                            </text>
                        </g>
                        );
                    })}
                    </svg>
                </div>

                {/* Leyenda compacta (opcional) */}
                <div className="mt-4 text-xs text-muted-foreground text-center">
                    *Otras ramas: agricultura, minería, servicios públicos e información
                </div>
                </div>
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