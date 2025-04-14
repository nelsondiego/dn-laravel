import { usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import { toast } from 'sonner'

interface FlashProps {
    flash: {
        success?: string,
        error?: string,
    }
}


const Toast = () => {
    const { flash } = usePage().props as Partial<FlashProps>

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success)
        }
        if (flash?.error) {
            toast.error(flash.error)
        }
    }, [flash])

    return null
}

export default Toast