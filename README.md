# Soacha Emprende

**Soacha Emprende** es una plataforma digital dedicada a impulsar, educar y motivar el emprendimiento en el municipio de Soacha, Cundinamarca. A través de datos, recursos de aprendizaje, guías de formalización y casos de éxito locales, la aplicación busca ser una guía integral para los emprendedores de la región.

## 🚀 Tecnologías Principales

El proyecto está construido utilizando un stack moderno enfocado en rendimiento y diseño UI/UX:

- **Framework:** [Next.js 16.1](https://nextjs.org/) (App Router)
- **Librería UI:** [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes Base:** [shadcn/ui](https://ui.shadcn.com/) y [Radix UI](https://www.radix-ui.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/) y [Huge Icons](https://hugeicons.com/)
- **Temas:** Soporte para modo oscuro/claro con `next-themes`
- **Fuentes:** Tipografías optimizadas con `next/font` (Outfit, Geist, Geist Mono)

## 📂 Estructura y Arquitectura del Proyecto

La arquitectura del proyecto sigue las convenciones del App Router de Next.js, complementada con una organización modular basada en características (features) para escalabilidad:

```text
d:\emprendamos\
├── public/                 # Archivos estáticos y recursos públicos
└── src/
    ├── app/                # Rutas y páginas de la aplicación (App Router)
    │   ├── apoyo/          # Recursos de apoyo, financiamiento o ayudas
    │   ├── aprende/        # Portal educativo y Roadmap del Emprendedor Soachuno
    │   ├── casos-exito/    # Historias de éxito de emprendedores locales
    │   ├── cifras/         # Datos y estadísticas relevantes del ecosistema
    │   ├── descubre/       # Sección de exploración de negocios o ideas
    │   └── explora/        # Exploración de mercado local
    │
    ├── components/         # Componentes UI compartidos y de diseño general
    │   ├── layout/         # Componentes estructurales (Navbar, Footer)
    │   └── ui/             # Componentes base de shadcn/ui (inputs, buttons, etc.)
    │
    ├── features/           # Módulos específicos agrupados por dominio
    │   ├── aprende/        # Lógica y componentes específicos para la sección educativa
    │   ├── cifras/         # Gráficos y presentación de datos estadísticos
    │   └── home/           # Componentes exclusivos de la página de inicio (Landing)
    │
    └── lib/                # Utilidades, configuración y funciones de ayuda (ej. utils.ts)
```

## 🎯 Finalidad de los Componentes Principales

1. **Aprende (`/aprende`)**: Es el núcleo educativo, que ofrece una "Ruta del Emprendedor Soachuno", guías legales para constitución en la Cámara de Comercio, estrategias de marketing para el mercado local y micro-cápsulas de aprendizaje en video.
2. **Cifras (`/cifras`)**: Motiva e informa a los usuarios mediante estadísticas reales del emprendimiento en la región.
3. **Casos de Éxito (`/casos-exito`)**: Fomenta la inspiración mostrando testimonios y trayectorias de negocios locales que han sobresalido.

## ⚙️ Instalación y Uso Local

Para ejecutar el entorno de desarrollo en tu máquina local:

1. Clona el repositorio u obtén el código fuente.
2. Instala las dependencias necesarias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre tu navegador e ingresa a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

---
*Este proyecto fue inicializado con `create-next-app` y está en continuo desarrollo.*
