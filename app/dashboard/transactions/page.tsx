"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TransactionsTable } from "@/components/dashboard/transactions-table"
import { useStore } from "@/lib/store"

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const { currentUser, getUserTransactions } = useStore()

  if (!currentUser) {
    return null
  }

  const userTransactions = getUserTransactions(currentUser.id)
  const filteredTransactions = userTransactions.filter((transaction) => {
    const matchesSearch = transaction.accountTitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">المعاملات</h1>

      <div className="flex flex-wrap items-center gap-4">
        <Input
          placeholder="بحث عن معاملة..."
          className="max-w-xs bg-white/10 border-white/20 text-white placeholder:text-white/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="الحالة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">الكل</SelectItem>
            <SelectItem value="pending">قيد الانتظار</SelectItem>
            <SelectItem value="completed">مكتملة</SelectItem>
            <SelectItem value="cancelled">ملغية</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <TransactionsTable transactions={filteredTransactions} />
    </div>
  )
}

