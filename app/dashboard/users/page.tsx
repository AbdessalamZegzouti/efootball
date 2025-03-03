import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UsersTable } from "@/components/dashboard/users-table"

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">إدارة المستخدمين</h1>

      <div className="flex items-center gap-4">
        <Input placeholder="بحث عن مستخدم..." className="max-w-sm" />
        <Button variant="outline">بحث</Button>
      </div>

      <UsersTable />
    </div>
  )
}

