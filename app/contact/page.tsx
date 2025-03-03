import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-efootball-yellow min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-efootball-blue mb-4">اتصل بنا</h1>
            <p className="text-lg text-gray-700 mb-8">
              نحن هنا لمساعدتك. يمكنك التواصل معنا عبر النموذج التالي أو من خلال معلومات الاتصال المباشرة.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-efootball-blue p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-efootball-blue">البريد الإلكتروني</h3>
                  <p className="text-gray-600">azegzouti3@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-efootball-blue p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-efootball-blue">الهاتف</h3>
                  <p className="text-gray-600">212621947493+</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-efootball-blue p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-efootball-blue">العنوان</h3>
                  <p className="text-gray-600">مراكش، المغرب</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-efootball-blue">
            <CardHeader className="bg-efootball-blue text-white">
              <CardTitle>نموذج الاتصال</CardTitle>
              <CardDescription className="text-gray-200">املأ النموذج وسنرد عليك في أقرب وقت ممكن</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">الاسم</label>
                <Input placeholder="أدخل اسمك الكامل" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">البريد الإلكتروني</label>
                <Input type="email" placeholder="example@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">الموضوع</label>
                <Input placeholder="موضوع الرسالة" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">الرسالة</label>
                <Textarea placeholder="اكتب رسالتك هنا..." className="min-h-[150px]" />
              </div>

              <Button className="w-full bg-efootball-pink hover:bg-efootball-pink/90 text-white">إرسال الرسالة</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

