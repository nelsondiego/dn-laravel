import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LayoutGuess from "@/layouts/layout-guess";
import { Link, useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";

export default function Login() {

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post(
      route('login'),
      {
        preserveScroll: true,
        onSuccess: () => reset('password'),
      }
    )
  }

  return <LayoutGuess>
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Bienvenido de vuelta</CardTitle>
        <CardDescription>
          Ingresa tus datos para acceder a tu cuenta profesional
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ejemplo@clinica.com"
                value={data.email} onChange={e => setData('email', e.target.value)}
              />
              <InputError message={errors.email} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </a>
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
              { processing && <Loader2 className="animate-spin" />}
              Iniciar sesión
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href={ route('register') } className="underline underline-offset-4">
              Regístrate aquí
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </LayoutGuess>;
}