"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { SkeletonCard } from "@/components/ui/skeleton-card"

interface AccountsListProps {
  isLoading?: boolean
}

export function AccountsList({ isLoading = false }: AccountsListProps) {
  const accounts = [
    {
      id: "1",
      title: "حساب Efootball ممتاز",
      price: "1,200",
      rating: "ممتاز",
      level: 45,
      players: 120,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "حساب Efootball محترف",
      price: "2,500",
      rating: "نادر",
      level: 78,
      players: 200,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "حساب Efootball مميز",
      price: "950",
      rating: "جيد جدا",
      level: 32,
      players: 85,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "4",
      title: "حساب Efootball للمبتدئين",
      price: "500",
      rating: "مبتدئ",
      level: 15,
      players: 40,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "5",
      title: "حساب Efootball احترافي",
      price: "1,800",
      rating: "ممتاز",
      level: 60,
      players: 150,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "6",
      title: "حساب Efootball متقدم",
      price: "1,100",
      rating: "جيد جدا",
      level: 40,
      players: 95,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <SkeletonCard key={index}>
            <div className="h-48 bg-gray-200 animate-pulse" />
          </SkeletonCard>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {accounts.map((account) => (
        <motion.div
          key={account.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={`/accounts/${account.id}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg border-efootball-pink/20 hover:border-efootball-pink">
              <div className="relative h-48 w-full">
                <Image src={account.image || "/placeholder.svg"} alt={account.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-efootball-pink text-white">{account.rating}</Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-efootball-blue text-efootball-blue">
                    المستوى: {account.level}
                  </Badge>
                  <span className="font-bold text-efootball-pink">{account.price} درهم</span>
                </div>
                <CardTitle className="mt-2 text-lg text-efootball-blue">{account.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>اللاعبين: {account.players}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="w-full rounded-md bg-efootball-blue p-2 text-center text-sm font-medium text-white transition-colors hover:bg-efootball-pink">
                  عرض التفاصيل
                </div>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

