import LayoutApp from "@/layouts/layout-app"
import { User } from "@/types/user"
import PersonalInfo from "./components/personal-info"
import { Separator } from "@/components/ui/separator"
import PageWrapper from "@/components/PageWrapper"
import { BadgeCheck } from "lucide-react"

interface Props {
  user: User
}

const AccountPage = ({ user }: Props) => {
  return (
    <LayoutApp>
      <PageWrapper
        title="Mi Cuenta"
        description="Administra tu perfil y personaliza tu experiencia"
        icon={BadgeCheck}
      >
        <PersonalInfo user={user} />
        <Separator />
      </PageWrapper>
    </LayoutApp>
  )
}

export default AccountPage