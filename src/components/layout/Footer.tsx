import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full  border-t bg-background text-muted-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">

                    {/* Columna 1: Branding y Misión */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="font-bold text-xl tracking-tight text-primary">
                            Soacha<span className="text-foreground">Emprende</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Plataforma dedicada a transformar Soacha mediante datos reales y
                            motivación para la nueva generación de emprendedores locales.
                        </p>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-foreground">Explorar</h4>
                        <nav className="flex flex-col gap-2 text-sm">
                            <Link href="/cifras" className="hover:text-primary transition-colors">Cifras de Impacto</Link>
                            <Link href="/casos-exito" className="hover:text-primary transition-colors">Casos de Éxito</Link>
                            <Link href="/recursos" className="hover:text-primary transition-colors">Recursos Gratuitos</Link>
                            <Link href="/directorio" className="hover:text-primary transition-colors">Directorio Local</Link>
                        </nav>
                    </div>

                    {/* Columna 3: Contacto Local */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-foreground">Contacto</h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>Soacha, Cundinamarca<br />Centro Histórico</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <span>contacto@soachaemprende.co</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Redes Sociales */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-foreground">Síguenos</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Twitter className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="text-xs italic mt-2">
                            #SoachaEmprende #Cundinamarca
                        </p>
                    </div>
                </div>

                {/* Línea final de Copyright */}
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© {currentYear} Grupo #5 . Talento Tech. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:underline">Política de Privacidad</Link>
                        <Link href="/terminos" className="hover:underline">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer