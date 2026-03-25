import { Metadata } from "next";
import {
    BookOpen,
    GraduationCap,
    Lightbulb,
    FileText,
    PlayCircle,
    Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LearningRoadmap } from "@/features/aprende/componentes/LearningRoadmap";

export const metadata: Metadata = {
    title: "Aprende a Emprender | Soacha Emprende",
    description: "Recursos educativos, guías de formalización y cursos para emprendedores en Soacha.",
};

export default function AprendePage() {
    return (
        <div className="container mx-auto py-12 px-4 space-y-16">

            {/* 1. HERO DE APRENDIZAJE */}
            <header className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
                <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    Tu Camino al <span className="text-primary">Éxito Empresarial</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                    Desde cómo registrar tu marca en la Cámara de Comercio hasta estrategias de marketing digital
                    para el mercado soachuno. Todo en un solo lugar.
                </p>

                {/* Buscador de recursos */}
                <div className="relative w-full max-w-md mt-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="¿Qué quieres aprender hoy? (Ej: Formalización)"
                        className="pl-10 h-12 rounded-full"
                    />
                </div>
            </header>

            {/* 2. CATEGORÍAS DE APRENDIZAJE
          Componente futuro: @/features/learning/components/CategoryGrid
      */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all group cursor-pointer">
                    <FileText className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Guías de Formalización</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Pasos legales para constituir tu empresa en Soacha y beneficios tributarios locales.
                    </p>
                    <div className="mt-4 pt-4">
                        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                            <FileText className="h-4 w-4" />
                            Descargar PDF
                        </button>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed text-xs italic text-center text-muted-foreground">
                        Contenido Gratis
                    </div>
                </div>

                <div className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all group cursor-pointer">
                    <Lightbulb className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Marketing y Ventas</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Cómo vender más en tu comuna y expandir tu alcance a todo Cundinamarca.
                    </p>
                    <div className="mt-4 pt-4">
                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                <Lightbulb className="h-4 w-4" />
                                Ver estrategias de ventas
                            </button>
                        </div>
                    <div className="mt-4 pt-4 border-t border-dashed text-xs italic text-center text-muted-foreground">
                        Conoce más aquí
                    </div>
                </div>

                <div className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all group cursor-pointer">
                    <PlayCircle className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Cursos en Video</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Micro-cápsulas de aprendizaje con expertos y empresarios exitosos de la región.
                    </p>
                    <div className="mt-4 pt-4">
                        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                            <PlayCircle className="h-4 w-4" />
                            Ver cursos en video
                        </button>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed text-xs italic text-center text-muted-foreground">
                        Cápsulas en solo 5 min
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN DE RUTA SUGERIDA (ROADMAP)
          Visualización de pasos para el emprendedor.
      */}
            <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-dashed">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold italic">La Ruta del Emprendedor Soachuno</h2>
                        <p className="text-muted-foreground">
                            No camines solo. Hemos diseñado un mapa paso a paso para que lleves tu idea
                            desde el barrio hasta el mercado nacional.
                        </p>
                        <Button className="mt-4">Empezar mi Ruta</Button>
                    </div>


                    {/* Espacio para componente: @/features/learning/components/LearningRoadmap */}
                    <div className="flex-1 w-full h-64 bg-card rounded-2xl border shadow-inner flex items-center justify-center text-muted-foreground text-sm italic p-4 text-center">
                        <LearningRoadmap />
                    </div>
                </div>
            </section>

            {/* 4. PRÓXIMOS TALLERES (EVENTOS PRESENCIALES) */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-primary" /> Talleres Presenciales en Soacha
                    </h2>
                    <Button variant="link">Ver calendario completo</Button>
                </div>

                {/* Espacio para componente: @/features/learning/components/EventsList */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-xl flex items-center gap-4 bg-card">
                        <div className="h-16 w-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary font-bold">
                            <span>15</span>
                            <span className="text-[10px] uppercase">Mar</span>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-tight">Taller: Finanzas para Micro-negocios</h4>
                            <p className="text-xs text-muted-foreground italic">Lugar: Biblioteca Municipal de Soacha</p>
                        </div>
                    </div>
                    <div className="p-4 border rounded-xl flex items-center gap-4 bg-card">
                        <div className="h-16 w-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary font-bold">
                            <span>22</span>
                            <span className="text-[10px] uppercase">Mar</span>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-tight">Charla: Marketing en Redes Sociales</h4>
                            <p className="text-xs text-muted-foreground italic">Lugar: Auditorio Ciudad Verde</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}