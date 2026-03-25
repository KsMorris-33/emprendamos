"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AnimationPhase = "typing" | "deleting";

export default function Logo() {
    const [phase, setPhase] = useState<AnimationPhase>("typing");
    const [typedText, setTypedText] = useState("");
    const fullText = "Hoy Tu Emprendes";

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (phase === "typing") {
            if (typedText.length < fullText.length) {
                // Escribir letra por letra
                timeout = setTimeout(() => {
                    setTypedText(fullText.slice(0, typedText.length + 1));
                }, 150);
            } else {
                // Se completó la frase. Esperar para leer
                timeout = setTimeout(() => {
                    setPhase("deleting");
                }, 3500);
            }
        }
        else if (phase === "deleting") {
            if (typedText.length > 0) {
                // Borrar letra por letra (más rápido)
                timeout = setTimeout(() => {
                    setTypedText(fullText.slice(0, typedText.length - 1));
                }, 30);
            } else {
                // Completamente borrado. Pausar un segundo y reiniciar
                timeout = setTimeout(() => {
                    setPhase("typing");
                }, 1000);
            }
        }

        return () => clearTimeout(timeout);
    }, [phase, typedText]);

    const part1 = typedText.slice(0, 6);
    const part2 = typedText.length > 6 ? typedText.slice(7) : "";

    return (
        <Link href="/" className="group flex items-center outline-none">
            {/* Contenedor principal sin el logo "HE" */}
            <div className="flex items-center font-bold text-lg md:text-xl tracking-tight whitespace-nowrap h-10 w-[180px] md:w-[200px]">
                <span className="text-primary tracking-tighter">{part1}</span>
                <span className="text-foreground ml-1 tracking-tighter">
                    {part2}
                    <span className="inline-block w-[2px] h-[18px] md:h-[20px] bg-primary ml-0.5 animate-pulse align-middle opacity-80" />
                </span>
            </div>
        </Link>
    );
}