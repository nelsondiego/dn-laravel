import { deleteAccount } from '@/actions/App/Http/Controllers/AccountController'
import InputError from '@/components/input-error'
import PageSection from '@/components/PageSection'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User } from '@/types/user'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useRef } from 'react'

interface Props {
    user: User
}


const DeleteAccount = ({ user }:Props) => {

    const passwordInput = useRef<HTMLInputElement>(null);
    const { data, setData, submit, processing, reset, errors, clearErrors } = useForm<Required<{ password: string }>>({ password: '' });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        submit(deleteAccount({ user: user.id }), 
        {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        clearErrors();
        reset();
    };

    return (
        <PageSection
            title='Eliminar Mi Cuenta Permanentemente'
            description='Una vez que elimines tu cuenta, toda tu información y datos asociados se perderán de forma irreversible.'
        >
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive">Eliminar Cuenta</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>¿Estás seguro/a de que deseas eliminar tu cuenta?</DialogTitle>
                    <DialogDescription>
                        Esta acción es permanente e irreversible. Todos tus datos, configuraciones y recursos asociados a esta cuenta serán eliminados definitivamente. Para confirmar, por favor ingresa tu contraseña actual.
                    </DialogDescription>
                    <form className="space-y-6" onSubmit={deleteUser}>
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="sr-only">
                                Contraseña
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Tu contraseña actual"
                                autoComplete="current-password"
                            />

                            <InputError message={errors.password} />
                        </div>

                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <Button variant="secondary" onClick={closeModal}>
                                    Cancelar
                                </Button>
                            </DialogClose>

                            <Button variant="destructive" disabled={processing} asChild>
                                <button type="submit">Sí, Eliminar Mi Cuenta</button>
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </PageSection>
    )
}

export default DeleteAccount