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

                {/* Grupos de WhatsApp/Telegram */}
                <section className="p-8 rounded-3xl bg-muted/50 border space-y-6">
                    <div className="flex items-center gap-3">
                        <MessagesSquare className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold italic">Comunidades de Barrio</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Únete a los grupos de emprendedores de tu comuna para compartir recursos y clientes.
                    </p>

                    {/* Espacio para componente: @/features/network/components/CommunityGroupsList */}
                    <div className="space-y-3">
                        <div className="p-4 bg-card rounded-xl border-2 border-dashed text-center text-sm text-muted-foreground italic">
                            <a
    href="https://chat.whatsapp.com/invitacion-general"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b859] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 18.36c-1.49 0-2.96-.4-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31c-.84-1.34-1.28-2.86-1.28-4.42 0-4.66 3.79-8.45 8.45-8.45s8.45 3.79 8.45 8.45-3.79 8.45-8.45 8.45z" />
        <path d="M17.78 14.38c-.28-.14-1.66-.82-1.91-.91-.26-.09-.45-.14-.63.14-.18.28-.7.91-.86 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.35.42-.52.14-.17.19-.29.28-.48.09-.19.05-.35-.03-.49-.08-.14-.63-1.52-.87-2.08-.23-.54-.46-.47-.63-.48-.16 0-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1.01.98-1.01 2.4 0 1.42 1.03 2.79 1.18 2.98.15.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.12.55-.08 1.66-.68 1.89-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33z" />
    </svg>
    Únete al Grupo General de Emprendedores Soacha
</a>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full">Explorar Grupos</Button>
                </section>

                {/* Programa de Mentoría */}
                <section className="p-8 rounded-3xl bg-primary text-primary-foreground space-y-6 shadow-xl shadow-primary/20">
                    <div className="flex items-center gap-3">
                        <Users2 className="h-8 w-8" />
                        <h3 className="text-2xl font-bold italic">Mentoría 1-a-1</h3>
                    </div>
                    <p className="text-primary-foreground/80">
                        ¿Ya tienes un negocio y quieres ayudar a otros? ¿Necesitas guía de un experto soachuno?
                    </p>

                    {/* Espacio para componente: @/features/network/components/MentorshipForm */}
                    <div className="p-4 bg-white/10 rounded-xl border border-white/20 text-center text-sm italic">
                        Componente: MentorshipMatching (Formulario de aplicación)
                    </div>
                    <Button variant="secondary" className="w-full">Postularme como Mentor/Menta</Button>
                </section>

            </div>

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