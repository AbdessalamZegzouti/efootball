"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

export function SecuritySettings() {
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
        description: "تم حفظ إعدادات الأمان بنجاح",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>المصادقة الثنائية</Label>
            <p className="text-sm text-muted-foreground">تفعيل المصادقة الثنائية لحماية إضافية</p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>تسجيل النشاطات</Label>
            <p className="text-sm text-muted-foreground">تسجيل جميع النشاطات في النظام</p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>إخطارات الأمان</Label>
            <p className="text-sm text-muted-foreground">إرسال إخطارات عند اكتشاف نشاط مشبوه</p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">تغيير كلمة المرور</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">كلمة المرور الحالية</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "جاري الحفظ..." : "حفظ الإعدادات"}
      </Button>
    </form>
  )
}

