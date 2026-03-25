import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
            <div className="container relative px-4 md:px-6">
                <div className="flex flex-col items-center text-center">

                    {/* Badge Motivador */}
                    <div className="inline-flex -mt-20 items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>Soacha creció un 15% en exportaciones locales</span>
                    </div>

                    {/* Título Principal */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Donde los datos se vuelven <br className="hidden md:inline" />
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Oportunidades Reales
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                            En Soacha, el emprendimiento no es solo un sueño, es una cifra en constante crecimiento.
                            Accede a las estadísticas que impulsan la inversión en nuestra ciudad.
                        </p>
                    </div>

                    {/* Acciones (Responsive: apilados en móvil, fila en desktop) */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button size="lg" className="px-8 h-12 text-base font-semibold group">
                            Explorar Cifras
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 h-12 text-base font-semibold">
                            Historias de Éxito
                        </Button>
                    </div>

                    {/* Mini-sección de confianza / Contexto */}
                    <div className="pt-8 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl">+5k</span>
                            <span className="text-xs text-left leading-tight">Negocios<br />Registrados</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl">Top 3</span>
                            <span className="text-xs text-left leading-tight">En Cundinamarca<br />Crecimiento</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};