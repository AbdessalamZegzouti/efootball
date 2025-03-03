"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useStore, type Account } from "@/lib/store"
import { useToast } from "@/components/ui/use-toast"

interface EditAccountFormProps {
  account: Account
  onClose: () => void
}

export function EditAccountForm({ account, onClose }: EditAccountFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { updateAccount } = useStore()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const updates = {
      title: formData.get("title") as string,
      price: formData.get("price") as string,
      rating: formData.get("rating") as string,
      level: Number.parseInt(formData.get("level") as string),
      players: Number.parseInt(formData.get("players") as string),
      seller: formData.get("seller") as string,
    }

    try {
      updateAccount(account.id, updates)
      toast({
        title: "تم تحديث الحساب",
        description: "تم تحديث معلومات الحساب بنجاح",
      })
      onClose()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء تحديث الحساب",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">عنوان الحساب</Label>
        <Input id="title" name="title" defaultValue={account.title} required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">السعر</Label>
          <Input id="price" name="price" type="number" defaultValue={account.price} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">التصنيف</Label>
          <Select name="rating" defaultValue={account.rating} required>
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
          <Input id="level" name="level" type="number" min="1" max="100" defaultValue={account.level} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="players">عدد اللاعبين</Label>
          <Input id="players" name="players" type="number" defaultValue={account.players} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="seller">اسم البائع</Label>
        <Input id="seller" name="seller" defaultValue={account.seller} required />
      </div>

      <div className="flex gap-2">
        <Button type="submit" className="flex-1" disabled={isLoading}>
          {isLoading ? "جاري التحديث..." : "حفظ التغييرات"}
        </Button>
        <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
          إلغاء
        </Button>
      </div>
    </form>
  )
}

