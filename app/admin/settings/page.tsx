"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RibSettings } from "@/components/admin/rib-settings"
import { GeneralSettings } from "@/components/admin/general-settings"
import { SecuritySettings } from "@/components/admin/security-settings"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">إعدادات النظام</h1>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-white/10 border-white/20">
          <TabsTrigger value="general" className="data-[state=active]:bg-efootball-pink">
            عام
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-efootball-pink">
            الدفع
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-efootball-pink">
            الأمان
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>الإعدادات العامة</CardTitle>
              <CardDescription>إدارة الإعدادات العامة للمنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <GeneralSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الدفع</CardTitle>
              <CardDescription>إدارة إعدادات الدفع والحساب البنكي</CardDescription>
            </CardHeader>
            <CardContent>
              <RibSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الأمان</CardTitle>
              <CardDescription>إدارة إعدادات الأمان والخصوصية</CardDescription>
            </CardHeader>
            <CardContent>
              <SecuritySettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

