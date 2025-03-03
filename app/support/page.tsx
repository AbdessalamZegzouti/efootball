import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Phone, Mail, FileText } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "المحادثة المباشرة",
      description: "تحدث مع فريق الدعم مباشرة",
      action: "بدء المحادثة",
      available: true,
    },
    {
      icon: Phone,
      title: "اتصل بنا",
      description: "+212 5XX-XXXXXX",
      action: "اتصل الآن",
      available: true,
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "support@efootball-market.com",
      action: "إرسال بريد",
      available: true,
    },
    {
      icon: FileText,
      title: "تذكرة دعم",
      description: "افتح تذكرة دعم فني",
      action: "فتح تذكرة",
      available: true,
    },
  ]

  const commonIssues = [
    {
      title: "مشاكل الدفع",
      solutions: [
        "تأكد من تفعيل بطاقتك للمدفوعات الإلكترونية",
        "تحقق من وجود رصيد كافٍ",
        "جرب طريقة دفع بديلة",
        "تواصل مع البنك إذا استمرت المشكلة",
      ],
    },
    {
      title: "مشاكل الحساب",
      solutions: [
        "تأكد من صحة بيانات تسجيل الدخول",
        "استخدم خيار استعادة كلمة المرور",
        "تحقق من تفعيل بريدك الإلكتروني",
        "راجع إعدادات الأمان",
      ],
    },
    {
      title: "مشاكل البيع",
      solutions: [
        "تأكد من اكتمال معلومات الحساب",
        "انتظر موافقة الإدارة على العرض",
        "تحقق من صحة السعر المحدد",
        "راجع شروط البيع",
      ],
    },
  ]

  return (
    <div className="bg-efootball-yellow min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-efootball-blue mb-8">مركز المساعدة</h1>

        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="bg-efootball-blue w-full justify-start">
            <TabsTrigger value="contact" className="data-[state=active]:bg-efootball-pink">
              تواصل معنا
            </TabsTrigger>
            <TabsTrigger value="issues" className="data-[state=active]:bg-efootball-pink">
              حلول شائعة
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {supportOptions.map((option, index) => (
                <Card key={index} className="border-efootball-blue">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-efootball-pink p-3 inline-block">
                      <option.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-efootball-blue mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <Button
                      className="w-full bg-efootball-pink hover:bg-efootball-pink/90 text-white"
                      disabled={!option.available}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="issues">
            <div className="grid gap-6 md:grid-cols-3">
              {commonIssues.map((issue, index) => (
                <Card key={index} className="border-efootball-blue">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-efootball-blue mb-4">{issue.title}</h3>
                    <ul className="space-y-2">
                      {issue.solutions.map((solution, sIndex) => (
                        <li key={sIndex} className="flex items-start">
                          <span className="text-efootball-pink mr-2">•</span>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">لم تجد ما تبحث عنه؟</p>
          <Button asChild className="bg-efootball-blue hover:bg-efootball-blue/90">
            <Link href="/faq">تصفح الأسئلة الشائعة</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

