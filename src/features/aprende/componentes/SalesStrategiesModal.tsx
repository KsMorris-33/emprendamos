"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lightbulb, TrendingUp, Users, Target, MessageSquare } from "lucide-react";

export function SalesStrategiesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Ver estrategias de ventas
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-primary">
            <TrendingUp className="h-6 w-6" />
            Estrategias para Vender Más
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Aplica estos consejos prácticos para incrementar las ventas de tu negocio y expandir tu alcance.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 mt-2">
          <div className="flex gap-4 items-start p-4 rounded-xl border bg-card hover:shadow-md transition-all">
             <div className="mt-1 bg-primary/10 p-2 rounded-full shrink-0">
                <Users className="h-5 w-5 text-primary" />
             </div>
             <div>
               <h4 className="font-semibold text-lg">Conoce a tu cliente ideal</h4>
               <p className="text-sm text-muted-foreground mt-1">No le vendas a todo el mundo. Identifica quiénes son los que realmente necesitan tu producto en Soacha y enfoca tus esfuerzos de marketing en ellos.</p>
             </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl border bg-card hover:shadow-md transition-all">
             <div className="mt-1 bg-primary/10 p-2 rounded-full shrink-0">
                <MessageSquare className="h-5 w-5 text-primary" />
             </div>
             <div>
               <h4 className="font-semibold text-lg">Vende beneficios, no características</h4>
               <p className="text-sm text-muted-foreground mt-1">En lugar de solo listar lo que hace tu producto, explica cómo mejorará la vida de tu cliente o qué problema cotidiano le resolverá.</p>
             </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl border bg-card hover:shadow-md transition-all">
             <div className="mt-1 bg-primary/10 p-2 rounded-full shrink-0">
                <Target className="h-5 w-5 text-primary" />
             </div>
             <div>
               <h4 className="font-semibold text-lg">Aprovecha el entorno digital local</h4>
               <p className="text-sm text-muted-foreground mt-1">Utiliza grupos de Facebook de tu comuna, crea un perfil de Google Mi Negocio y usa WhatsApp Business para conectar de forma directa con tus vecinos.</p>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
