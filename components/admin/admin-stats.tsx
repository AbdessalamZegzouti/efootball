"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, CreditCard, Users, DollarSign } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface StatsData {
  accounts: number
  transactions: number
  users: number
  revenue: number
}

interface AdminStatsProps {
  data: StatsData
}

export function AdminStats({ data }: AdminStatsProps) {
  const [stats, setStats] = useState(data)
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    setStats(data)
  }, [data])

  const statsConfig = [
    {
      title: "إجمالي الحسابات",
      value: stats.accounts,
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "المعاملات",
      value: stats.transactions,
      icon: CreditCard,
      color: "text-green-500",
    },
    {
      title: "المستخدمين",
      value: stats.users,
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "الإيرادات",
      value: stats.revenue,
      icon: DollarSign,
      color: "text-yellow-500",
      isCurrency: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsConfig.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-efootball-blue/20 hover:border-efootball-blue/40 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={stat.color}
              >
                <stat.icon className="h-4 w-4" />
              </motion.div>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl font-bold"
                >
                  {stat.isCurrency ? `${stat.value.toLocaleString()} درهم` : stat.value.toLocaleString()}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

