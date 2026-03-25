import React from 'react';
import { Rocket, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Función utilitaria para combinar clases (común en proyectos con Shadcn)
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const MOTIVATION_CARDS = [
    {
        title: "Innova sin miedo",
        description: "Cada gran empresa comenzó como una idea simple que alguien se atrevió a ejecutar.",
        icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
        color: "bg-yellow-50"
    },
    {
        title: "Escala tu visión",
        description: "No te detengas hasta que tu impacto sea global. El límite lo pones tú.",
        icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
        color: "bg-blue-50"
    },
    {
        title: "Ejecución Precisa",
        description: "La estrategia es importante, pero la ejecución lo es todo en el mundo real.",
        icon: <Target className="w-10 h-10 text-red-500" />,
        color: "bg-red-50"
    },
    {
        title: "Lanzamiento Rápido",
        description: "Si no te avergüenza la primera versión de tu producto, lanzaste muy tarde.",
        icon: <Rocket className="w-10 h-10 text-purple-500" />,
        color: "bg-purple-50"
    }
];

export default function MotivationSection() {
    return (
        <section className="py-20 px-6 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        ¿Por qué empezar hoy?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        El camino del emprendedor es desafiante, pero las recompensas transforman vidas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MOTIVATION_CARDS.map((card, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-8 rounded-2xl border border-slate-200 dark:border-slate-800",
                                "transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
                                "animate-in fade-in slide-in-from-bottom-4", // Clases de animación
                                card.color
                            )}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900">{card.title}</h3>
                            <p className="text-slate-700 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}