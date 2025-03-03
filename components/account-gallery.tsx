"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function AccountGallery() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image src={images[activeImage] || "/placeholder.svg"} alt="صورة الحساب" fill className="object-cover" />
      </div>

      <div className="flex gap-2 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative h-20 w-20 overflow-hidden rounded-md border-2",
              activeImage === index ? "border-primary" : "border-transparent",
            )}
            onClick={() => setActiveImage(index)}
          >
            <Image src={image || "/placeholder.svg"} alt={`صورة مصغرة ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

