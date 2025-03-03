"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentAccounts } from "@/components/dashboard/recent-accounts"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { useStore } from "@/lib/store"

export default function DashboardPage() {
  const { currentUser, getUserAccounts, getUserTransactions } = useStore()

  if (!currentUser) {
    return null
  }

  const userAccounts = getUserAccounts(currentUser.id)
  const userTransactions = getUserTransactions(currentUser.id)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">لوحة التحكم</h1>

      <DashboardStats
        accountsCount={userAccounts.length}
        transactionsCount={userTransactions.length}
        balance={currentUser.balance}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card className="border-efootball-pink">
          <CardHeader className="bg-efootball-pink text-white">
            <CardTitle>أحدث الحسابات</CardTitle>
            <CardDescription className="text-gray-100">آخر الحسابات المضافة للبيع</CardDescription>
          </CardHeader>
          <CardContent className="bg-white">
            <RecentAccounts accounts={userAccounts.slice(0, 5)} />
          </CardContent>
        </Card>

        <Card className="border-efootball-pink">
          <CardHeader className="bg-efootball-pink text-white">
            <CardTitle>أحدث المعاملات</CardTitle>
            <CardDescription className="text-gray-100">آخر عمليات البيع والشراء</CardDescription>
          </CardHeader>
          <CardContent className="bg-white">
            <RecentTransactions transactions={userTransactions.slice(0, 5)} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

