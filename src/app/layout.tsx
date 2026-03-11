import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Configuramos Outfit como nuestra fuente principal (sans)
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soacha Emprende | Cifras y Motivación",
  description: "Impulsando el emprendimiento en Soacha, Cundinamarca mediante datos y casos de éxito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* Aplicamos la variable de la fuente Outfit al body */}
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        outfit.variable,
        geistSans.variable,
        geistMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar y Footer DENTRO del ThemeProvider para que 
              el cambio de modo oscuro les afecte correctamente.
          */}
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}