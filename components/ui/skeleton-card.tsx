import type React from "react"
import { cn } from "@/lib/utils"

interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean
  children: React.ReactNode
}

export function SkeletonCard({ isLoading = true, children, className, ...props }: SkeletonCardProps) {
  if (!isLoading) return <>{children}</>

  return (
    <div
      className={cn("rounded-lg border border-efootball-blue/20 bg-white/50 p-4", "animate-pulse", className)}
      {...props}
    >
      <div className="space-y-3">
        <div className="h-48 rounded-lg bg-efootball-blue/10" />
        <div className="h-4 w-2/3 rounded-lg bg-efootball-blue/10" />
        <div className="h-4 w-1/2 rounded-lg bg-efootball-blue/10" />
        <div className="h-8 w-full rounded-lg bg-efootball-blue/10" />
      </div>
    </div>
  )
}

