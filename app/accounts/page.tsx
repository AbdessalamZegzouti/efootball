"use client"

import { useState } from "react"
import { AccountFilters } from "@/components/account-filters"
import { AccountsList } from "@/components/accounts-list"
import { Pagination } from "@/components/pagination"

export default function AccountsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const handleFilterChange = async (filters: any) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Here you would typically fetch filtered data from your API
    console.log("Applied filters:", filters)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch data for the new page
  }

  return (
    <div className="bg-efootball-yellow py-8 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-3xl font-bold text-efootball-blue">حسابات Efootball للبيع</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="md:col-span-1 relative">
            <AccountFilters onFilterChange={handleFilterChange} isLoading={isLoading} />
          </div>
          <div className="md:col-span-3">
            <AccountsList isLoading={isLoading} />
            <div className="mt-8">
              <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

