"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, CreditCard, Wallet } from "lucide-react"
import { motion } from "framer-motion"

interface DashboardStatsProps {
  accountsCount: number
  transactionsCount: number
  balance: number
}

export function DashboardStats({ accountsCount, transactionsCount, balance }: DashboardStatsProps) {
  const stats = [
    {
      title: "حساباتي",
      value: accountsCount,
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "معاملاتي",
      value: transactionsCount,
      icon: CreditCard,
      color: "text-green-500",
    },
    {
      title: "الرصيد",
      value: balance,
      icon: Wallet,
      color: "text-yellow-500",
      isCurrency: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-efootball-blue/20 hover:border-efootball-blue/40 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">{stat.title}</CardTitle>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={stat.color}
              >
                <stat.icon className="h-4 w-4" />
              </motion.div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {stat.isCurrency ? `${stat.value.toLocaleString()} درهم` : stat.value.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

