import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LayoutGuess from '@/layouts/layout-guess'
import { ArrowRight, Code, Github, Layers, Shield, Moon } from 'lucide-react'
import login from '@/routes/login'
import register from '@/routes/register'

const Landing = () => {
  return (
    <LayoutGuess>
      <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            DN Laravel Starter Kit: Tu Impulso para el <span className="text-primary">Desarrollo Web Moderno</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Acelera la creación de aplicaciones web de vanguardia. Nuestro kit de inicio profesional integra Laravel, Inertia.js/React y Tailwind CSS para un desarrollo rápido, eficiente y de alta calidad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={login()}>
              <Button size="lg" className="gap-2">
                Ingresar a mi Cuenta
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={register()}>
              <Button variant="outline" size="lg">
                Registrarme Gratis
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Inertia.js & React</CardTitle>
              <CardDescription>
                Disfruta de una experiencia de desarrollo frontend fluida con Inertia.js y React. Crea interfaces de usuario dinámicas y atractivas sin esfuerzo.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Diseño Elegante con Tailwind</CardTitle>
              <CardDescription>
                Implementa un diseño moderno y consistente fácilmente. Incluye Tailwind CSS y la biblioteca de componentes shadcn/ui, listos para usar.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Moon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Adaptable: Modo Claro y Oscuro</CardTitle>
              <CardDescription>
                Ofrece una experiencia visual óptima. Los componentes shadcn/ui soportan modo oscuro de forma nativa, adaptándose a las preferencias.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Autenticación Segura Integrada</CardTitle>
              <CardDescription>
                Empieza con buen pie. Incluye un sistema de autenticación completo y seguro, con tests preconfigurados para tu tranquilidad.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center space-y-6 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Listo para Construir Algo Increíble?
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Únete a la comunidad de desarrolladores que eligen nuestro starter kit para lanzar sus proyectos Laravel de forma más rápida y profesional.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={register()}>
              <Button size="lg" className="gap-2">
                ¡Empezar Ahora!
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="https://github.com/nelsondiego/dn-laravel" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-4 w-4" />
                Ver Guía de Instalación
              </Button>
            </a>
          </div>
        </div>
      </div>
    </LayoutGuess>
  )
}

export default Landing