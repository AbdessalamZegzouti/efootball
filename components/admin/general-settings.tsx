"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function GeneralSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "تم الحفظ",
        description: "تم حفظ الإعدادات العامة بنجاح",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء حفظ الإعدادات",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="site-name">اسم الموقع</Label>
        <Input id="site-name" defaultValue="DexterShop" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">وصف الموقع</Label>
        <Textarea id="description" defaultValue="المنصة الأولى لبيع وشراء حسابات Efootball بأمان وضمان" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">البريد الإلكتروني للتواصل</Label>
        <Input id="contact-email" type="email" defaultValue="azegzouti3@gmail.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp">رقم WhatsApp</Label>
        <Input id="whatsapp" defaultValue="+212621947493" />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "جاري الحفظ..." : "حفظ الإعدادات"}
      </Button>
    </form>
  )
}

