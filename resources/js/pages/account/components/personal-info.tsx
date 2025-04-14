import { updatePersonalInfo } from "@/actions/App/Http/Controllers/AccountController"
import InputError from "@/components/input-error"
import PageSection from "@/components/PageSection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "@/types/user"
import { useForm } from "@inertiajs/react"
import { Loader2 } from "lucide-react"

interface Props {
    user: User
}

const PersonalInfo = ({ user }: Props) => {

    const { submit, errors, processing, data, setData } = useForm({
        name: user.name,
        email: user.email,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit(updatePersonalInfo({id: user.id}), {
            preserveScroll: true,
            preserveState: true,
        })
    }


    return (
        <PageSection
            title="Mis Datos Personales"
            description="Mantén tu información al día para asegurar una correcta comunicación y personalizar tu experiencia en nuestra plataforma."

        >
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6 max-w-lg">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input
                            id="name"
                            placeholder="Ej: Juan Pérez García"
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

                    <div>
                        <Button type="submit" >
                            {processing && <Loader2 className="animate-spin" />}
                            Guardar Cambios
                        </Button>
                    </div>
                </div>

            </form>
        </PageSection>
    )
}

export default PersonalInfo