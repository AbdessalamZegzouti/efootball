"use client"

import { useStore } from "@/lib/store"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkeletonCard } from "@/components/ui/skeleton-card"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function LatestListings() {
  const { accounts } = useStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Filter only active accounts and get the latest 3
  const latestAccounts = accounts
    .filter((account) => account.status === "active")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      {latestAccounts.map((account) => (
        <motion.div key={account.id} variants={itemVariants}>
          <Link href={`/accounts/${account.id}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg bg-white border-efootball-blue">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={account.image || "/placeholder.svg"}
                  alt={account.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-efootball-pink text-white animate-fade-in">{account.rating}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-efootball-blue group-hover:text-efootball-pink transition-colors">
                  {account.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">المستوى: {account.level}</span>
                  <span className="font-bold text-efootball-pink transform group-hover:scale-110 transition-transform">
                    {account.price} درهم
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

