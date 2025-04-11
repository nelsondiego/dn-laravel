import PageSection from "@/components/PageSection"
import { User } from "@/types/user"

interface Props {
    user: User
}

const PersonalInfo = ({ user }: Props) => {
    return (

        <PageSection
            title="Información Personal"
            description="Actualiza y gestiona tus datos personales para una experiencia más personalizada"

        >
            <div>{user.name}</div>
        </PageSection>
    )
}

export default PersonalInfo