"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useStore } from "@/lib/store"
import { useToast } from "@/components/ui/use-toast"
import { FileUpload } from "@/components/ui/file-upload"
import { uploadAccountImage } from "@/app/actions/upload"

export function AddAccountForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const { addAccount } = useStore()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const newAccount = {
      id: Date.now().toString(),
      title: formData.get("title") as string,
      price: formData.get("price") as string,
      rating: formData.get("rating") as string,
      level: Number.parseInt(formData.get("level") as string),
      players: Number.parseInt(formData.get("players") as string),
      image: images[0] || "/placeholder.svg?height=200&width=300",
      seller: formData.get("seller") as string,
      status: "pending" as const,
      date: new Date().toISOString().split("T")[0],
    }

    try {
      addAccount(newAccount)
      toast({
        title: "تم إضافة الحساب",
        description: "تمت إضافة الحساب بنجاح وسيتم مراجعته",
      })
      e.currentTarget.reset()
      setImages([])
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء إضافة الحساب",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>صور الحساب</Label>
        <div className="grid grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((index) => (
            <FileUpload
              key={index}
              onUpload={uploadAccountImage}
              defaultValue={images[index]}
              onChange={(url) => {
                setImages((prev) => {
                  const newImages = [...prev]
                  if (url) {
                    newImages[index] = url
                  } else {
                    newImages.splice(index, 1)
                  }
                  return newImages
                })
              }}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          يمكنك رفع حتى 4 صور للحساب. الصورة الأولى ستكون الصورة الرئيسية.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">عنوان الحساب</Label>
        <Input id="title" name="title" required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">السعر</Label>
          <Input id="price" name="price" type="number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">التصنيف</Label>
          <Select name="rating" required>
            <SelectTrigger>
              <SelectValue placeholder="اختر التصنيف" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ممتاز">ممتاز</SelectItem>
              <SelectItem value="نادر">نادر</SelectItem>
              <SelectItem value="جيد جدا">جيد جدا</SelectItem>
              <SelectItem value="مبتدئ">مبتدئ</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="level">المستوى</Label>
          <Input id="level" name="level" type="number" min="1" max="100" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="players">عدد اللاعبين</Label>
          <Input id="players" name="players" type="number" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="seller">اسم البائع</Label>
        <Input id="seller" name="seller" required />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "جاري الإضافة..." : "إضافة الحساب"}
      </Button>
    </form>
  )
}

