import { Metadata } from "next";
import { BadgeCheck, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Casos de Éxito | Soacha Emprende",
    description: "Historias reales de emprendedores que están transformando Soacha.",
};

export default function CasosExitoPage() {
    return (
        <div className="container mx-auto py-12 px-4 space-y-16">

            {/* 1. SECCIÓN DE ENCABEZADO */}
            <header className="max-w-3xl space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Historias que <span className="text-primary">Inspiran</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Conoce a los hombres y mujeres que están redefiniendo el futuro económico de Soacha.
                    De la idea a la realidad, estos son nuestros líderes locales.
                </p>
            </header>

            {/* 2. GRID DE HISTORIAS DESTACADAS
          Aquí llamaremos a un componente que renderice tarjetas detalladas.
          Componente futuro: @/features/casos/components/SuccessStoryCard
      */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Espacio para componente: Iteración de historias reales */}
                <div className="group relative rounded-2xl border bg-card p-2 shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center italic text-xs">
                        [Imagen: Emprendimiento de Textiles Comuna 4]
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <BadgeCheck className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase">Manufactura</span>
                        </div>
                        <h3 className="text-xl font-bold italic text-muted-foreground text-center py-4 border-2 border-dashed rounded-lg">
                            Componente: SuccessStoryCard (Prop: storyId="1")
                        </h3>
                    </div>
                </div>

                <div className="group relative rounded-2xl border bg-card p-2 shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center italic text-xs">
                        [Imagen: Startup Tech Ciudad Verde]
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <Lightbulb className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase">Tecnología</span>
                        </div>
                        <h3 className="text-xl font-bold italic text-muted-foreground text-center py-4 border-2 border-dashed rounded-lg">
                            Componente: SuccessStoryCard (Prop: storyId="2")
                        </h3>
                    </div>
                </div>

                <div className="group relative rounded-2xl border bg-card p-2 shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center italic text-xs">
                        [Imagen: Gastronomía San Mateo]
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <Users className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase">Gastronomía</span>
                        </div>
                        <h3 className="text-xl font-bold italic text-muted-foreground text-center py-4 border-2 border-dashed rounded-lg">
                            Componente: SuccessStoryCard (Prop: storyId="3")
                        </h3>
                    </div>
                </div>
            </div>

            {/* 3. SECCIÓN DE TESTIMONIO DESTACADO (VIDEO/CITA)
          Ideal para un componente de impacto visual grande.
      */}
            <section className="rounded-3xl bg-muted/50 p-8 md:p-16 border">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <blockquote className="text-2xl md:text-3xl font-medium italic">
                        "Emprender en Soacha me enseñó que la resiliencia es nuestro mayor recurso.
                        Hoy mi empresa emplea a 15 madres cabeza de familia de la Comuna 2."
                    </blockquote>
                    <div className="space-y-1">
                        <cite className="not-italic font-bold text-lg text-primary">— Martha Rodríguez</cite>
                        <p className="text-sm text-muted-foreground text-center">Fundadora de Eco-Moda Soachuna</p>
                    </div>

                    {/* Espacio para componente: @/features/casos/components/FeaturedVideoPlayer */}
                    <div className="mt-8 h-40 border-2 border-dashed rounded-2xl flex items-center justify-center text-muted-foreground">
                        Componente: VideoTestimonial (Reproductor optimizado)
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION: ¿QUIERES APARECER AQUÍ? */}
            <footer className="text-center py-10">
                <h2 className="text-2xl font-bold">¿Tu empresa está creciendo en Soacha?</h2>
                <p className="text-muted-foreground mt-2">Cuéntanos tu historia y motiva a otros.</p>
                {/* Aquí puedes reutilizar un componente genérico de botón o link */}
            </footer>

        </div>
    );
}