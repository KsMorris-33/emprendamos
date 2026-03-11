import React from 'react';
import { CheckCircle2, Circle, Flag, Rocket, ShieldCheck, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    {
        title: "La Idea",
        description: "Valida tu propuesta de valor en el mercado de Soacha.",
        icon: Lightbulb,
        status: "complete",
    },
    {
        title: "Estructura",
        description: "Define tu modelo de negocio y costos operativos.",
        icon: ShieldCheck,
        status: "current",
    },
    {
        title: "Formalización",
        description: "Registro en Cámara de Comercio y trámites legales.",
        icon: Flag,
        status: "upcoming",
    },
    {
        title: "Escalamiento",
        description: "Busca capital semilla y expande tu mercado.",
        icon: Rocket,
        status: "upcoming",
    },
];

export const LearningRoadmap = () => {
    return (
        <div className="w-full py-8">
            {/* Contenedor Responsivo: Vertical en Mobile, Horizontal en Desktop */}
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">

                {/* Línea de conexión de fondo (Solo Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-8 z-0" />

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isComplete = step.status === "complete";
                    const isCurrent = step.status === "current";

                    return (
                        <div key={index} className="relative z-10 flex md:flex-col items-center md:text-center gap-4 md:gap-4 flex-1 group">

                            {/* Círculo del Icono */}
                            <div className={cn(
                                "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 transition-all duration-300",
                                isComplete ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" :
                                    isCurrent ? "bg-background border-primary text-primary animate-pulse" :
                                        "bg-muted border-muted text-muted-foreground"
                            )}>
                                {isComplete ? <CheckCircle2 className="h-8 w-8" /> : <Icon className="h-8 w-8" />}
                            </div>

                            {/* Textos */}
                            <div className="flex flex-col">
                                <h4 className={cn(
                                    "text-lg font-bold transition-colors",
                                    isCurrent ? "text-primary" : "text-foreground"
                                )}>
                                    {step.title}
                                </h4>
                                <p className="text-sm text-muted-foreground max-w-[200px] md:mx-auto">
                                    {step.description}
                                </p>
                            </div>

                            {/* Indicador de estado para móvil (Opcional) */}
                            {isCurrent && (
                                <span className="absolute -top-2 -right-2 md:top-0 md:right-1/4 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};