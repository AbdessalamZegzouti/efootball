"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AdminAccountsTable } from "@/components/admin/admin-accounts-table"
import { PlusCircle, Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddAccountForm } from "@/components/admin/add-account-form"

export default function AccountsManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">إدارة الحسابات</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-efootball-pink hover:bg-efootball-pink/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              إضافة حساب جديد
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>إضافة حساب جديد</DialogTitle>
              <DialogDescription>أدخل تفاصيل الحساب الجديد</DialogDescription>
            </DialogHeader>
            <AddAccountForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="بحث عن حساب..."
            className="pl-8 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <AdminAccountsTable searchQuery={searchQuery} />
    </div>
  )
}

