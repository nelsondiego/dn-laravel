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
            title="Información Personal"
            description="Actualiza y gestiona tus datos personales para una experiencia más personalizada"

        >
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6 max-w-lg">
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

                    <div>
                        <Button type="submit" >
                            {processing && <Loader2 className="animate-spin" />}
                            Actualizar Información
                        </Button>
                    </div>
                </div>

            </form>
        </PageSection>
    )
}

export default PersonalInfo