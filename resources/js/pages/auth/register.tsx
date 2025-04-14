import { doRegister } from "@/actions/App/Http/Controllers/Auth/AuthController";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LayoutGuess from "@/layouts/layout-guess";
import login from "@/routes/login";
import { Head, Link, useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";

export default function Register() {

  const { data, setData, submit, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(
      doRegister(),
      {
        preserveScroll: true,
        onSuccess: () => reset('password'),
      }
    )
  }

  return <LayoutGuess>
    <Head title="Registro de Nueva Cuenta"/>
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Únete a Nosotros</CardTitle>
        <CardDescription>
        Completa el siguiente formulario para empezar a disfrutar de nuestros servicios.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                placeholder="Ej: Ana López Martínez"
                value={data.name} onChange={e => setData('name', e.target.value)}
              />
              <InputError message={errors.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu.correo@ejemplo.com"
                value={data.email} onChange={e => setData('email', e.target.value)}
              />
              <InputError message={errors.email} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Crea una Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 8 caracteres"
                value={data.password}
                onChange={e => setData('password', e.target.value)}
              />
              <InputError message={errors.password} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password_confirmation">Confirmar Contraseña</Label>
              <Input
                id="password_confirmation"
                type="password"
                placeholder="Vuelve a escribir la contraseña"
                value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}
              />
              <InputError message={errors.password_confirmation} />
            </div>
            <Button type="submit" className="w-full">
              {processing && <Loader2 className="animate-spin" />}
              Crear Mi Cuenta
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Ya eres miembro?{" "}
            <Link href={ login() } className="underline underline-offset-4">
              Inicia sesión aquí
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </LayoutGuess>;
}