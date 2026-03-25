"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayCircle, DollarSign, Award, ExternalLink } from "lucide-react";
import { learningPlatforms } from "@/lib/learning-platforms";

export function LearningPlatformsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <PlayCircle className="h-4 w-4" />
            Ver cursos en video
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-3xl max-h-[85vh] overflow-y-auto w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-primary">
            <PlayCircle className="h-6 w-6" />
            Plataformas de Cursos Recomendadas
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Conoce las mejores plataformas donde puedes aprender habilidades esenciales para tu negocio, desde marketing digital hasta finanzas.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 mt-2">
          {learningPlatforms.map((platform) => (
            <div key={platform.name} className="flex flex-col gap-3 p-5 rounded-xl border bg-card hover:shadow-md transition-all relative overflow-hidden group">
                <div className="flex justify-between items-start gap-4">
                    <h4 className="font-bold text-xl text-primary">{platform.name}</h4>
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 px-2.5 py-1 rounded-full transition-colors"
                    >
                        Visitar <ExternalLink className="h-3 w-3" />
                    </a>
                </div>
                
                <p className="text-sm text-foreground/90 leading-relaxed">
                    {platform.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3 mt-2 pt-3 border-t border-dashed">
                    <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                            <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-1 block">Beneficio Principal</span>
                            <span className="text-sm">{platform.benefit}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                            <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-1 block">Costo Estimado</span>
                            <span className="text-sm font-medium">{platform.estimatedCost}</span>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
