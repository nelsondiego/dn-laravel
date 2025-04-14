import { doResetPassword } from "@/actions/App/Http/Controllers/Auth/PasswordController";
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

interface ResetPasswordProps {
  token: string;
  email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {

  const { data, setData, submit, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(doResetPassword(), {
      preserveScroll: true,
      preserveState: true,
    })
  }

  return <LayoutGuess>
    <Head title="Resetear contraseña" />
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Resetear contraseña</CardTitle>
        <CardDescription>
          Crea una nueva contraseña para tu cuenta.
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
                placeholder="ejemplo@empresa.com"
                readOnly
                value={data.email} onChange={e => setData('email', e.target.value)}
              />
              <InputError message={errors.email} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                
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
              Cambiar contraseña
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href={register()} className="underline underline-offset-4">
              Regístrate aquí
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </LayoutGuess>;
}