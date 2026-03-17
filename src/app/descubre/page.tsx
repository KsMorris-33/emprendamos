import { Metadata } from "next";
import { ClipboardCheck, Sparkles, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "Test de Potencial Emprendedor | Soacha Emprende",
    description: "Descubre tu perfil emprendedor y recibe consejos personalizados para iniciar en Soacha.",
};

export default function TestPage() {
    return (
        <div className="container mx-auto py-12 px-4 space-y-12">

            {/* 1. INTRODUCCIÓN AL TEST */}
            <header className="max-w-3xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    ¿Cuál es tu <span className="text-primary">ADN Emprendedor</span>?
                </h1>
                <p className="text-lg text-muted-foreground">
                    Responde estas 10 preguntas rápidas y descubre qué tipo de negocio se adapta mejor a
                    tus habilidades y a las necesidades actuales de Soacha.
                </p>

                {/* Indicadores de valor del test */}
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Target className="h-4 w-4 text-primary" /> Diagnóstico Preciso
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <ClipboardCheck className="h-4 w-4 text-primary" /> Resultados al Instante
                    </div>
                </div>
            </header>

            {/* 2. EL COMPONENTE DEL TEST (WIZARD)
          Este componente manejará el estado de las preguntas, el progreso y los resultados.
          Componente futuro: @/features/test/components/EntrepreneurTest
      */}
            <section className="max-w-2xl mx-auto min-h-[500px] rounded-3xl border bg-card p-6 md:p-10 shadow-xl relative overflow-hidden">
                {/* Barra de Progreso Visual */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-muted">
                    <div className="h-full bg-primary w-[10%] transition-all duration-500" />
                </div>

                {/* Espacio para la lógica del Test */}
                <div className="flex flex-col items-center justify-center h-full py-10 space-y-8">
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold italic text-muted-foreground">
                            Componente: EntrepreneurTest (Wizard)
                        </h3>
                        <p className="text-muted-foreground italic text-sm">
                            Lógica: Manejo de estados (currentStep), puntuación acumulada y renderizado de resultados.
                        </p>
                    </div>

                    {/* Ejemplo visual de una pregunta */}
                    <div className="w-full space-y-4 opacity-50 pointer-events-none">
                        <p className="font-semibold text-lg text-center">¿Cómo prefieres trabajar con tu comunidad?</p>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="p-4 border rounded-xl text-left">A. Creando tecnología desde casa.</div>
                            <div className="p-4 border rounded-xl text-left">B. Liderando proyectos en mi barrio.</div>
                            <div className="p-4 border rounded-xl text-left">C. Vendiendo productos directamente.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN DE CONFIDENCIALIDAD */}
            <footer className="max-w-xl mx-auto text-center">
                <p className="text-xs text-muted-foreground">
                    Tus respuestas son anónimas y se utilizan únicamente para generar tu perfil sugerido.
                    Al finalizar, podrás descargar tu guía personalizada en PDF.
                </p>
            </footer>

        </div>
    );
}