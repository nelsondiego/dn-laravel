import LayoutApp from '@/layouts/layout-app'
import { User } from '@/types/user'
import { Head } from '@inertiajs/react'

interface Props {
  user: User
}

const Dashboard = ({ user }: Props) => {
  console.log(user)
  return (
    <LayoutApp>
      <Head title="Dashboard" />
      Dashboard
    </LayoutApp>
  )
}

export default Dashboard