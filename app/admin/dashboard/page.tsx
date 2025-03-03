"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminStats } from "@/components/admin/admin-stats"
import { PendingTransactions } from "@/components/admin/pending-transactions"
import { RecentAccounts } from "@/components/admin/recent-accounts"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Mock data for demonstration
const mockData = {
  stats: {
    accounts: 120,
    transactions: 45,
    users: 250,
    revenue: 25000,
  },
  pendingTransactions: [
    {
      id: "T1",
      account: "حساب Efootball ممتاز",
      seller: "أحمد محمد",
      buyer: "خالد علي",
      amount: "1,200",
      date: "20 مارس 2023",
      status: "قيد الانتظار",
      whatsappNumber: "+212621947493",
    },
    // Add more transactions as needed
  ],
  recentAccounts: [
    {
      id: "A1",
      title: "حساب Efootball محترف",
      seller: "محمد علي",
      price: "2,500",
      date: "18 مارس 2023",
      status: "قيد المراجعة",
    },
    // Add more accounts as needed
  ],
}

export default function AdminDashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dashboardData, setDashboardData] = useState(mockData)
  const { toast } = useToast()

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setDashboardData(mockData)
        setIsLoading(false)
      } catch (err) {
        setError("حدث خطأ أثناء تحميل البيانات")
        toast({
          variant: "destructive",
          title: "خطأ",
          description: "حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى.",
        })
      }
    }

    loadDashboardData()
  }, [toast])

  if (error) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Card className="w-full max-w-md border-red-200">
          <CardHeader className="text-center text-red-500">
            <CardTitle>خطأ في التحميل</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">لوحة تحكم المسؤول</h1>
        <Button
          variant="outline"
          className="text-white border-white/20 hover:bg-white/10"
          onClick={() => window.location.reload()}
        >
          تحديث البيانات
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader className="space-y-0 pb-2">
                  <Skeleton className="h-4 w-[100px]" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-[60px]" />
                  <Skeleton className="mt-2 h-4 w-[100px]" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-[200px]" />
                  <Skeleton className="h-4 w-[300px]" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((j) => (
                      <Skeleton key={j} className="h-20 w-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <>
          <AdminStats data={dashboardData.stats} />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-efootball-pink">
              <CardHeader className="bg-efootball-pink text-white">
                <CardTitle>المعاملات قيد الانتظار</CardTitle>
                <CardDescription className="text-gray-100">معاملات تحتاج إلى موافقتك</CardDescription>
              </CardHeader>
              <CardContent className="bg-white">
                <PendingTransactions initialTransactions={dashboardData.pendingTransactions} />
              </CardContent>
            </Card>

            <Card className="border-efootball-pink">
              <CardHeader className="bg-efootball-pink text-white">
                <CardTitle>أحدث الحسابات</CardTitle>
                <CardDescription className="text-gray-100">حسابات تحتاج إلى مراجعة</CardDescription>
              </CardHeader>
              <CardContent className="bg-white">
                <RecentAccounts initialAccounts={dashboardData.recentAccounts} />
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </motion.div>
  )
}

