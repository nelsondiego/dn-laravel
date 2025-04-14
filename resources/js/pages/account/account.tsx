import LayoutApp from "@/layouts/layout-app"
import { User } from "@/types/user"
import PersonalInfo from "./components/personal-info"
import { Separator } from "@/components/ui/separator"
import PageWrapper from "@/components/PageWrapper"
import { BadgeCheck } from "lucide-react"
import UpdatePassword from "./components/update-password"
import DeleteAccount from "./components/delete-account"

interface Props {
  currentUser: User
}

const AccountPage = ({ currentUser }: Props) => {
  return (
    <LayoutApp>
      <PageWrapper
        title="Mi Cuenta"
        description="Administra tu perfil y personaliza tu experiencia"
        icon={BadgeCheck}
      >
        <PersonalInfo user={currentUser} />
        <UpdatePassword user={currentUser} />
        <DeleteAccount user={currentUser} />
      </PageWrapper>
    </LayoutApp>
  )
}

export default AccountPage