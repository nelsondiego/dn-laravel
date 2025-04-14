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
    <Head title="Crea tu cuenta gratis"/>
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Crea tu cuenta gratis</CardTitle>
        <CardDescription>
        Ingresa tus datos a continuación para crear tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                placeholder="Juan Perez"
                value={data.name} onChange={e => setData('name', e.target.value)}
              />
              <InputError message={errors.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ejemplo@empresa.com"
                value={data.email} onChange={e => setData('email', e.target.value)}
              />
              <InputError message={errors.email} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={data.password}
                onChange={e => setData('password', e.target.value)}
              />
              <InputError message={errors.password} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password_confirmation">Repetir Contraseña</Label>
              <Input
                id="password_confirmation"
                type="password"
                placeholder="••••••••"
                value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}
              />
              <InputError message={errors.password_confirmation} />
            </div>
            <Button type="submit" className="w-full">
              {processing && <Loader2 className="animate-spin" />}
              Iniciar sesión
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href={ login() } className="underline underline-offset-4">
              Ingresa a tu cuenta
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </LayoutGuess>;
}