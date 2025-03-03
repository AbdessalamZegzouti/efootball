import type React from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-efootball-blue">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  )
}

