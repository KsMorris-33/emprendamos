import { Metadata } from "next";
import {
    Handshake,
    MessagesSquare,
    Globe,
    Building2,
    Users2,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Red de Apoyo | Soacha Emprende",
    description: "Conecta con instituciones, mentores y otros emprendedores en Soacha.",
};

export default function RedApoyoPage() {
    return (
        <div className="container mx-auto py-12 px-4 space-y-16">

            {/* 1. HERO DE CONEXIÓN */}
            <header className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Handshake className="h-4 w-4" />
                    <span>Juntos somos más fuertes</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Tu Red de <span className="text-primary">Aliados en Soacha</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    No estás solo en este camino. Conecta con las organizaciones y comunidades
                    que están listas para impulsar tu negocio al siguiente nivel.
                </p>
            </header>

            {/* 2. INSTITUCIONES ALIADAS (GRID)
          Componente futuro: @/features/network/components/PartnerGrid
      */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-primary" /> Apoyo Institucional
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card: Cámara de Comercio */}
                    <Card className="group hover:border-primary/50 transition-all cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <Globe className="h-6 w-6 text-primary" />
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <CardTitle className="mt-4">Cámara de Comercio</CardTitle>
                            <CardDescription>Sede Soacha - Centro</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            <CardContent className="text-sm text-muted-foreground"></CardContent>
                            Dirección: Cra. 7 #11 - 83, Soacha, Cundinamarca
                            <CardContent className="text-sm text-muted-foreground"></CardContent>
                            Teléfono: (601) 3830330
                        </CardContent>
                    </Card>

                    {/* Card: Alcaldía / Secretaría de Desarrollo */}
                    <Card className="group hover:border-primary/50 transition-all cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <Building2 className="h-6 w-6 text-primary" />
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <CardTitle className="mt-4">Secretaría de Desarrollo</CardTitle>
                            <CardDescription>Programas Municipales</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            <CardContent className="text-sm text-muted-foreground"></CardContent>
                            Dirección: Cl. 13 #7-30, Soacha, Cundinamarca
                            <CardContent className="text-sm text-muted-foreground"></CardContent>
                            Teléfono: (601) 7305500
                        </CardContent>
                    </Card>

                    {/* Card: SENA Soacha */}
                    <Card className="group hover:border-primary/50 transition-all cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <Users2 className="h-6 w-6 text-primary" />
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <CardTitle className="mt-4">Centro Industrial (SENA)</CardTitle>
                            <CardDescription>Formación Técnica</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            <CardContent className="text-sm text-muted-foreground"></CardContent>
                            Dirección: Cl. 13 #1093, Soacha, Cundinamarca
                            <CardContent className="text-sm text-muted-foreground"></CardContent>
                            Teléfono: (601) 7301010
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* 3. COMUNIDADES DIGITALES Y MENTORÍAS
          Sección interactiva para unirse a grupos o solicitar un mentor.
      */}


            {/* 4. PRÓXIMOS ENCUENTROS DE NETWORKING
          Lista de eventos para conocer gente en persona.
      */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Próximos Encuentros de Conexión</h2>
                <div className="rounded-2xl border bg-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                            <span className="block text-2xl font-bold text-primary">28</span>
                            <span className="text-[10px] uppercase font-bold">Abril</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Networking: Mujeres Líderes de Soacha</h4>
                            <p className="text-sm text-muted-foreground">Salón Comunal Ciudad Verde - 5:00 PM</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}