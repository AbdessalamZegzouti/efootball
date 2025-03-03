"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { loginUser, registerUser } from "@/app/actions/auth"
import { useStore } from "@/lib/store"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const { login: storeLogin } = useStore()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await loginUser(new FormData(e.currentTarget))

      if (result.success && result.user) {
        await storeLogin(result.user)
        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: "مرحباً بك في DexterShop",
        })
        router.push("/dashboard")
      } else {
        toast({
          variant: "destructive",
          title: "خطأ",
          description: result.error,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء تسجيل الدخول",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)

      // Check if passwords match
      if (formData.get("password") !== formData.get("confirm-password")) {
        toast({
          variant: "destructive",
          title: "خطأ",
          description: "كلمات المرور غير متطابقة",
        })
        return
      }

      const result = await registerUser(formData)

      if (result.success && result.user) {
        await storeLogin(result.user)
        toast({
          title: "تم التسجيل بنجاح",
          description: "مرحباً بك في DexterShop",
        })
        router.push("/dashboard")
      } else {
        toast({
          variant: "destructive",
          title: "خطأ",
          description: result.error,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء التسجيل",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-efootball-yellow py-12">
      <div className="container mx-auto flex h-[80vh] items-center justify-center px-4">
        <Card className="w-full max-w-md border-efootball-blue">
          <CardHeader className="text-center bg-efootball-blue text-white">
            <CardTitle className="text-2xl">مرحباً بك</CardTitle>
            <CardDescription className="text-gray-200">قم بتسجيل الدخول أو إنشاء حساب جديد</CardDescription>
          </CardHeader>
          <CardContent className="bg-white pt-6">
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2 bg-efootball-blue">
                <TabsTrigger value="login" className="data-[state=active]:bg-efootball-pink">
                  تسجيل الدخول
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-efootball-pink">
                  إنشاء حساب
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" name="email" type="email" placeholder="example@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-efootball-pink hover:bg-efootball-pink/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم</Label>
                    <Input id="name" name="name" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">البريد الإلكتروني</Label>
                    <Input id="register-email" name="email" type="email" placeholder="example@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">كلمة المرور</Label>
                    <Input id="register-password" name="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                    <Input id="confirm-password" name="confirm-password" type="password" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-efootball-pink hover:bg-efootball-pink/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground bg-white">
            بالتسجيل، أنت توافق على شروط الاستخدام وسياسة الخصوصية
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

