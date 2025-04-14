import { updatePassword } from '@/actions/App/Http/Controllers/AccountController'
import InputError from '@/components/input-error'
import PageSection from '@/components/PageSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User } from '@/types/user'
import { useForm } from '@inertiajs/react'
import { Loader2 } from 'lucide-react'

interface Props {
  user: User
}
const UpdatePassword = ({ user }: Props) => {

  const { submit, setData, data, errors, processing } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(updatePassword({id: user.id}),{
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setData({
          current_password: '',
          password: '',
          password_confirmation: '',
        })
      },
    })
  }

  return (
    <PageSection
      title='Cambiar Mi Contraseña'
      description='Para mayor seguridad, te recomendamos usar una contraseña única que no utilices en otros sitios.'
    >
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 max-w-lg">
            <div className="grid gap-2">
              <Label htmlFor="current_password">Contraseña Actual</Label>
              <Input
                id="current_password"
                type="password"
                placeholder="••••••••"
                value={data.current_password}
                onChange={e => setData('current_password', e.target.value)}
              />
              <InputError message={errors.current_password} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Nueva Contraseña</Label>
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
              <Label htmlFor="password_confirmation">Confirmar Nueva Contraseña</Label>
              <Input
                id="password_confirmation"
                type="password"
                placeholder="••••••••"
                value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}
              />
              <InputError message={errors.password_confirmation} />
            </div>
            <div>
              <Button type="submit">
                {processing && <Loader2 className="animate-spin" />}
                Actualizar Mi Contraseña
              </Button>
            </div>
          </div>
      </form>
    </PageSection>
  )
}

export default UpdatePassword