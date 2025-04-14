import { sendResetLink } from "@/actions/App/Http/Controllers/Auth/PasswordController";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LayoutGuess from "@/layouts/layout-guess";
import { Head, Link, useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";

export default function ForgotPassword() {

  const { data, setData, submit, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(sendResetLink(), {
      preserveScroll: true,
      onSuccess: () => reset('email'),
    })
  }

  return <LayoutGuess>
    <Head title="Restablecer Contraseña" />
    <Card className="w-md">
      <CardHeader>
        <CardTitle className="text-2xl">¿Olvidaste tu Contraseña?</CardTitle>
        <CardDescription >
          No hay problema. Ingresa tu correo electrónico asociado a tu cuenta y te enviaremos un enlace seguro para que puedas crear una nueva.
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
            
            <Button type="submit" className="w-full">
              {processing && <Loader2 className="animate-spin mr-2" />}
              Enviar Enlace de Restablecimiento
            </Button>
          </div>
          
          <div className="mt-4 text-center text-sm">
            ¿Lo recordaste?{" "}
            <Link href="/login" className="underline underline-offset-4 text-primary hover:text-primary/80">
              Volver a Inicio de Sesión
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </LayoutGuess>;
}