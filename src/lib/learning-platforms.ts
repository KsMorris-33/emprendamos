export interface Platform {
    name: string;
    description: string;
    estimatedCost: string;
    benefit: string;
    url: string;
}

export const learningPlatforms: Platform[] = [
    {
        name: "Coursera",
        description: "Plataforma enfocada en educación académica de alto nivel con certificados universitarios.",
        estimatedCost: "US$ 399 / año (Coursera Plus)",
        benefit: "Cursos y especializaciones respaldadas por universidades de prestigio (Stanford, Yale) y empresas como Google.",
        url: "https://www.coursera.org"
    },
    {
        name: "LinkedIn Learning",
        description: "Enfocada en el desarrollo de habilidades profesionales y networking corporativo.",
        estimatedCost: "US$ 239.88 / año",
        benefit: "Integración directa con tu perfil de LinkedIn, permitiendo mostrar certificados a reclutadores automáticamente.",
        url: "https://www.linkedin.com/learning"
    },
    {
        name: "Udemy",
        description: "Marketplace masivo de cursos sobre prácticamente cualquier tema imaginable.",
        estimatedCost: "US$ 10 - US$ 20 por curso (en oferta frecuente)",
        benefit: "Propiedad de por vida de los cursos individuales comprados sin necesidad de suscripción mensual.",
        url: "https://www.udemy.com"
    },
    {
        name: "Crehana",
        description: "Comunidad de aprendizaje enfocada en diseño, marketing digital y negocios con enfoque en Latam.",
        estimatedCost: "US$ 65 - US$ 80 / año (Plan Individual)",
        benefit: "Estructura de micro-learning y proyectos prácticos muy orientados a la industria creativa hispana.",
        url: "https://www.crehana.com"
    },
    {
        name: "Domestika",
        description: "La plataforma líder para creativos, artesanos y entusiastas de las artes visuales.",
        estimatedCost: "US$ 349 / año (Domestika Plus)",
        benefit: "Producción audiovisual de altísima calidad y enfoque en el 'paso a paso' de disciplinas artísticas.",
        url: "https://www.domestika.org"
    }
];

