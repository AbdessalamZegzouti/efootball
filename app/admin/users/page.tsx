"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { AdminUsersTable } from "@/components/admin/admin-users-table"
import { Search } from "lucide-react"

export default function UsersManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">إدارة المستخدمين</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="بحث عن مستخدم..."
            className="pl-8 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <AdminUsersTable searchQuery={searchQuery} />
    </div>
  )
}

