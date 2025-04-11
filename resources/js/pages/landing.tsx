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
            DN Laravel Starter Kit <span className="text-primary">Desarrollo moderno</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Kit de inicio profesional con Laravel, Inertia.js/React y Tailwind CSS para desarrollar aplicaciones web modernas de forma rápida y eficiente.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={login().url}>
              <Button size="lg" className="gap-2">
                Acceder a mi cuenta
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={register().url}>
              <Button variant="outline" size="lg">
                Crear cuenta gratis
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
              <CardTitle>Inertia.js/React</CardTitle>
              <CardDescription>
                Integración perfecta de frontend con Inertia.js y React para crear interfaces modernas y reactivas.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Sistema de diseño moderno con Tailwind CSS y biblioteca de componentes UI shadcn preconfigurados.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Moon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Modo Oscuro</CardTitle>
              <CardDescription>
                Componentes shadcn UI con soporte nativo para modo oscuro, permitiendo interfaces adaptables a las preferencias del usuario.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Autenticación Lista</CardTitle>
              <CardDescription>
                Sistema de autenticación completo listo para usar con configuración de testing predefinida.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center space-y-6 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Comienza a desarrollar tu proyecto hoy mismo
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Únete a los desarrolladores que ya confían en nuestro starter kit para crear aplicaciones web modernas con Laravel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={register().url}>
              <Button size="lg" className="gap-2">
                Comenzar ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="https://github.com/nelsondiego/dn-laravel" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-4 w-4" />
                Ver instrucciones de instalación
              </Button>
            </a>
          </div>
        </div>
      </div>
    </LayoutGuess>
  )
}

export default Landing