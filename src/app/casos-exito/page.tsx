import { Metadata } from "next";
import { BadgeCheck, Lightbulb, Users } from "lucide-react";
import YouTubePlayer from "@/features/casos-exito/YTPlayer";

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
                    <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center p-4">
                        <img
                            src="/cropped-cropped-FONDO-MARCA-DE-AGUA.webp"
                            alt="Empaflexco Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <BadgeCheck className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase">Manufactura</span>
                        </div>
                        <h3 className="text-xl font-bold italic text-muted-foreground text-justify py-4 border-2 border-dashed rounded-lg">
                            Empaflexco es una empresa colombiana especializada en la fabricación de empaques flexibles y soluciones laminadas para los sectores de alimentos, farmacéuticos e industrial. Desarrollamos productos de alta calidad que garantizan protección, frescura y presentación óptima para cada marca.
                        </h3>
                    </div>
                </div>

                <div className="group relative rounded-2xl border bg-card p-2 shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center p-4">
                        <img
                            src="/Logo_7.png"
                            alt="Limor de Colombia Biotecnología Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <Lightbulb className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase">Desarrollo y Comercialización</span>
                        </div>
                        <h3 className="text-xl font-bold italic text-muted-foreground text-justify py-4 border-2 border-dashed rounded-lg">
                            El Grupo empresarial LIMOR es una organización colombiana privada dedicada a la investigación, desarrollo y comercialización de nuevos productos para el sector agropecuario, manteniendo el equilibrio entre el hombre y la naturaleza.
                        </h3>
                    </div>
                </div>

                <div className="group relative rounded-2xl border bg-card p-2 shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center italic text-xs">
                        <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center p-4">
                            <img
                                src="/rayogas-C8FD8FDA9126DA5B174651155thumbnail.png"
                                alt="Rayogas Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                            <Users className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase">ENERGÉTICO</span>
                        </div>
                        <h3 className="text-xl font-bold italic text-muted-foreground text-justify py-4 border-2 border-dashed rounded-lg">
                            Rayogas S.A.S. E.S.P. impulsa el futuro del país abasteciendo el mercado a través de nuestra red de distribución de GLP, ofreciendo alternativas innovadoras y eficientes con un portafolio integrado de energías, entregando soluciones hechas a la medida de nuestros clientes con un servicio confiable y oportuno.
                        </h3>
                    </div>
                </div>
            </div>

            {/* 3. SECCIÓN DE TESTIMONIO DESTACADO (VIDEO/CITA)
          Ideal para un componente de impacto visual grande.
      */}
            <section className="rounded-3xl bg-muted/50 p-8 md:p-16 border">
                <h2 className="text-2xl font-bold text-center">Historias que inspiran</h2>
                <YouTubePlayer videoId="vklV2GOCQko" />
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