import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LayoutGuess from "@/layouts/layout-guess";
import doLogin from "@/routes/doLogin";
import forgotPassword from "@/routes/forgotPassword";
import register from "@/routes/register";
import { Head, Link, useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";

export default function Login() {

  const { data, setData, submit, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(doLogin(), {
      preserveScroll: true,
      onSuccess: () => reset('password'),
    })
  }

  return <LayoutGuess>
    <Head title="Acceso de Usuario" />
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-2xl">¡Hola de Nuevo!</CardTitle>
        <CardDescription>
          Ingresa tu correo electrónico y contraseña para continuar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
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
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  href={forgotPassword()}
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={data.password}
                onChange={e => setData('password', e.target.value)}
              />
              <InputError message={errors.password} />
            </div>
            <Button type="submit" className="w-full">
              {processing && <Loader2 className="animate-spin" />}
              Acceder
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Eres nuevo/a aquí?{" "}
            <Link href={register()} className="underline underline-offset-4">
              Crea tu cuenta
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </LayoutGuess>;
}