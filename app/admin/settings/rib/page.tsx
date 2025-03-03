"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export default function RibSettingsPage() {
  const [ribNumber, setRibNumber] = useState("181 810 2116785150 0003 5199 0076")
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsEditing(false)
    toast({
      title: "تم الحفظ!",
      description: "تم تحديث رقم الحساب البنكي بنجاح",
    })
  }

  return (
    <div className="container mx-auto py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
        <Card className="border-efootball-blue">
          <CardHeader className="bg-efootball-blue text-white">
            <CardTitle>إعدادات الحساب البنكي</CardTitle>
            <CardDescription className="text-gray-200">إدارة معلومات الحساب البنكي CIH Bank</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rib">رقم الحساب البنكي (RIB)</Label>
                {isEditing ? (
                  <Input
                    id="rib"
                    value={ribNumber}
                    onChange={(e) => setRibNumber(e.target.value)}
                    className="font-mono"
                    placeholder="أدخل رقم الحساب البنكي"
                  />
                ) : (
                  <div className="p-2 bg-muted rounded-lg">
                    <code className="text-sm font-semibold">{ribNumber}</code>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <Button
                      className="flex-1 bg-efootball-pink hover:bg-efootball-pink/90"
                      onClick={handleSave}
                      disabled={isSaving}
                    >
                      {isSaving ? "جاري الحفظ..." : "حفظ التغييرات"}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsEditing(false)}
                      disabled={isSaving}
                    >
                      إلغاء
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" className="flex-1" onClick={() => setIsEditing(true)}>
                    تعديل رقم الحساب
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

