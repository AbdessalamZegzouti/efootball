import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ShieldCheck, CreditCard, Users, AlertCircle, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Users,
      title: "إنشاء حساب",
      description: "قم بالتسجيل في الموقع مجاناً وأنشئ حسابك الخاص.",
      image: "/images/step-1.jpg",
    },
    {
      icon: CheckCircle,
      title: "اختيار الحساب",
      description: "تصفح الحسابات المتاحة واختر الحساب المناسب لك.",
      image: "/images/step-2.jpg",
    },
    {
      icon: CreditCard,
      title: "الدفع الآمن",
      description: "ادفع بأمان من خلال منصتنا. نحتفظ بالمبلغ حتى تستلم الحساب.",
      image: "/images/step-3.jpg",
    },
    {
      icon: ShieldCheck,
      title: "استلام الحساب",
      description: "بعد التحقق من الحساب، سنقوم بتسليمه لك وإتمام عملية البيع.",
      image: "/images/step-4.jpg",
    },
  ]

  const features = [
    {
      title: "ضمان الحماية",
      description: "نضمن حماية كاملة للمشتري والبائع من خلال نظام الوساطة الآمن.",
      icon: ShieldCheck,
    },
    {
      title: "دعم فني 24/7",
      description: "فريق دعم متخصص متاح على مدار الساعة لمساعدتك.",
      icon: HelpCircle,
    },
    {
      title: "تحقق من الحسابات",
      description: "نتحقق من جميع الحسابات قبل عرضها للبيع لضمان جودتها.",
      icon: AlertCircle,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-efootball-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">كيف يعمل سوق Efootball؟</h1>
            <p className="text-xl text-gray-300 mb-8">
              عملية بسيطة وآمنة لشراء وبيع حسابات Efootball. اكتشف كيف يمكننا مساعدتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-efootball-yellow hover:bg-efootball-yellow/90 text-efootball-blue">
                <Link href="/accounts">تصفح الحسابات</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-efootball-yellow py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-efootball-blue text-center mb-12">خطوات البيع والشراء</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={index} className="border-efootball-blue">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-efootball-pink p-3 inline-block">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-efootball-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="relative h-40 mt-4 rounded-lg overflow-hidden">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-efootball-blue py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">مميزات المنصة</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-efootball-pink">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-efootball-pink p-3 inline-block">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-efootball-blue mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

